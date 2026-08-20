import './research-catalog.css';
import { useEffect, useMemo, useState, type KeyboardEvent } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { AlertTriangle, ExternalLink, Fish, MapPin, Search, ShieldAlert, Star, Sun, Waves } from 'lucide-react';
import { allSpecies, regions, safetyColor, spots, type Region, type Species, type Spot } from './data';
import { currentSpotLegality } from './fishing-smarts/app-integration';
import { buildSelectedWaterOpportunity } from './fishing-smarts/selected-water-opportunity';
import { ingestLiveStatusCache, reviewedTelemetryFromCache, type LiveStatusCache, type LiveTelemetry } from './telemetry';
import { buildSpotPopup } from './popup-content';
import { reconcileSelectedId } from './selection';
import { googleMapsUrl } from './navigation';
import { telemetryForSpot } from './selected-telemetry';
import { nextWorkspaceView, type WorkspaceView } from './workspace-navigation';

type SpotMode = 'All' | 'Favorites' | 'Surf' | 'Pier/Jetty' | 'Bay Shore' | 'Hazard Watch';
type SortMode = 'name' | 'region';

function formatDataDate(value?: string) {
  if (!value) return 'Waiting for live refresh';
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? 'Live refresh unavailable' : date.toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' });
}


function makeIcon(_spot: Spot, isSelected: boolean) {
  const color = '#67e8f9';
  const size = isSelected ? 28 : 20;
  const stroke = isSelected ? '#ffffff' : 'rgba(255,255,255,0.75)';
  const shadow = isSelected ? `0 0 0 3px rgba(103,232,249,0.9), 0 0 30px ${color}` : `0 0 0 2px ${stroke}, 0 0 20px ${color}`;

  return L.divIcon({
    className: '',
    html: `<div class="marker-dot" style="width:${size}px;height:${size}px;color:${color};background:${color};border-color:${stroke};box-shadow:${shadow}"></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2]
  });
}

function MapController({ selectedSpot, visibleSpots }: { selectedSpot: Spot; visibleSpots: Spot[] }) {
  const map = useMap();

  useEffect(() => {
    const timer = setTimeout(() => map.invalidateSize(), 100);
    return () => clearTimeout(timer);
  }, [map]);

  useEffect(() => {
    if (!selectedSpot) return;
    const currentZoom = map.getZoom();
    const targetZoom = Math.max(currentZoom, 11);
    map.flyTo([selectedSpot.lat, selectedSpot.lng], targetZoom, {
      duration: 0.6,
      easeLinearity: 0.25
    });
  }, [map, selectedSpot]);

  useEffect(() => {
    if (!visibleSpots.length) return;
    if (visibleSpots.length === spots.length) return;

    const bounds = L.latLngBounds(visibleSpots.map(s => [s.lat, s.lng]));
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 13, animate: true, duration: 0.6 });
  }, [map, visibleSpots]);

  return null;
}

function ClusteredMarkers({
  visibleSpots,
  selectedId,
  onSelect
}: {
  visibleSpots: Spot[];
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  const map = useMap();

  useEffect(() => {
    const clusterGroup = L.markerClusterGroup({
      showCoverageOnHover: false,
      maxClusterRadius: 35,
      spiderfyOnMaxZoom: true,
      zoomToBoundsOnClick: true,
      animate: true,
      iconCreateFunction: (cluster) => {
        const count = cluster.getChildCount();
        return L.divIcon({
          html: `<div class="custom-cluster">${count}</div>`,
          className: '',
          iconSize: [36, 36]
        });
      }
    });

    visibleSpots.forEach((spot) => {
      const isSelected = spot.id === selectedId;
      const markerLabel = `${spot.name}, ${isSelected ? 'selected' : 'not selected'}`;
      const marker = L.marker([spot.lat, spot.lng], {
        icon: makeIcon(spot, isSelected),
        title: markerLabel,
        alt: markerLabel,
        keyboard: true
      });
      const syncMarkerAccessibility = () => {
        const markerElement = marker.getElement();
        if (!markerElement) return;
        markerElement.setAttribute('role', 'button');
        markerElement.setAttribute('aria-label', markerLabel);
        markerElement.setAttribute('aria-pressed', String(isSelected));
      };
      marker.on('add', syncMarkerAccessibility);

      const popupContent = buildSpotPopup(document, spot) as unknown as HTMLElement;

      marker.bindPopup(popupContent, {
        closeButton: false,
        className: 'leaflet-popup-custom'
      });

      marker.on('click', () => {
        onSelect(spot.id);
      });

      clusterGroup.addLayer(marker);
    });

    map.addLayer(clusterGroup);

    return () => {
      map.removeLayer(clusterGroup);
    };
  }, [map, visibleSpots, selectedId, onSelect]);

  return null;
}

function loadingTelemetry(spot: Spot): LiveTelemetry {
  return {
    status: 'loading',
    stationName: spot.tideStation,
    buoyId: 'Unavailable',
    waveLabel: 'Significant wave height',
    observations: { level: { availability: 'unavailable', freshness: 'unavailable' }, wind: { availability: 'unavailable', freshness: 'unavailable' }, buoy: { availability: 'unavailable', freshness: 'unavailable' }, wave: { availability: 'unavailable', freshness: 'unavailable' }, temperature: { availability: 'unavailable', freshness: 'unavailable' } },
    message: 'Loading the server-cached ocean snapshot…'
  };
}

function useLiveTelemetry(spot: Spot): { telemetry: LiveTelemetry; cache?: LiveStatusCache } {
  const spotKey = spot.stableId ?? `spot:${spot.id}`;
  const [state, setState] = useState<{ spotKey: string; telemetry: LiveTelemetry; cache?: LiveStatusCache }>(() => ({
    spotKey,
    telemetry: loadingTelemetry(spot)
  }));

  useEffect(() => {
    const controller = new AbortController();
    const refresh = () => fetch(`/data/live-status.json?ts=${Date.now()}`, { signal: controller.signal, cache: 'no-store' })
      .then((response) => response.ok ? response.json() : Promise.reject(new Error(`live cache ${response.status}`)))
      .then((raw: unknown) => {
        const issued = ingestLiveStatusCache(raw);
        const next = reviewedTelemetryFromCache(issued, spotKey);
        if (!next) throw new Error('Selected spot has no reviewed telemetry binding.');
        setState({ spotKey, telemetry: next, cache: issued });
      })
      .catch(() => {
        if (!controller.signal.aborted) {
          setState({
            spotKey,
            telemetry: { status:'unavailable', stationName:spot.name, buoyId:'Unavailable', waveLabel:'Significant wave height', observations:{level:{availability:'unavailable',freshness:'unavailable'},wind:{availability:'unavailable',freshness:'unavailable'},buoy:{availability:'unavailable',freshness:'unavailable'},wave:{availability:'unavailable',freshness:'unavailable'},temperature:{availability:'unavailable',freshness:'unavailable'}}, message:'Same-origin live cache is unavailable or invalid.' }
          });
        }
      });

    setState({ spotKey, telemetry: loadingTelemetry(spot) });
    void refresh();
    const interval = setInterval(refresh, 60_000);
    const onVisible = () => { if (!document.hidden) void refresh(); };
    const onFocus = () => void refresh();
    document.addEventListener('visibilitychange', onVisible);
    window.addEventListener('focus', onFocus);

    return () => { controller.abort(); clearInterval(interval); document.removeEventListener('visibilitychange', onVisible); window.removeEventListener('focus', onFocus); };
  }, [spot, spotKey]);

  return telemetryForSpot(state, spotKey, loadingTelemetry(spot));
}

function evidenceScope(spot: Spot, taxonId: string) {
  const edge = spot.evidenceEdges?.find((item) => item.speciesId === taxonId);
  if (!edge) return 'No reviewed history yet';
  return edge.evidenceType.includes('exact-spot') ? 'Reported at this spot' : 'Reported nearby';
}

function shortUnavailableReason(reason?: string) {
  if (!reason) return 'No recent reading';
  if (/wave|environment-compatible|representative/i.test(reason)) return 'No nearby matching sensor';
  if (/clock|expired|age/i.test(reason)) return 'No recent reading';
  return 'Reading unavailable';
}

function plainSafetyLabel(spot: Spot) {
  if (spot.safety === 'Hazard') return 'High-risk shore';
  if (spot.safety === 'Caution') return 'Extra caution';
  return 'Routine caution';
}

function plainCommandStatus(spot: Spot) {
  if (spot.accessStatus?.state === 'closed') return 'Access closed';
  if (spot.accessStatus?.state === 'partially-open' || spot.accessStatus?.state === 'unknown') return 'Verify access';
  return plainSafetyLabel(spot);
}

function plainAccessSummary(spot: Spot) {
  if (spot.accessStatus?.state === 'closed') return 'The listed access point is closed. Check the owner notice before travel.';
  if (spot.accessStatus?.state === 'partially-open') return 'Only part of this area is listed as open. Check the owner notice and posted signs.';
  if (spot.accessStatus?.state === 'unknown') return 'Current access could not be confirmed. Check the owner notice before travel.';
  return 'Access is listed for this spot. Check current hours, closures, and posted signs before travel.';
}

function plainSafetySummary(spot: Spot) {
  if (spot.accessStatus?.state === 'closed') return 'Do not plan a trip here — the listed access point is closed.';
  if (spot.accessStatus?.state === 'partially-open' || spot.accessStatus?.state === 'unknown') return 'Access needs confirmation — check the owner notice before leaving.';
  if (spot.safety === 'Hazard') return 'High-risk shoreline — check swell, footing, and escape routes before going.';
  if (spot.safety === 'Caution') return 'Use extra caution and check local conditions before going.';
  return 'Access is listed as open; use normal shore caution.';
}

function plainLegalSummary(items: ReturnType<typeof currentSpotLegality>) {
  if (items.some((item) => item.regionalStatus === 'closed')) return 'At least one listed species is closed to retention. Check current CDFW rules before fishing.';
  if (items.some((item) => item.regionalStatus !== 'open')) return 'Current rules could not be confirmed for every listed species. Check CDFW before choosing a target.';
  return 'Regional rules were found for the listed species. Size, bag, season, gear, and local closure rules still apply.';
}

function App() {
  const [region, setRegion] = useState<Region | 'All'>('All');
  const [species, setSpecies] = useState<Species | 'All'>('All');
  const [mode, setMode] = useState<SpotMode>('All');
  const [sortMode, setSortMode] = useState<SortMode>('name');
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState('linda-mar');
  const [showAllRanked, setShowAllRanked] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(() => new Set(JSON.parse(localStorage.getItem('bay-bite-favorites') || '[]')));
  const [deckWhite, setDeckWhite] = useState(false);
  const [workspaceView, setWorkspaceView] = useState<WorkspaceView>('now');


  const filteredSpots = useMemo(() => {
    const q = query.trim().toLowerCase();
    return spots.filter((spot) => {
      const regionOk = region === 'All' || spot.region === region;
      const speciesOk = species === 'All' || spot.species.includes(species);
      const modeOk =
        mode === 'All' ||
        (mode === 'Favorites' && favorites.has(spot.id)) ||
        (mode === 'Surf' && spot.type === 'Surf') ||
        (mode === 'Pier/Jetty' && ['Pier', 'Jetty', 'Breakwater'].includes(spot.type)) ||
        (mode === 'Bay Shore' && ['Bay Shore', 'Marina'].includes(spot.type)) ||
        (mode === 'Hazard Watch' && spot.safety !== 'Green');
      const searchOk = !q || [spot.name, spot.region, spot.type, spot.tideStation, ...spot.species, spot.accessNote].join(' ').toLowerCase().includes(q);
      return regionOk && speciesOk && modeOk && searchOk;
    });
  }, [region, species, mode, query, favorites]);

  const sortedSpots = useMemo(() => [...filteredSpots].sort((a, b) => {
    if (sortMode === 'region') return a.region.localeCompare(b.region) || a.name.localeCompare(b.name);
    return a.name.localeCompare(b.name);
  }), [filteredSpots, sortMode]);

  const reconciledSelectedId = reconcileSelectedId(selectedId, filteredSpots);
  useEffect(() => {
    if (reconciledSelectedId !== selectedId) setSelectedId(reconciledSelectedId);
  }, [reconciledSelectedId, selectedId]);

  const selected = spots.find((spot) => spot.id === reconciledSelectedId) ?? spots[0];
  const visibleList = sortedSpots.slice(0, showAllRanked ? 40 : 8);
  const { telemetry, cache: liveCache } = useLiveTelemetry(selected);
  const legalItems = currentSpotLegality(selected);
  const scientificOpportunity = buildSelectedWaterOpportunity(selected, telemetry, new Date().toISOString(), liveCache);
  const usefulLiveConditionCount = [telemetry.waterLevelFt, telemetry.windSpeedKt, telemetry.waveHeightFt, telemetry.waterTempF].filter(Boolean).length;
  const hasUsefulLiveConditions = usefulLiveConditionCount >= 2;
  const hasPresentation = scientificOpportunity.some(({ result }) => result.presentations.length > 0);
  const officialLegalLinks = [...new Map(legalItems.filter((item) => item.sourceUrl).map((item) => [item.sourceUrl, { label: `${item.label} rules`, url: item.sourceUrl! }])).values()];

  function onWorkspaceTabKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const nextView = nextWorkspaceView(workspaceView, event.key);
    if (!nextView) return;
    event.preventDefault();
    setWorkspaceView(nextView);
    requestAnimationFrame(() => document.getElementById(`workspace-${nextView}-tab`)?.focus());
  }

  function toggleFavorite(id: string) {
    const next = new Set(favorites);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setFavorites(next);
    localStorage.setItem('bay-bite-favorites', JSON.stringify([...next]));
  }

  return (
    <main className={`app-shell ${deckWhite ? 'deck-white' : ''}`}>
      <header className="field-header">
        <div className="brand-lockup">
          <span className="brand-mark" aria-hidden="true"><Waves size={21} /></span>
          <div><strong>Bay Bite</strong><span>Shore fishing field tool</span></div>
        </div>
        <div className="header-tools">
          <span className="freshness">Data updated {formatDataDate(liveCache?.generatedAt)}</span>
          <button className="theme-button" onClick={() => setDeckWhite(!deckWhite)} aria-label={deckWhite ? 'Use dark theme' : 'Use Deck White theme'}>
            <Sun size={17} /> {deckWhite ? 'Dark' : 'Deck White'}
          </button>
        </div>
      </header>

      <div className="field-layout">
        <section className="card map-card" id="fishing-map" aria-labelledby="map-title">
          <div className="map-toolbar">
            <div><h1 id="map-title"><MapPin size={20} /> Find a fishing spot</h1><span>{filteredSpots.length} of {spots.length} places</span></div>
            <label className="search-box"><Search size={18} /><span className="sr-only">Search fishing spots</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search a pier, beach, species…" /></label>
          </div>
          <div className="mode-row" aria-label="Quick spot filters">
            {(['All', 'Favorites', 'Surf', 'Pier/Jetty', 'Bay Shore', 'Hazard Watch'] as SpotMode[]).map((item) => <button key={item} className={`mode-chip ${mode === item ? 'active' : ''}`} aria-pressed={mode === item} onClick={() => setMode(item)}>{item}</button>)}
          </div>
          <details className="filter-drawer">
            <summary>More filters</summary>
            <div className="filter-fields">
              <label>Region<select value={region} onChange={(event) => setRegion(event.target.value as Region | 'All')}><option value="All">All regions</option>{regions.map((item) => <option key={item}>{item}</option>)}</select></label>
              <label>Species<select value={species} onChange={(event) => setSpecies(event.target.value as Species | 'All')}><option value="All">All species</option>{allSpecies.map((item) => <option key={item}>{item}</option>)}</select></label>
              <label>Sort<select value={sortMode} onChange={(event) => setSortMode(event.target.value as SortMode)}><option value="name">Name</option><option value="region">Region</option></select></label>
            </div>
          </details>
          <div className="map-wrap">
            <MapContainer center={[37.73, -122.36]} zoom={9} scrollWheelZoom style={{ height: '100%', width: '100%' }}>
              <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <ClusteredMarkers visibleSpots={filteredSpots} selectedId={selected.id} onSelect={setSelectedId} />
              <MapController selectedSpot={selected} visibleSpots={filteredSpots} />
            </MapContainer>
          </div>
          {filteredSpots.length === 0 && <p className="empty-state">No places match. Clear a filter or try another name.</p>}
        </section>

        <section className="card spot-workspace" id="selected-spot" aria-labelledby="selected-title">
          <div className="workspace-sticky">
            <div className="selected-heading">
              <div><span className="eyebrow">Selected spot</span><h2 id="selected-title">{selected.name}</h2><p>{selected.region} · {selected.type}</p></div>
              <button className={`favorite-button ${favorites.has(selected.id) ? 'active' : ''}`} aria-pressed={favorites.has(selected.id)} onClick={() => toggleFavorite(selected.id)} aria-label={favorites.has(selected.id) ? 'Remove favorite' : 'Add favorite'}><Star size={20} fill={favorites.has(selected.id) ? 'currentColor' : 'none'} /></button>
            </div>
            <div className="command-summary" aria-live="polite">
              <div><span>Conditions</span><strong>{hasUsefulLiveConditions ? 'Live readings available' : 'Limited live readings'}</strong></div>
              <div><span>Next tide</span><strong>{telemetry.nextHigh ? `High ${telemetry.nextHigh}` : telemetry.nextLow ? `Low ${telemetry.nextLow}` : 'No prediction'}</strong></div>
              <div><span>Access & safety</span><strong>{plainCommandStatus(selected)}</strong></div>
            </div>
            <div className="selected-actions">
              <a className="primary-action" href={googleMapsUrl(selected)} target="_blank" rel="noreferrer"><ExternalLink size={17} /> {selected.coordinateStatus === 'exact-named-feature' ? 'Directions to marker' : 'Find this area'}</a>
              <span className="location-note">{selected.coordinateStatus === 'exact-named-feature' ? 'Named map feature' : 'Approximate location — verify access on site'}</span>
            </div>
            <div className="workspace-tabs" role="tablist" aria-label="Selected spot views">
              <button id="workspace-now-tab" role="tab" aria-controls="workspace-panel" aria-selected={workspaceView === 'now'} tabIndex={workspaceView === 'now' ? 0 : -1} className={workspaceView === 'now' ? 'active' : ''} onKeyDown={onWorkspaceTabKeyDown} onClick={() => setWorkspaceView('now')}>Now</button>
              <button id="workspace-target-tab" role="tab" aria-controls="workspace-panel" aria-selected={workspaceView === 'target'} tabIndex={workspaceView === 'target' ? 0 : -1} className={workspaceView === 'target' ? 'active' : ''} onKeyDown={onWorkspaceTabKeyDown} onClick={() => setWorkspaceView('target')}>Target</button>
              <button id="workspace-plan-tab" role="tab" aria-controls="workspace-panel" aria-selected={workspaceView === 'plan'} tabIndex={workspaceView === 'plan' ? 0 : -1} className={workspaceView === 'plan' ? 'active' : ''} onKeyDown={onWorkspaceTabKeyDown} onClick={() => setWorkspaceView('plan')}>Plan</button>
            </div>
          </div>

          <div id="workspace-panel" className="workspace-view" role="tabpanel" aria-labelledby={`workspace-${workspaceView}-tab`} tabIndex={0}>
            {workspaceView === 'now' && <section id="live-conditions" aria-labelledby="conditions-title">
              <div className="section-heading"><div><span className="eyebrow">Right now</span><h3 id="conditions-title">Conditions & tide</h3></div></div>
              {!hasUsefulLiveConditions ? <div className="no-data-summary"><strong>Live conditions are limited right now.</strong><p>Use the tide prediction below and check conditions at the shoreline before fishing.</p></div> : <div className="condition-grid" aria-live="polite">
                {telemetry.waterLevelFt && <div className="condition"><span>Water level</span><strong>{telemetry.waterLevelFt}</strong></div>}
                {telemetry.windSpeedKt && <div className="condition"><span>Wind</span><strong>{[telemetry.windDir, telemetry.windSpeedKt].filter(Boolean).join(' ')}{telemetry.gustKt ? ` · gust ${telemetry.gustKt}` : ''}</strong></div>}
                {telemetry.waveHeightFt && <div className="condition"><span>Waves</span><strong>{telemetry.waveHeightFt}{telemetry.wavePeriodSec ? ` @ ${telemetry.wavePeriodSec}` : ''}</strong></div>}
                {telemetry.waterTempF && <div className="condition"><span>Water temp</span><strong>{telemetry.waterTempF}</strong></div>}
              </div>}
              <div className="tide-times"><div><span>Next high</span><strong>{telemetry.nextHigh ?? 'No upcoming prediction'}</strong></div><div><span>Next low</span><strong>{telemetry.nextLow ?? 'No upcoming prediction'}</strong></div></div>
              <details className="condition-details"><summary>Condition details</summary><div className="diagnostic-list">{(['level','wind','wave','temperature'] as const).map((key) => { const item = telemetry.observations[key]; const label = key === 'level' ? 'Water level' : key === 'temperature' ? 'Water temperature' : key[0].toUpperCase() + key.slice(1); return <p key={key}><strong>{label}</strong> — {item.availability === 'available' ? `${item.stationName ?? 'Nearby station'}${item.ageMinutes !== undefined ? ` · updated ${item.ageMinutes} min ago` : ''}${item.distanceKm !== undefined ? ` · ${item.distanceKm} km away` : ''}` : shortUnavailableReason(item.reason)}</p>; })}</div></details>
            </section>}

            {workspaceView === 'target' && <section aria-labelledby="species-title">
              <div className="section-heading"><div><span className="eyebrow">Local history</span><h3 id="species-title">Target</h3></div><Fish size={21} /></div>
              <div className="species-list">
                {scientificOpportunity.length > 0 ? scientificOpportunity.map(({ displayLabel, taxonId, result }) => {
                  const presentation = result.presentations[0];
                  return <article className="species-summary" key={taxonId}><div><strong>{displayLabel}</strong><span>{evidenceScope(selected, taxonId)}</span></div>{presentation && <p>{presentation.lureFamily}: {presentation.retrieve}</p>}</article>;
                }) : selected.species.map((label) => <article className="species-summary" key={label}><div><strong>{label}</strong><span>No reviewed history yet</span></div></article>)}
              </div>
              {!hasPresentation && <p className="shared-uncertainty">There is not enough confirmed information for a practical starting presentation. Local history does not confirm fish are present today.</p>}
            </section>}

            {workspaceView === 'plan' && <section aria-labelledby="plan-title">
              <div className="section-heading"><div><span className="eyebrow">Before you go</span><h3 id="plan-title">Plan</h3></div><ShieldAlert size={21} /></div>
              <div className="plan-summary"><div><span>Access</span><strong>{selected.ownerJurisdiction}</strong><p>{plainAccessSummary(selected)}</p></div><div><span>Safety</span><strong>{plainSafetySummary(selected)}</strong><ul>{selected.safetyDetails?.slice(0, 2).map((item) => <li key={item}>{item}</li>)}</ul></div><div><span>License & rules</span><strong>{plainLegalSummary(legalItems)}</strong><p>{['Pier', 'Jetty', 'Breakwater'].includes(selected.type) ? 'A license exemption may apply only on a qualifying public structure. All other fishing rules still apply.' : 'A valid California fishing license is generally required for shore fishing.'}</p></div></div>
              {selected.accessStatus && selected.accessStatus.state !== 'open' && <p className="access-warning" role="alert"><strong>Check access before leaving.</strong> {selected.accessStatus.affectedArea} <a href={selected.accessStatus.sourceUrl} target="_blank" rel="noreferrer">Owner notice <ExternalLink size={13} /></a></p>}
              <p className="safety-reminder"><AlertTriangle size={16} /> Check posted closures, weather, swell, and regulations before fishing.</p>
            </section>}
          </div>
        </section>

        <details className="card technical-details">
          <summary>Sources & technical details</summary>
          <div className="details-grid">
            <section><h3>Condition sources</h3>{(['level','wind','wave','temperature'] as const).map((key) => { const item = telemetry.observations[key]; const label = key === 'level' ? 'Water level' : key === 'temperature' ? 'Water temperature' : key[0].toUpperCase() + key.slice(1); return <p key={key}><strong>{label}</strong><br/>{item.stationName ?? 'No nearby source'}{item.ageMinutes !== undefined ? ` · updated ${item.ageMinutes} min ago` : ''}{item.distanceKm !== undefined ? ` · ${item.distanceKm} km away` : ''}</p>; })}</section>
            <section><h3>Official access and fishing sources</h3><div className="source-grid">{selected.sourceLinks?.map((source) => <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>{source.label} <ExternalLink size={12}/></a>)}{officialLegalLinks.map((source) => <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>{source.label} <ExternalLink size={12}/></a>)}</div></section>
            <section><h3>About local history</h3><p>Local history is labeled as spot-specific or nearby and never presented as current fish presence.</p></section>
          </div>
        </details>

        <section className="card spot-list-card" aria-labelledby="matching-title">
          <div className="section-heading"><div><span className="eyebrow">Map results</span><h2 id="matching-title">Matching spots</h2></div><span>{sortedSpots.length}</span></div>
          <div className="spot-list">{visibleList.map((spot) => <button key={spot.id} className={`spot-card ${spot.id === selected.id ? 'selected' : ''}`} aria-pressed={spot.id === selected.id} onClick={() => setSelectedId(spot.id)}><span><strong>{spot.name}</strong><small>{spot.region} · {spot.type}</small></span><span className="spot-safety" style={{ color:safetyColor(spot.safety) }}>{plainSafetyLabel(spot)}</span></button>)}</div>
          {sortedSpots.length > 8 && <button className="show-more" onClick={() => setShowAllRanked(!showAllRanked)}>{showAllRanked ? 'Show fewer' : `Show ${Math.min(32, sortedSpots.length - 8)} more`}</button>}
        </section>
      </div>
    </main>
  );
}

export default App;

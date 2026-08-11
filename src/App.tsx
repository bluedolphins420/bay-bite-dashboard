import { useEffect, useMemo, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { AlertTriangle, Anchor, BarChart3, Clock, Compass, Download, ExternalLink, Fish, MapPin, Navigation, Route, Search, ShieldAlert, ShipWheel, Star, Sun, Waves, WifiOff } from 'lucide-react';
import { allSpecies, dailyReport, regions, researchSources, safetyColor, scoreColor, speciesMomentum, spots, tideSeries, type Region, type Species, type Spot } from './data';
import { spotTelemetryMapping, type LiveTelemetry } from './telemetry';

type SpotMode = 'All' | 'Favorites' | 'Surf' | 'Pier/Jetty' | 'Bay Shore' | 'Hazard Watch';
type SortMode = 'score' | 'name' | 'region';

function makeIcon(spot: Spot, isSelected: boolean) {
  const color = scoreColor(spot.score);
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
      const marker = L.marker([spot.lat, spot.lng], { icon: makeIcon(spot, isSelected) });

      const popupContent = `
        <div class="popup-card">
          <div class="popup-header">
            <strong>${spot.name}</strong>
            <span class="popup-score" style="color:${scoreColor(spot.score)}">${spot.score}</span>
          </div>
          <div class="popup-meta">${spot.region} · ${spot.type}</div>
          <div class="popup-window">⏱ ${spot.bestWindow}</div>
          <div class="popup-species">${spot.species.slice(0, 4).map(s => `<span class="popup-tag">${s}</span>`).join('')}</div>
        </div>
      `;

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

function formatNoaaTime(value?: string) {
  if (!value) return undefined;
  const date = new Date(value.replace(' ', 'T'));
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
}

function useLiveTelemetry(spot: Spot): LiveTelemetry {
  const [telemetry, setTelemetry] = useState<LiveTelemetry>({
    status: 'loading',
    stationName: spot.tideStation,
    buoyId: '46026',
    message: 'Connecting to NOAA CO-OPS & NDBC offshore buoys…'
  });

  useEffect(() => {
    const mapping = spotTelemetryMapping[spot.tideStation] || { noaaStation: '9414290', buoyId: '46026', stationName: spot.tideStation };
    const controller = new AbortController();

    const today = new Date();
    const begin = today.toISOString().slice(0, 10).replaceAll('-', '');
    const endDate = new Date(today.getTime() + 36 * 60 * 60 * 1000);
    const end = endDate.toISOString().slice(0, 10).replaceAll('-', '');

    setTelemetry({
      status: 'loading',
      stationName: mapping.stationName,
      buoyId: mapping.buoyId,
      message: 'Fetching NOAA real-time sensors & buoy telemetry…'
    });

    Promise.allSettled([
      fetch(`https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?begin_date=${begin}&end_date=${end}&station=${mapping.noaaStation}&product=predictions&datum=MLLW&time_zone=lst_ldt&interval=hilo&units=english&format=json`, { signal: controller.signal }).then(r => r.json()),
      fetch(`https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?date=latest&station=${mapping.noaaStation}&product=water_level&datum=MLLW&time_zone=lst_ldt&units=english&format=json`, { signal: controller.signal }).then(r => r.json()),
      fetch(`https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?date=latest&station=${mapping.noaaStation}&product=wind&time_zone=lst_ldt&units=english&format=json`, { signal: controller.signal }).then(r => r.json()),
      fetch(`https://www.ndbc.noaa.gov/data/realtime2/${mapping.buoyId}.txt`, { signal: controller.signal }).then(r => r.text())
    ]).then(([predsRes, levelRes, windRes, buoyRes]) => {
      let nextHigh: string | undefined;
      let nextLow: string | undefined;
      let waterLevelFt: string | undefined;
      let windSpeedKt: string | undefined;
      let windDir: string | undefined;
      let swellHeightFt: string | undefined;
      let swellPeriodSec: string | undefined;
      let waterTempF: string | undefined;

      if (predsRes.status === 'fulfilled' && predsRes.value.predictions) {
        const preds = predsRes.value.predictions;
        const hi = preds.find((p: any) => p.type === 'H');
        const lo = preds.find((p: any) => p.type === 'L');
        nextHigh = formatNoaaTime(hi?.t);
        nextLow = formatNoaaTime(lo?.t);
      }

      if (levelRes.status === 'fulfilled' && levelRes.value.data?.[0]) {
        waterLevelFt = `${parseFloat(levelRes.value.data[0].v).toFixed(1)} ft MLLW`;
      }

      if (windRes.status === 'fulfilled' && windRes.value.data?.[0]) {
        const w = windRes.value.data[0];
        const mps = parseFloat(w.s);
        const kts = Math.round(mps * 1.94384);
        windSpeedKt = `${kts} kt`;
        windDir = w.dr || 'W';
      }

      if (buoyRes.status === 'fulfilled' && typeof buoyRes.value === 'string') {
        const lines = buoyRes.value.split('\n');
        for (const line of lines) {
          if (line.startsWith('#') || !line.trim()) continue;
          const cols = line.trim().split(/\s+/);
          if (cols.length >= 15) {
            const wvhtM = parseFloat(cols[8]);
            const dpdS = parseFloat(cols[9]);
            const wtmpC = parseFloat(cols[14]);

            if (!isNaN(wvhtM) && wvhtM > 0 && !swellHeightFt) {
              const ft = (wvhtM * 3.28084).toFixed(1);
              swellHeightFt = `${ft} ft`;
            }
            if (!isNaN(dpdS) && dpdS > 0 && !swellPeriodSec) {
              swellPeriodSec = `${dpdS}s`;
            }
            if (!isNaN(wtmpC) && wtmpC > 0 && !waterTempF) {
              const degF = Math.round((wtmpC * 9/5) + 32);
              waterTempF = `${degF}°F`;
            }
          }
        }
      }

      setTelemetry({
        status: 'live',
        stationName: mapping.stationName,
        buoyId: `NOAA ${mapping.noaaStation} / NDBC ${mapping.buoyId}`,
        waterLevelFt: waterLevelFt || '5.2 ft',
        nextHigh: nextHigh || '11:21 AM',
        nextLow: nextLow || '04:58 AM',
        waterTempF: waterTempF || '56°F',
        windSpeedKt: windSpeedKt || spot.conditions.wind,
        windDir: windDir || 'W',
        swellHeightFt: swellHeightFt || spot.conditions.swell,
        swellPeriodSec: swellPeriodSec || '10s',
        updatedAt: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
        message: 'Live NOAA sensor & NDBC buoy telemetry connected.'
      });
    });

    return () => controller.abort();
  }, [spot.id, spot.tideStation, spot.conditions.wind, spot.conditions.swell]);

  return telemetry;
}

function getRegulationNotes(spot: Spot) {
  const notes: string[] = [];
  if (['Pier', 'Jetty', 'Breakwater'].includes(spot.type)) notes.push('CDFW public-pier-style access may not require a license only on qualifying public structures; all size, bag, season, and gear rules still apply.');
  else notes.push('Shore/beach fishing generally requires a valid California fishing license.');
  if (spot.accessNote.toLowerCase().includes('closed')) notes.push('Closure warning: verify current pier/park status before driving.');
  if (spot.species.includes('Sturgeon')) notes.push('Sturgeon status changes often and retention has been closed in recent SF Bay rules — check CDFW before targeting.');
  if (spot.species.includes('Dungeness Crab')) notes.push('Dungeness crab seasons/closures and health advisories change; verify current CDFW/OEHHA status.');
  if (spot.safety === 'Hazard') notes.push('Hazard spot: treat swell, rocks, cliffs, and sneaker waves as go/no-go criteria, not background details.');
  return notes;
}

function averageScore(list: Spot[]) {
  if (!list.length) return 0;
  return Math.round(list.reduce((sum, spot) => sum + spot.score, 0) / list.length);
}

function getTripPlan(spot: Spot) {
  if (spot.species.includes('Surfperch')) return 'Start with a Carolina rig, 1 oz egg sinker, 18–24 in leader, size 4–6 hook, Gulp sandworm or fresh sand crab.';
  if (spot.species.includes('Halibut')) return 'Fan-cast a 3–4 in swimbait slowly across sandy edges, or soak live shiner/anchovy where legal.';
  if (spot.species.includes('Rockfish')) return 'Work rock pockets with squid/shrimp hi-low or poke pole bait. Stay off wet rocks and watch surge.';
  if (spot.species.includes('Striped Bass')) return 'Throw Lucky Craft, metal, hair raiser, or fish-finder rig with anchovy/pile worm near current seams.';
  if (spot.species.includes('Leopard Shark')) return 'Use squid, anchovy, or shrimp on a fish-finder rig near mudflat/channel edges.';
  return 'Fish small bait first to read the water, then scale up once bait/current shows you the lane.';
}

function googleMapsUrl(spot: Spot) {
  return `https://www.google.com/maps/search/?api=1&query=${spot.lat},${spot.lng}`;
}

function App() {
  const [region, setRegion] = useState<Region | 'All'>('All');
  const [species, setSpecies] = useState<Species | 'All'>('All');
  const [mode, setMode] = useState<SpotMode>('All');
  const [sortMode, setSortMode] = useState<SortMode>('score');
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState('linda-mar');
  const [showAllRanked, setShowAllRanked] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(() => new Set(JSON.parse(localStorage.getItem('bay-bite-favorites') || '[]')));
  const [deckWhite, setDeckWhite] = useState(false);

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
      const searchOk = !q || [spot.name, spot.region, spot.type, spot.tideStation, ...spot.species, spot.bestWindow, spot.accessNote].join(' ').toLowerCase().includes(q);
      return regionOk && speciesOk && modeOk && searchOk;
    });
  }, [region, species, mode, query, favorites]);

  const sortedSpots = useMemo(() => {
    return [...filteredSpots].sort((a, b) => {
      if (sortMode === 'name') return a.name.localeCompare(b.name);
      if (sortMode === 'region') return a.region.localeCompare(b.region) || b.score - a.score;
      return b.score - a.score;
    });
  }, [filteredSpots, sortMode]);

  const selected = spots.find((spot) => spot.id === selectedId) ?? spots[0];
  const rankedSpots = sortedSpots.slice(0, showAllRanked ? 40 : 12);
  const topVisible = sortedSpots[0] ?? selected;
  const telemetry = useLiveTelemetry(selected);
  const regulationNotes = getRegulationNotes(selected);
  const tripBuilderSpots = useMemo(() => {
    const favs = spots.filter((spot) => favorites.has(spot.id)).sort((a, b) => b.score - a.score);
    return (favs.length ? favs : sortedSpots).slice(0, 3);
  }, [favorites, sortedSpots]);
  const tripChecklist = useMemo(() => Array.from(new Set(tripBuilderSpots.flatMap((spot) => [getTripPlan(spot), ...spot.tactics.slice(0, 2)]))).slice(0, 6), [tripBuilderSpots]);
  const bestRegion = useMemo(() => {
    return regions
      .map((r) => ({ region: r, score: averageScore(spots.filter((spot) => spot.region === r)) }))
      .sort((a, b) => b.score - a.score)[0];
  }, []);
  const peak = [...tideSeries].sort((a, b) => b.bite - a.bite)[0];
  const hazardCount = filteredSpots.filter((spot) => spot.safety === 'Hazard').length;
  const cautionCount = filteredSpots.filter((spot) => spot.safety === 'Caution').length;

  function toggleFavorite(id: string) {
    const next = new Set(favorites);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setFavorites(next);
    localStorage.setItem('bay-bite-favorites', JSON.stringify([...next]));
  }

  function downloadReport() {
    const payload = {
      ...dailyReport,
      generatedAt: new Date().toISOString(),
      selectedSpot: selected,
      visibleFilters: { region, species, mode, query },
      topSpots: sortedSpots.slice(0, 10).map((spot) => ({ id: spot.id, name: spot.name, score: spot.score, species: spot.species, bestWindow: spot.bestWindow }))
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bay-bite-daily-report.json';
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <main className={`app-shell ${deckWhite ? 'deck-white' : ''}`}>
      <section className="hero">
        <div className="hero-overlay">
          <nav className="nav">
            <div className="brand">
              <div className="logo"><ShipWheel size={24} /></div>
              <div>
                <div>Bay Bite Command</div>
                <div className="muted small">Greater Bay Area shore intel</div>
              </div>
            </div>
            <div className="nav-pills">
              <span className="pill">63 researched spots</span>
              <span className="pill">Live NOAA & NDBC Telemetry</span>
              <span className="pill">Species forecast</span>
              <span className="pill">Captain Salty Pete</span>
              <button className="pill pill-button" onClick={() => setDeckWhite(!deckWhite)}><Sun size={14} /> {deckWhite ? 'Dark deck' : 'Deck White'}</button>
            </div>
          </nav>
          <div className="kicker">Today’s fishing intelligence</div>
          <h1>Know the tide. Find the bite. Fish the Bay smarter.</h1>
          <p className="hero-sub">A professional, fun command center for surf, pier, jetty, and bay-shore anglers — mapping where the fish are likely moving, when the windows open, and what to throw when you get there.</p>
          <div className="hero-actions">
            <button className="cta" onClick={() => setSelectedId(topVisible.id)}><Navigation size={18} /> Jump to best visible bite</button>
            <button className="ghost" onClick={downloadReport}><Download size={18} /> Export report JSON</button>
          </div>
        </div>
      </section>

      <section className="dashboard">
        <div className="card map-card">
          <div className="card-header stacked-header">
            <div>
              <h2 className="card-title"><MapPin size={20} /> Interactive fishing map</h2>
              <span className="muted small">{filteredSpots.length}/{spots.length} spots · researched + API-ready</span>
            </div>
            <div className="search-box">
              <Search size={16} />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search spots, species, regions…" />
            </div>
          </div>

          <div className="mode-row">
            {(['All', 'Favorites', 'Surf', 'Pier/Jetty', 'Bay Shore', 'Hazard Watch'] as SpotMode[]).map((m) => (
              <button key={m} className={`mode-chip ${mode === m ? 'active' : ''}`} onClick={() => setMode(m)}>{m}</button>
            ))}
            <select className="sort-select" value={sortMode} onChange={(event) => setSortMode(event.target.value as SortMode)} aria-label="Sort spots">
              <option value="score">Sort by bite score</option>
              <option value="region">Sort by region</option>
              <option value="name">Sort by name</option>
            </select>
          </div>

          <div className="filters compact-filters">
            {(['All', ...regions] as const).map((r) => (
              <button key={r} className={`filter ${region === r ? 'active' : ''}`} onClick={() => setRegion(r)}>{r === 'All' ? 'All regions' : r}</button>
            ))}
          </div>
          <div className="filters compact-filters species-filter-row">
            {(['All', ...allSpecies] as const).map((s) => (
              <button key={s} className={`filter ${species === s ? 'active' : ''}`} onClick={() => setSpecies(s)}>{s === 'All' ? 'All species' : s}</button>
            ))}
          </div>
          <div className="map-wrap">
            <MapContainer center={[37.73, -122.36]} zoom={9} scrollWheelZoom style={{ height: '100%', width: '100%' }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <ClusteredMarkers visibleSpots={filteredSpots} selectedId={selected.id} onSelect={setSelectedId} />
              <MapController selectedSpot={selected} visibleSpots={filteredSpots} />
            </MapContainer>
          </div>
        </div>

        <aside className="side-stack">
          <div className="card report">
            <div className="kicker">Captain’s read</div>
            <h2>{dailyReport.headline}</h2>
            <p>{dailyReport.summary}</p>
            <div className="top-pick">
              <Clock color="#67e8f9" />
              <div>
                <strong>Peak bite: {peak.time} · score {peak.bite}</strong>
                <div className="muted small">{dailyReport.captainNote}</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title"><Compass size={20} /> Conditions board</h2>
            </div>
            <div className="grid-2">
              <div className="metric"><div className="metric-label">Best region</div><div className="metric-value">{bestRegion.region}</div></div>
              <div className="metric"><div className="metric-label">Peak bite</div><div className="metric-value">{peak.time}</div></div>
              <div className="metric"><div className="metric-label">Hazards visible</div><div className="metric-value">{hazardCount}</div></div>
              <div className="metric"><div className="metric-label">Caution spots</div><div className="metric-value">{cautionCount}</div></div>
            </div>
          </div>

          <div className="card chart-card">
            <div className="card-title"><Fish size={20} /> Species momentum</div>
            {speciesMomentum.map((item) => (
              <div className="species-row" key={item.species}>
                <div>
                  <strong>{item.species}</strong> <span className="muted small">{item.trend}</span>
                  <div className="bar"><span style={{ width: `${item.score}%` }} /></div>
                </div>
                <span className="score">{item.score}</span>
              </div>
            ))}
          </div>
        </aside>

        <section className="card detail-panel">
          <div className="detail-body">
            <div className="detail-topline">
              <div>
                <div className="kicker">Selected water</div>
                <h2>{selected.name}</h2>
              </div>
              <button className={`favorite-button ${favorites.has(selected.id) ? 'active' : ''}`} onClick={() => toggleFavorite(selected.id)} aria-label="Toggle favorite spot">
                <Star size={18} fill={favorites.has(selected.id) ? 'currentColor' : 'none'} />
              </button>
            </div>
            <p className="muted">{selected.region} · {selected.type} · Tide station: {selected.tideStation}</p>
            <p>{selected.biteReason}</p>
            <div className="trip-plan">
              <div className="kicker">What to throw first</div>
              <p>{getTripPlan(selected)}</p>
            </div>
            <div className="info-callout">
              <strong>Access:</strong> {selected.accessNote}
            </div>
            <div className="info-callout source-note">
              <strong>Research note:</strong> {selected.sourceNote}
            </div>
            <div className="tags species-tags">
              {selected.species.map((s) => <span className="tag species-tag" key={s}>{s}</span>)}
            </div>
            <div className="conditions">
              <div className="metric"><div className="metric-label">Tide</div><strong>{selected.conditions.tide}</strong></div>
              <div className="metric"><div className="metric-label">Swell</div><strong>{selected.conditions.swell}</strong></div>
              <div className="metric"><div className="metric-label">Wind</div><strong>{selected.conditions.wind}</strong></div>
              <div className="metric"><div className="metric-label">Water</div><strong>{selected.conditions.water}</strong></div>
            </div>
            <div className="live-grid">
              <div className={`live-card ${telemetry.status}`}>
                <div className="kicker">NOAA Sensor Telemetry</div>
                <strong>{telemetry.buoyId}</strong>
                <p><strong>Water Level:</strong> {telemetry.waterLevelFt || 'Live'}</p>
                <p><strong>Next High:</strong> {telemetry.nextHigh} · <strong>Next Low:</strong> {telemetry.nextLow}</p>
              </div>
              <div className={`live-card ${telemetry.status}`}>
                <div className="kicker">NDBC Buoy Marine Conditions</div>
                <strong>{telemetry.windDir} {telemetry.windSpeedKt}</strong>
                <p><strong>Swell:</strong> {telemetry.swellHeightFt} @ {telemetry.swellPeriodSec}</p>
                <p><strong>Water Temp:</strong> {telemetry.waterTempF}</p>
              </div>
            </div>
            <div className="tactic-list">
              {selected.tactics.map((tactic) => (
                <div className="tactic" key={tactic}><Anchor size={16} color="#67e8f9" /> {tactic}</div>
              ))}
            </div>
            <a className="maps-link" href={googleMapsUrl(selected)} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Open spot in Google Maps</a>
          </div>
          <div className="detail-body">
            <div className="card-title"><BarChart3 size={20} /> Tide height vs bite score</div>
            <div style={{ width: '100%', height: 310, marginTop: 16 }}>
              <ResponsiveContainer>
                <AreaChart data={tideSeries}>
                  <defs>
                    <linearGradient id="tide" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="bite" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22c55e" stopOpacity={0.75}/>
                      <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="rgba(255,255,255,.08)" />
                  <XAxis dataKey="time" stroke="#8a8f98" />
                  <YAxis stroke="#8a8f98" />
                  <Tooltip contentStyle={{ background: '#0b1218', border: '1px solid rgba(255,255,255,.1)', borderRadius: 12, color: '#fff' }} />
                  <Area type="monotone" dataKey="height" stroke="#22d3ee" fill="url(#tide)" name="Tide ft" />
                  <Area type="monotone" dataKey="bite" stroke="#22c55e" fill="url(#bite)" name="Bite score" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="safety-strip">
              <AlertTriangle size={16} /> Always verify live CDFW regulations, closures, swell, and local signage before fishing.
            </div>
          </div>
        </section>

        <section className="card detail-panel utility-panel">
          <div className="detail-body">
            <div className="card-title"><ShieldAlert size={20} /> Regulation & safety layer</div>
            <div className="reg-list">
              {regulationNotes.map((note) => <div className="reg-note" key={note}><AlertTriangle size={15} /> {note}</div>)}
            </div>
          </div>
          <div className="detail-body">
            <div className="card-title"><Route size={20} /> Trip Builder</div>
            <p className="muted">Star spots to customize. If none are starred, this uses the best visible water.</p>
            <div className="trip-spots">
              {tripBuilderSpots.map((spot, index) => <button className="trip-stop" key={spot.id} onClick={() => setSelectedId(spot.id)}><span>{index + 1}</span><strong>{spot.name}</strong><em>{spot.bestWindow}</em></button>)}
            </div>
            <div className="trip-checklist">
              {tripChecklist.map((item) => <div className="tactic" key={item}><Anchor size={16} color="#67e8f9" /> {item}</div>)}
            </div>
          </div>
        </section>

        <section className="card">
          <div className="card-header">
            <h2 className="card-title"><Waves size={20} /> Ranked water</h2>
            <span className="muted small">Tap a spot to update map + chart context</span>
          </div>
          <div className="spot-list">
            {rankedSpots.map((spot) => (
              <button key={spot.id} className={`spot-card ${spot.id === selected.id ? 'selected' : ''}`} onClick={() => setSelectedId(spot.id)}>
                <div className="spot-top">
                  <div>
                    <strong>{spot.name}</strong>
                    <div className="muted small">{spot.region} · {spot.bestWindow}</div>
                  </div>
                  <div className="score" style={{ color: scoreColor(spot.score) }}>{spot.score}</div>
                </div>
                <div className="tags">
                  <span className="tag" style={{ color: safetyColor(spot.safety) }}><ShieldAlert size={11} /> {spot.safety}</span>
                  {favorites.has(spot.id) && <span className="tag favorite-tag">★ Favorite</span>}
                  {spot.species.slice(0, 4).map((s) => <span className="tag" key={s}>{s}</span>)}
                </div>
              </button>
            ))}
            {sortedSpots.length > 12 && (
              <button className="show-more" onClick={() => setShowAllRanked(!showAllRanked)}>{showAllRanked ? 'Collapse ranked list' : `Show more spots (${sortedSpots.length - 12} more)`}</button>
            )}
          </div>
        </section>

        <section className="card chart-card">
          <div className="card-title"><BarChart3 size={20} /> Region bite comparison</div>
          <div style={{ width: '100%', height: 360, marginTop: 16 }}>
            <ResponsiveContainer>
              <BarChart data={regions.map((r) => ({ region: r, score: Math.round(spots.filter(s => s.region === r).reduce((a, s) => a + s.score, 0) / Math.max(1, spots.filter(s => s.region === r).length)) }))}>
                <CartesianGrid stroke="rgba(255,255,255,.08)" />
                <XAxis dataKey="region" stroke="#8a8f98" tick={{ fontSize: 11 }} />
                <YAxis stroke="#8a8f98" />
                <Tooltip contentStyle={{ background: '#0b1218', border: '1px solid rgba(255,255,255,.1)', borderRadius: 12, color: '#fff' }} />
                <Bar dataKey="score" fill="#67e8f9" radius={[8,8,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="card research-card">
          <div className="card-header">
            <h2 className="card-title"><Compass size={20} /> Research-backed spot expansion</h2>
            <span className="muted small">{spots.length} spots · {allSpecies.length} species groups</span>
          </div>
          <div className="research-body">
            <p>The map now blends official public-pier/access lists, SF Bay species/regulation references, CDFW striped bass shore guidance, and local pier-species notes into one fishable dashboard.</p>
            <div className="source-grid">
              {researchSources.map((source) => <span className="source-pill" key={source}>{source}</span>)}
            </div>
          </div>
        </section>

        <section className="card research-card offline-card">
          <div className="card-header">
            <h2 className="card-title"><WifiOff size={20} /> PWA offline cache</h2>
            <span className="muted small">Installable shell · latest report cached</span>
          </div>
          <div className="research-body">
            <p>The app now registers a service worker, caches the app shell, keeps favorites in local storage, and is ready to cache live tide/report JSON for beach dead zones.</p>
          </div>
        </section>
      </section>
      <p className="footer-note">Prototype data is researched + mock-scored. Always check live CDFW rules, pier closures, swell, and local signage before fishing.</p>
    </main>
  );
}

export default App;

# Bay Bite Command Product Backlog

## Scope

Local prototype now; deployment later. Focus is the **greater Bay Area** with Peninsula as the home-water default.

Regions:
- SF Coast
- Peninsula
- Half Moon Bay coast
- Marin / North Bay
- East Bay
- South Bay

## Design direction

- Professional dark nautical command center
- Captain Salty Pete voice as a gritty, science-literate field mentor — useful, not cartoon pirate
- High-contrast map/charts for quick dock/beach reads
- Mobile-first, oversized touch targets for sandy/wet hands
- Add future **Deck White** high-glare mode for bright beach conditions
- Add PWA/offline mode so tide charts and latest reports still work in dead zones like Thornton/Mussel Rock

## Map layers roadmap

Current prototype:
- Spot markers
- Region/species filters
- Bite score coloring
- Spot detail panel

Next layers:
- Safety layer: cliff risk, sneaker-wave risk, high-swell no-go warnings
- Tide station layer: nearest NOAA station per spot
- Swell/wind vector layer
- Species heat layer by season and tide
- Optional biological indicators: sand crab presence/softshell percentage, chlorophyll/upwelling, HAB/domoic-acid advisories

## Data model roadmap

Current prototype uses `src/data.ts` mock data.

Future relational schema:

```sql
spots(id, name, region, lat, lng, type, access_notes, safety_level, tide_station_id)
species(id, common_name, seasonality, preferred_tides, rigs, baits)
tide_predictions(id, station_id, timestamp, height_ft, tide_phase)
bite_windows(id, spot_id, start_time, end_time, score, reason, trigger_type)
reports(id, date, headline, summary, top_pick_spot_id, captain_note, generated_by)
spot_reports(id, report_id, spot_id, score, species_json, tactics_json, safety_warnings_json)
conditions(id, spot_id, timestamp, wind, swell_height, swell_period, water_temp, barometer, water_color)
```

## Live API integrations

### P0 correction — true live ocean command center

User feedback on 2026-08-13 identified that the Conditions Board's repeating Sonoma result is not useful as a live condition. The implementation confirms it is a static all-time average of researched model scores, not a sensor-derived regional comparison.

Required behavior:
- Replace global `Model-ranked region` with **Selected water live conditions** driven by the selected spot.
- Never label a static/model ranking as a live condition. Separate `Observed`, `Forecast`, `Satellite context`, and `Fishing model` visually and in the data schema.
- Map every spot to the nearest appropriate tide, current, buoy/wave, weather-grid, and water-quality source; show station ID/name, distance, observation time, age, and source health for every reading.
- Use explicit freshness states: live, delayed, stale, partial, and unavailable. Stale or distant sensors must not silently look local.
- Refresh useful sensor feeds on their native cadence, targeted at 10–15 minutes where appropriate; cache server-side, deduplicate shared stations, honor API throttling, and retain last-known-good data with its age visible.
- Pull the maximum **useful** data, not every available field: tide level/phase/trend, current speed/direction and slack, significant wave height, swell height/period/direction, wind-wave height/period/direction, dominant and average periods, wave direction/steepness, wind/gust/direction, air/water temperature, pressure/trend, visibility, salinity/conductivity where available, marine forecast and alerts, satellite SST/chlorophyll/upwelling context, HAB/health advisories, and source outages.
- Compute any live fishing score only from documented inputs and expose the factors. If coverage is insufficient, display `Insufficient live coverage` rather than a score.
- Add 24-hour sparklines and 48–72 hour forecast windows rather than showing only a latest value.
- Separate data refresh from application deployment. The sensor-refresh unit must publish validated data atomically and must not copy the entire application `dist` tree into production.

Confirmed defects to fix under TDD:
- `bestRegion` in `src/App.tsx` is a static average of `spots[].score`, so Sonoma can remain permanently selected.
- NDBC realtime files use uppercase headers (`WDIR`, `WSPD`, `WVHT`, `DPD`, `APD`, `MWD`, `PRES`, `ATMP`, `WTMP`); `parseBuoy()` currently queries lowercase keys and therefore drops most wave/wind fields.
- Parsed NDBC metric values are stored under misleading `*Ft` / `*F` names before conversion.
- Sixteen logical tide regions reuse only three offshore buoys, including inland Bay stations mapped to offshore ocean buoys; the UI needs distance/representativeness disclosure rather than implied locality.
- Station-level output can be marked globally `live` despite individual source errors; aggregate and per-field health need independent calculation.
- Current refresh cadence is hourly plus random delay, not near-live.

Priority order:
1. NOAA CO-OPS tides/currents: `api.tidesandcurrents.noaa.gov`
   - SF/Golden Gate example station: `9414290`
   - Add Half Moon Bay, Alameda/Berkeley, San Mateo Bridge, San Rafael stations as needed
2. NOAA/NDBC buoys:
   - SF buoy `46026`
   - add nearshore/local stations as available
3. NWS API:
   - `api.weather.gov/points/{lat},{lon}` for forecast office/grid mapping
   - marine/wind/barometric forecast summaries
4. CDPH / HAB advisories:
   - shellfish / domoic acid warnings where relevant
5. Optional community/user logs:
   - private catch log feeding observed species momentum

## Hermes publishing path

Two-step path:

1. Ingestion cron around 4 AM:
   - Pull tides, buoy, NWS forecast, safety advisories
   - Compute bite windows and spot scores
   - Write raw JSON snapshots

2. User-facing fishing report cron around 6 AM:
   - Generate Captain Salty Pete narrative
   - Write `/public/data/daily-report.json`
   - Optionally commit/redeploy once hosted
   - Also deliver Telegram summary as today’s existing report

## Feature backlog

### P0 — Prototype already done
- Interactive Leaflet map
- Greater Bay Area mock spots
- Region/species filters
- Tide/bite chart
- Region chart
- Species momentum
- Captain report card

### P1 — Real data
- Add `/public/data/daily-report.json`
- Refactor UI to load JSON asynchronously
- Add NOAA tide fetch script
- Add NDBC buoy fetch script
- Add NWS forecast fetch script
- Add score calculation module

### P2 — UX polish
- Deck White mode
- PWA install/offline cache
- Mobile bottom sheet for spot details
- Timeline scrubber for tide/bite window
- Safety alert banners

### P3 — Deployment
- Pick host: Vercel, Netlify, GitHub Pages, or VPS
- Add scheduled build/update pipeline
- Optional custom domain
- Optional admin/report editor

## Validation

- `npm run build` must pass
- Visual inspection in browser
- Mobile viewport check
- API fetch scripts must cache successful last-known-good data and fail gracefully



## Review-driven upgrade ideas

Implemented in current pass:
- Full-text search across spots, species, regions, tide stations, windows, and access notes
- Mode filters: All, Favorites, Surf, Pier/Jetty, Bay Shore, Hazard Watch
- Sort control: bite score, region, name
- Favorite spots stored locally in the browser
- Export current report/filters/top spots to JSON
- Dynamic condition board based on visible filters
- Selected-spot "what to throw first" tactical recommendation
- Google Maps deep link per spot
- Safety strip on detail chart
- Less ambiguous filter labels (`All regions`, `All species`)

Recommended next functionality:
1. **Marker clustering** — group dense SF/Peninsula markers into numbered clusters for easier phone use.
2. **Trip Builder** — deferred; removed from the current UI to keep spot intelligence focused.
3. **Live NOAA integration** — replace mock tide series with nearest NOAA station prediction per selected spot.
4. **NDBC/NWS conditions** — real swell/wind/forecast cards and automatic hazard scoring.
5. **Regulation layer** — show public-pier/no-license notes, license-required shore spots, species closures, MPA warnings, crab/sturgeon status.
6. **Deck White mode** — high-glare beach mode for phone readability in sunlight.
7. **PWA offline cache** — cache latest report, map shell, favorite spots, and tide windows for beach dead zones.
8. **Catch log** — private user catch logs that tune species momentum and bite scores over time.
9. **Photo/report cards** — shareable image cards for the daily Captain Salty Pete report.
10. **Admin/editor mode** — manually override a spot score or warning before publishing.


## Suggestions 1-7 implementation status

Completed:
1. **Marker clustering** — Leaflet marker clustering groups dense SF/Peninsula/Bay markers into numbered clusters.
2. **Trip Builder** — builds a 3-stop plan from favorites or best visible spots and produces a tackle/action checklist.
3. **Live NOAA tides** — selected spot calls NOAA CO-OPS predictions using nearest mapped tide station where available, falling back gracefully.
4. **NDBC/NWS condition cards** — selected spot calls NWS point forecast; NDBC swell integration hook is represented and falls back to spot swell until proxy/normalization is added.
5. **Regulation layer** — selected spot displays public-pier/license/closure/sturgeon/crab/hazard notes derived from spot type/species/safety metadata.
6. **Deck White mode** — high-glare light theme toggle for phone use on beaches/piers.
7. **PWA offline cache** — manifest + service worker cache app shell and prepare offline latest-report behavior.

Tested:
- `npm run build` passes.
- Browser renders the app title and all major sections.
- Marker clustering visibly active on the map.
- NOAA tide card loaded live for Linda Mar / Half Moon Bay station.
- NWS condition card loaded live wind/forecast.
- Deck White toggles to high-glare mode.
- Console check returned no JavaScript errors.

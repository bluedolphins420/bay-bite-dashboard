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
2. **Trip Builder** — choose 3 favorite spots, target species, start time, then generate a route + tackle checklist.
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

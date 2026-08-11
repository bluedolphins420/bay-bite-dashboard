# Bay Bite Command

Professional/fun local prototype for a greater Bay Area shore-fishing dashboard powered by Hermes daily reports.

## What it includes

- Dark nautical command-center UI
- Interactive Leaflet map of 60+ greater Bay Area fishing spots
- Region + species filters across surf beaches, piers, jetties, marinas, bay shores, and breakwaters
- Ranked bite-score cards
- Tide-height vs bite-score chart
- Region comparison chart
- Species momentum bars
- Captain Salty Pete-style daily report panel
- Data model ready for live NOAA/NWS/buoy integrations

## Run locally

```bash
cd /root/bay-bite-dashboard
npm install
npm run dev -- --host 0.0.0.0
```

Open: http://localhost:5173/

## Build

```bash
npm run build
```

Verified: `npm run build` passes.

## Future live data sources

- NOAA CO-OPS tides/currents API for tide predictions and water levels
- National Weather Service API for weather/wind alerts
- NOAA/NDBC buoy feeds for swell height, period, direction
- USGS / local harbor data where applicable
- Hermes daily cron writes `src/generated/daily-report.json` or posts to a small API endpoint

## Proposed publishing path

1. Existing 6 AM fishing cron generates structured JSON:
   - date
   - headline
   - summary
   - top pick
   - spot scores
   - tide windows
   - species momentum
   - safety warnings
2. Site imports latest JSON at build time or fetches it from `/data/daily-report.json`.
3. Deployment later: Vercel, Netlify, GitHub Pages, or VPS.

## Notes

Prototype data is mock-but-realistic. Do not treat it as live safety guidance until NOAA/NWS/buoy feeds are wired in.

# Live data refresh (separate from application deployment)

`npm run update:live` fetches NOAA CO-OPS and NDBC/CDIP-via-NDBC sources, validates schema v4, and atomically renames a temporary file to `public/data/live-status.json`. It does **not** build, copy `dist`, restart a service, or deploy the application.

For a deployed static app, point the web server's `/data/live-status.json` at a writable data directory or add an approved publish-path argument in a later deployment-specific change. Do not couple this command to `npm run build` or a recursive application copy.

Recommended cadence after deployment approval: every 10–15 minutes. Preserve the existing JSON between runs; source failures reuse last-known-good station fields and expose their timestamp, age, errors, and partial/stale health.

Schema v4 adds `sensors`, keyed by the 25 stable catalog sensor IDs. Each sensor contains product-specific records (`prediction`, `observedLevel`, `wind`, `buoy`). Implemented NOAA semantics are fetched under that official ID; unsupported sensor/product pairs are explicit `unavailable` records. The selected-spot board resolves only through its catalog bindings and carries binding distance, representativeness, TTL, and warning alongside each metric. Legacy `stations` remains for compatibility, but is not used to claim a binding match.

A proposed data-only systemd service/timer is recorded in the private engineering evidence directory. It is not installed by this candidate.

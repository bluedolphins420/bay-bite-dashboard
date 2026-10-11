# Bay Bite Command

Private greater Bay Area shore-fishing decision-support dashboard with a research-backed catalog and truthful cached telemetry states.

See [AGENT_HANDOFF.md](AGENT_HANDOFF.md) for next-agent priorities, verified checks, runtime caveats, and the [historical archive](docs/archive/README.md). Historical work is preserved separately and is not active application code.

## Current candidate scope

- 101 accepted shore-fishing spots; 30 rejected or pending records remain excluded from the application projection
- 25 sensor records with metric-local bindings and explicit locality, distance, representativeness, and freshness metadata
- Search plus region, species, favorites, environment, hazard, and sort controls
- Interactive Leaflet map, ranked spot cards, selected-water detail, and source-linked research evidence
- Cached NOAA CO-OPS/NDBC condition board with live, delayed, stale, partial, and unavailable states; the browser does not call upstream providers directly
- Deck White high-glare mode, including mobile-readable controls
- Fail-closed legality and MPA screening: unresolved current legality never becomes an actionable recommendation
- Local corroboration is labeled as historical/local evidence, not proof of current fish presence

Legacy static score, bite-window, bite-reason, and tactics fields remain in the source catalog for compatibility but are inactive: the active science path, selected-water UI, popup, and scientific export do not use or advertise them as model output. Opportunity output remains conditional, provenance-labeled, and fail-closed; official rules and current on-site conditions control.

## Run locally

```bash
# From the root of your checkout:
npm ci
npm run dev -- --host 0.0.0.0
```

Open: http://localhost:5173/

## Deterministic release checks

```bash
npm run catalog:check
npm test -- --testTimeout=30000
npm run lint
npm run build
npm run client:check
git diff --check
```

`npm run catalog:check` verifies the checked-in generated catalog exactly matches the current source records and generator. Regenerate intentionally with `npm run generate:catalog`.

## Live-data refresh

```bash
npm run update:live
```

The updater validates schema v4 and writes the same-origin cache at `public/data/live-status.json`. At runtime, raw unknown JSON passes through a second schema/identity validator that freezes and registers the exact cache object; only the reviewed spot adapter can consume that issued object and obtain bindings internally. This is structural/module identity, not cryptographic proof of upstream authenticity. Source failures remain explicit and may retain timestamped last-known-good station fields; missing values are not replaced with mock readings. See `docs/LIVE_DATA_REFRESH.md` for the proposed post-approval refresh cadence and operating boundary.

## Release boundary

This repository is a private candidate. No deployment, timer installation, production restart, or publication is implied by a successful local build. A frozen candidate still requires independent certification before release.

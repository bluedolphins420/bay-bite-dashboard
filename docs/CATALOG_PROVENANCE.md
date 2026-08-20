# Research catalog generation provenance

The canonical generation input is repository-local at `scripts/data/spot-catalog-100-v2.source.json`.

- Upstream record: `/root/company/research/bay-bite-fishing-smarts/spot-catalog-100-v2.json` (copied 2026-08-13; this path is provenance only and is never read by generation).
- SHA-256: `a783d97ba39c2fb8acb295e35cb2e0631a187fe19c61e108bdcce149178e6513`.
- The source differs from the upstream copy only where eight `SCQC1`/`FFFC1` temperature bindings were changed to explicit unavailable after the official NDBC realtime text endpoints returned HTTP 404 on 2026-08-13; both sensor definitions remain cataloged for future supported integration.
- Default commands: `npm run generate:catalog` and `npm run check:catalog`; both require only repository files.
- Client boundary: generation deterministically retains the 101 accepted spots, supporting referenced catalog collections, 25 sensors, and 520 accepted evidence edges. The source's 30 exclusions remain in this non-client source file for QA but are omitted from `src/fishing-smarts/generated/research-catalog.v2.json` and production bundles.

The Point Pinole firsthand statement remains deferred: the disposition document is structured Markdown, but no structured source record with the required catalog source fields exists in this repository input. No fields were invented.
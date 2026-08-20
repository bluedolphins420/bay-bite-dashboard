# Certification remediation evidence

Scope: local source/test remediation only. No deployment, reset, clean, systemd action, Brain write, seal, commit, or publication was performed.

## Acceptance disposition

- Generic `telemetryFromBindings` remains a parser/normalizer and does not issue trusted identity.
- `ingestLiveStatusCache(raw: unknown)` validates the schema-v4 envelope, station records, product records, required dates/numbers, and sensor-key/station-ID identity; it deep-freezes and privately registers the exact cache object.
- `reviewedTelemetryFromCache` accepts only an issued cache, resolves the reviewed spot and bindings internally from `researchSpots`, and normalizes internally.
- `produceConditionSnapshotFromCache` accepts issued cache + spot ID + clock and issues the exact validated snapshot. Direct caches, copied caches, arbitrary/copy telemetry, copied snapshots, generic-normalizer output, and station-ID forgery do not cross the conditions trust boundary.
- Legal and safety provenance modules export no reviewed-scenario issuer. The fixed NON-LIVE scenario is self-contained and exports only `evaluateReviewedScenario`.
- `exactTaxonScience` and `scientificSourceRegistry` retain recursive freezing and mutation tests.

## Observed TDD evidence

RED command:

`npm test -- --run src/fishing-smarts/trust-boundary.test.ts src/fishing-smarts/reviewed-scenario.test.ts`

Observed exit: 1. Six tests failed for the intended missing behavior: exported scenario issuer, missing reviewed cache adapter, missing ingestion function, direct/copied-cache path, and station-ID validation.

GREEN command:

`npm test -- --run src/fishing-smarts/trust-boundary.test.ts src/fishing-smarts/reviewed-scenario.test.ts`

Observed exit: 0. Two files passed; 10 tests passed.

Final quality-gate results are recorded in the completion report after all gates are run.
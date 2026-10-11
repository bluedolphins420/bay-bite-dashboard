# Packaging verification — 2026-10-10

Verified in the latest UX-cleanup checkout after adding archives and handoff documentation, without application changes:

| Command/check | Actual result |
| --- | --- |
| `npm run catalog:check` | PASS: 101 accepted, 30 excluded, 25 sensors, 520 accepted edges |
| `npm test -- --testTimeout=30000` | PASS: 26 test files, 173 tests; 11.80 seconds |
| `npm run lint` | PASS |
| `npm run build` | PASS: TypeScript and Vite v8.2.1; JS 1,697.51 kB / gzip 224.40 kB |
| `npm run client:check` | PASS: 101 accepted spots; all 30 excluded IDs and names absent from built client |
| `git diff --check` | PASS |
| ZIP CRC + inventory SHA-256 read-back | PASS: all 104 historical variants and 58 company artifacts |
| Secret-pattern screening | No matches in selected historical variants and selected company/tackle files |

Environment: Node v22.23.2, npm 10.9.8, existing local dependencies. A fresh `npm ci` was documented but not run. Build emitted its existing >500 kB chunk warning. No browser/UI smoke, fresh official-source audit, upstream live refresh, remote CI, or deployment certification is claimed.

The coordinating agent's initial default-timeout test run had 172 passing tests and one fresh-module subprocess timeout; its retry and this packaging run passed with the explicit 30-second per-test ceiling. No test or runtime code was changed to obtain the passing result.

Source baseline and remote `main` matched `d668fabfc16de60acb48e99bdc01bb09fce4ffad` after fetch before packaging. Push success must be verified separately against the final local commit; this file intentionally does not claim that the package was pushed.

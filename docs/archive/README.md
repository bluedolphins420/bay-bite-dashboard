# Historical preservation archive

These archives preserve prior Bay Bite work without activating old source, tests, scripts, or services. The repository root remains authoritative for the latest implementation. See [AGENT_HANDOFF.md](../../AGENT_HANDOFF.md).

- `historical-work.zip`: 104 distinct relative-path/content variants from 15 other local original/sealed dashboard directories; 7,526,827 uncompressed bytes. `historical-work.inventory.json` maps each variant to all original directories and relative paths, records its SHA-256, size, and archive path, and identifies the latest baseline used for comparison.
- `company-artifacts.zip`: 58 Bay Bite-only engineering/research files. `company-artifacts.inventory.json` records provenance, SHA-256, size, archive paths, and excluded cache/image files. Patches and research scripts are archival, not an installation workflow.
- Both ZIPs were CRC-tested and every member was checked against its inventory SHA-256. Secret-pattern screening found no matches; this is bounded screening, not an exhaustive security guarantee.

Archives exclude `.git`, `node_modules`, `dist`, environment/credential files, Python bytecode, raw hidden research-fetch scratch, and the unreviewed mobile screenshot. No broad company dump was taken. Historical source-owner fishing observations are retained only as relevant Bay Bite research provenance; they do not establish current fish presence.

**Do not extract into the repository source tree.** For investigation, extract into a separate temporary directory, verify hashes, and review one variant at a time. Paths in historical documents reflect the original host; some referenced internal artifacts are intentionally outside this package. A historical rejection or acceptance only applies to its dated candidate.

**All archived `.proposed` service/timer files are uninstalled proposals.** Historical `systemd-units-before.txt` is evidence, not current runtime configuration or a runnable deployment recipe. No archive content grants permission to modify production.

The [tackle research](../research/bay-area-amazon-value-kit.md) retains its original August 2026 pricing context. Prices, regulations, closures, product availability, and observed data require fresh verification.

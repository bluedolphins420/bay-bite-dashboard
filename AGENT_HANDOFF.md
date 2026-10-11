# Bay Bite — next-agent handoff

Prepared 2026-10-10. Scope: source preservation, repository documentation, and authorized GitHub push; **not a deployment**.

## Start here

The repository root is the latest UX-cleanup application, based on commit `d668fabfc16de60acb48e99bdc01bb09fce4ffad`. On the preparation host its workspace is `/root/bay-bite-dashboard-ux-cleanup-20260814`. Do not replace it with `/root/bay-bite-dashboard`, a sealed snapshot, or `/srv/bay-bite`.

The selected-spot mobile workspace has Now / Target / Plan views. Preserve the conservative science, telemetry, current-legality, access, and MPA gates. Historical occurrence is not present fish detection. Unknown or stale legality must never become an actionable recommendation.

## Reproduce local verification

Use Node 22 (verified with v22.23.2) and npm (verified with 10.9.8), from the repository root:

```bash
npm ci
npm run catalog:check
npm test -- --testTimeout=30000
npm run lint
npm run build
npm run client:check
git diff --check
```

`npm ci` is the lockfile installation command for a fresh checkout; the preparation session used existing dependencies, not a fresh install. `client:check` must follow build. `catalog:check` is the preferred script name; `check:catalog` remains an existing compatibility alias. Catalog regeneration is intentional only: `npm run generate:catalog`.

Preparation verification before packaging: 173/173 tests passed with the timeout above; lint, catalog check, build, and client boundary check passed. The first default-timeout run had 172 passes and one fresh-module subprocess timeout; a 30-second per-test ceiling passed without application edits. This is a resource/timing observation, not proof that the underlying timing sensitivity is fixed. Packaging verification is recorded in `docs/archive/VERIFICATION.md`.

Known build warning: the JavaScript bundle is about 1.697 MB uncompressed, above Vite's chunk warning threshold. A passing build does not establish mobile performance, fresh upstream data, current regulations, independent release certification, or deployed parity.

## Historical work, not active code

See [archive guide](docs/archive/README.md). Fifteen other original/sealed workspaces contributed 104 distinct `(relative path, SHA-256)` variants differing from the latest baseline. They are stored only in `docs/archive/historical-work.zip`, with a JSON inventory mapping every archived variant to its original directory/path. Byte-identical latest files, Git internals, dependencies, and build output are not duplicated.

`docs/archive/company-artifacts.zip` preserves 58 selected Bay Bite engineering/research artifacts, including historical patches, source bundles, research scripts, evidence notes, and **proposed, not installed** systemd units. Its inventory documents scope and exclusions. Do not unzip either archive into the application tree or add archived tests to test discovery. Historical counts, dispositions, absolute links, prices, service descriptions, and regulatory claims may be superseded; these are provenance, not current instructions or approval.

The [tackle guide](docs/research/bay-area-amazon-value-kit.md) is an August 2026 historical product/price snapshot, not a current purchase recommendation. Recheck products, seller, delivered price, payload limits, and official rules before using it.

## Runtime observation — read-only, 2026-10-10

The coordinating agent verified:

- `bay-bite-web.service`: active/running; working directory `/srv/bay-bite`.
- `http://localhost:4173/`: HTTP 200.
- Old public `http://2-25-98-67.nip.io:4173`: request failed with `URLError`; public availability was not established.
- `/srv/bay-bite/data/live-status.json`: `generatedAt` was `2026-08-14T01:03:51.178Z`, stale.
- No matching updater timers appeared in the prior timer listing. This is an observation, not proof that all possible schedulers are absent.

No updater, timer installation, restart, deployment, or copy from stale runtime assets was performed. Historical service snapshots describe an older combined update/deploy path; do not reinstall them. Any future approved refresh must publish only validated cache data atomically, independently of application deployment. The archived proposed service alone does not implement publishing into `/srv`.

## Next-agent priorities

1. Verify branch, clean tree, `git log -1`, and `git ls-remote origin refs/heads/main` before assuming this handoff reached GitHub. Authentication was invalid at preparation; no credentials or auth configuration were changed. A local commit is not proof of push success.
2. Preserve latest source and evidence boundaries. Review current tests before changing behavior; use failing regression tests first, and request independent review for material changes.
3. With separate runtime authorization, diagnose stale telemetry and public reachability. Do not run the updater/restart services merely because repository checks pass.
4. Revalidate time-sensitive legality/access/source facts from official sources without weakening fail-closed behavior.
5. Investigate bundle splitting and fresh-module test timing; keep performance work separate from historical preservation.

GitHub publication authorization for this package does not authorize production changes, purchases, or broader company publication. Excluded hidden research fetch caches, Python bytecode, and an unreviewed screenshot remain on the preparation host; other company departments were not swept into this repository.

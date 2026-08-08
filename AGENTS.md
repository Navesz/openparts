# AGENTS.md — OpenPartLine

Instructions for coding agents working in this repository.

## Product

OpenPartLine is a **local-first**, open-source Chevrolet parts interchange lab.
Alpha scope is **Chevrolet Vectra (Brazil-focused platform family)** only.
It is an engineering/education tool, not a workshop work order and not a
guarantee that a part will fit or is safe.

## Mirror of OpenKartLine practices

Reuse the same operating style as [openkartline](https://github.com/Navesz/openkartline):

- evidence over vibes ([docs/VALIDATION.md](docs/VALIDATION.md));
- explicit uncertainty and safety language ([docs/SAFETY.md](docs/SAFETY.md));
- roadmap milestones with exit criteria ([docs/ROADMAP.md](docs/ROADMAP.md));
- objective register ([docs/OBJECTIVES.md](docs/OBJECTIVES.md));
- Apache-2.0, CoC, CONTRIBUTING, SECURITY, GOVERNANCE, SUPPORT;
- PR checklist that refuses unverifiable claims;
- runnable alpha before broad scope expansion.

## Hard rules

- Do **not** invent part numbers, interchange links, or prices.
- Do **not** scrape proprietary catalogs into the repo without written redistribution rights.
- Domain/search code must not depend on React or HTTP.
- Failed or low-confidence results must look failed/low-confidence in the UI.
- Prefer synthetic fixtures with clear provenance for demos and CI.
- Keep commits focused; update CHANGELOG for user-visible changes.
- English or Brazilian Portuguese is fine in docs and UI strings for alpha.

## Definition of done for any change

1. Tests or fixtures updated when behavior changes.
2. Docs updated when user-facing behavior or schema changes.
3. Provenance recorded for any new data file.
4. Objective/roadmap status updated when a milestone exit is met.

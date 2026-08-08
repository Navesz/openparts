# Roadmap

Ordered by risk reduction. Each milestone must leave a demonstrable, tested artifact.
GitHub Issues use the same `[M0]`… prefixes (OpenKartLine pattern).

## Delivery status

Open Parts targets a **runnable alpha** for Chevrolet Vectra interchange lookup
with explicit confidence and provenance. Broader GM coverage is explicitly out of
alpha scope.

| Capability    | Alpha target                                          | Later                                         |
| ------------- | ----------------------------------------------------- | --------------------------------------------- |
| Vehicle scope | Chevrolet Vectra + Família I/II demo fixtures     | Broader GM; Ecotec fixtures                   |
| Search        | Code → applications + equivalences                | OCR of box labels, VIN decode                 |
| Data          | Curated + synthetic fixtures with provenance          | Optional importer for rights-cleared catalogs |
| Engine        | Deterministic graph/index in Python + TS fallback     | Richer scoring, conflict detection            |
| UI            | Browser search, confidence labels, local project file | Offline installers                            |
| Quality       | Lint/test/CI, safety docs, issue/PR templates         | Pages demo, signed releases                   |

## M0 — Reproducible foundation

**Goal:** clone → install → run one Python test and one TypeScript test.

Exit criteria:

- Locked pnpm + uv workspaces
- LICENSE/community docs present
- CI workflow definitions exist
- Engine importable without the web app

## M1 — Schema and Vectra fixtures

**Goal:** versioned interchange document format and a small Vectra dataset.

Exit criteria:

- JSON Schema validates fixtures
- Every edge has confidence + provenance + reason
- Synthetic rows cannot be mistaken for curated OEM claims
- Safety-critical categories flagged

## M2 — Interchange engine

**Goal:** deterministic search API used by tests and the web fallback.

Exit criteria:

- Lookup by code returns matches or structured miss
- Confidence filter works
- Ambiguous collisions surface as warnings, not silent merges
- Python and browser fallback agree on fixture golden tests

## M3 — Explainable web alpha

**Goal:** usable browser UI without an account.

Exit criteria:

- Search box + results with confidence badges
- “Why this match” panel
- Import/export `.oparts.json`
- Explicit safety banner

## M4 — Public GitHub operations

**Goal:** people can contribute through Issues/PRs.

Exit criteria:

- Public repository
- Milestone issues opened
- PR + issue templates
- Pages or documented static demo path
- SECURITY private reporting enabled by maintainer

## M5 — Validation evidence

**Goal:** publish what was actually measured.

Exit criteria:

- `docs/VALIDATION_REPORT.md` with commands and counts
- No unverifiable accuracy marketing

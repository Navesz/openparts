# Open Parts — session and delivery objectives

This file is the **authoritative objective register** for agents and humans.
Work top-down. Do not invent OEM part numbers.

## Anti-hallucination rules (always)

1. Never invent Chevrolet/Opel OEM numbers, aftermarket codes, or fitment claims.
2. Every equivalence row needs `confidence`, `provenance`, and a human-readable `reason`.
3. Synthetic demo fixtures must be labeled `synthetic` and must not look like real OEM data.
4. Safety-critical categories default to `do-not-advise` unless curated evidence exists.
5. UI must never present `unknown` or failed lookup as a successful match.
6. Prefer “insufficient evidence” over a plausible-looking answer.

## Objective board

| ID  | Status      | Objective                                  | Exit evidence                                                                 |
| --- | ----------- | ------------------------------------------ | ----------------------------------------------------------------------------- |
| O1  | done        | OSS foundation                             | LICENSE, CoC, CONTRIBUTING, SECURITY, GOVERNANCE, SUPPORT, README EN/PT       |
| O2  | done        | Reproducible SvelteKit + TypeScript app    | `npm run test:run` + `npm run build` pass                                     |
| O3  | done        | Versioned interchange schema + Vectra seed | `packages/schemas/*` + `data/fixtures/vectra/alpha.catalog.json`              |
| O4  | done        | Deterministic search engine                | 6 unit tests incl. unknown-code + do-not-advise                               |
| O5  | done        | Runnable browser alpha                     | Search/Catalog/About + `.oparts.json`                                         |
| O6  | done        | GitHub project hygiene                     | https://github.com/Navesz/openparts + Issues M0–M4 + Pages demo               |
| O7  | done        | Safety & validation docs                   | SAFETY, VALIDATION, VALIDATION_REPORT measured                                |
| O8  | done        | Cross-reference UX (batida)                | applications on hits + Plataformas/Fontes + multi-vehicle Family I/II fixture |
| O9  | in_progress | Curated public-history notes (no scrape)   | More redistributable narrative edges with provenance URLs                     |

## Agent continuation contract

When all board objectives are `done` and no user expansion is pending,
set `auto_continue: false` in `docs/HANDOFF.md`.

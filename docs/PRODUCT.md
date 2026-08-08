# Product definition

## Vision

Make **cross-reference / intercambiabilidade** (batida de peças) understandable
without a dealership EPC — starting with Chevrolet/GM Brazil platform families,
seeded on Vectra.

Open Parts turns a part code into an **explainable** list of catalog
applications and equivalences, with confidence and sources. It does not sell
parts and does not promise fitment.

## Initial users

1. Owners comparing workshop quotes across shared GM platforms.
2. Independent mechanics checking platform sharing (Família I / II).
3. Students learning OEM numbering and interchange.
4. Contributors curating redistributable fixtures.

## Runnable alpha journey

1. Open the web app (no account).
2. Paste a synthetic code (`SYN-FAMILY2-OIL-01`) or filter by vehicle.
3. See **applications** (which cars in the fixture share that SKU) + equivalences.
4. Read safety warnings; use **Fontes** for CepChev / TecDoc / Nakata workflows.
5. Save/reopen a local `.oparts.json` notes file.

## Non-goals for alpha

- Scraping CepChev, TecDoc, OEM EPC, or dealer catalogs into the repo
- Inventing real OEM numbers
- Guaranteeing physical fitment
- Replacing professional catalogs (see `docs/RESEARCH_SOURCES.md`)
- Live prices / checkout

## Success criteria

- A newcomer understands _why_ two codes/vehicles are linked.
- Unknown codes fail honestly.
- Contributors can add a fixture with provenance in one PR.
- Safety-critical advice stays conservative by default.

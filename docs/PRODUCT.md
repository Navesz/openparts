# Product definition

## Vision

Make cross-compatible car parts understandable for people who do not have a
dealership EPC subscription — starting with Chevrolet Vectra.

Open Parts turns a part code or vehicle context into an **explainable** list of
possible equivalences, with confidence and sources. It does not sell parts and
does not promise fitment.

## Initial users

1. Vectra owners comparing workshop quotes.
2. Independent mechanics checking platform sharing.
3. Students learning how OEM numbering and interchange work.
4. Contributors curating redistributable fixtures.

## Runnable alpha journey

1. Open the web app (no account).
2. Choose Vectra generation or paste a part code from the demo fixtures.
3. See candidate equivalences with confidence and reasons.
4. Read safety warnings for critical categories.
5. Save/reopen a local `.oparts.json` notes/project file.

## Non-goals for alpha

- All Chevrolet or all GM vehicles
- Live supermarket-style price scraping
- Automatic ordering or affiliate checkout
- Guaranteeing physical fitment
- Replacing a calibrated workshop catalog (TecDoc/OEM EPC)

## Success criteria

- A newcomer understands *why* two codes are linked.
- A wrong or unknown code fails honestly.
- Contributors can add a fixture with provenance in one PR.
- Safety-critical advice is conservative by default.

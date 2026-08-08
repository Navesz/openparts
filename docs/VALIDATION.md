# Validation strategy

Open Parts separates software correctness from catalog truth. Passing unit tests
does **not** prove that a part fits a car.

## Evidence layers

1. **Schema and engine tests** — deterministic lookup, confidence filters, miss paths.
2. **Fixture integrity** — every edge has provenance fields; synthetic rows tagged.
3. **UI honesty** — failed/unknown states cannot render as successful matches.
4. **Curator review** — human acceptance before promoting `community-proposed` → `curated`.

## Accuracy language

Until a fixture family has documented curator review, the UI and docs must say
**unvalidated interchange estimate** or **synthetic demo**.

Do not publish universal accuracy percentages.

## Measured alpha evidence

Commands, counts, and dates live in [VALIDATION_REPORT.md](VALIDATION_REPORT.md)
and must be updated when milestones claim completion.

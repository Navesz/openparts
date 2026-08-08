# Safety

Open Parts is an educational interchange lookup tool. It is **not** a workshop
instruction, fitment certificate, or authorization to install a part.

## Hard limits

- Treat every match as a hypothesis until verified against the vehicle, the
  physical part, and a qualified professional when needed.
- Brakes, steering, airbags, seatbelts, structural mounts, and similar
  safety-critical categories must display a blocking warning. Alpha data for
  these categories should default to `do-not-advise` unless a maintainer-curated
  source explicitly allows a cautious informational link.
- Never present low-confidence or synthetic demo data as dealer-confirmed OEM truth.
- If evidence is missing, say so. Do not guess dimensions, torque, or compatibility.

## UI language

Preferred labels:

- `curated` — reviewed fixture with documented provenance
- `synthetic` — demo/CI only
- `community-proposed` — awaiting review
- `do-not-advise` — shown only as a refusal/warning

Forbidden patterns:

- “guaranteed fit”
- “100% compatible”
- silent substitution of a different category part

## Contributor duty

When adding data, document the source, the date accessed, redistribution rights,
and residual doubt. Reject pull requests that invent numbers to “look complete”.

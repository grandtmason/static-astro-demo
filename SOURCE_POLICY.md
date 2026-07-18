# SABR Source-of-Truth Policy

## Source Hierarchy (highest wins on conflict)
1. **SANBI PlantZAfrica** (pza.sanbi.org) — authoritative for common names, family, distribution/native range
2. **Peer-reviewed journals** (Scholar-indexed) — chemistry, clinical, pharmacological claims. Note citation count when available.
3. **Government/regulatory bodies** (.gov.za, EMA, WIPO, DFFE) — GI, BSA, legal/conservation status
4. **Internal dossier / editorial content** — used only when 1–3 are silent. Always marked `"source": "internal"` in provenance metadata, never presented as independently verified.

## Rules
- Every structured fact in `plant_registry.json` must carry `source` and `verified_at`.
- If no source can be found, the field is marked `"unverified"` — never filled with plausible-sounding but unchecked text.
- When a fact changes, the old value moves to a `history` array. Nothing is silently overwritten.
- The scraper bot follows this same hierarchy for all pillar content and must write `source_urls` and `verified_at` on every entry.
- `24 Plants_audited.docx` is the human-readable decision ledger — the "why." The JSON files are the machine source — the "what." They are never merged into one file.

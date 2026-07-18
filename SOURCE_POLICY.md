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

## Editorial Writing Constraints (Pillar Articles)

To keep articles reading as genuinely human-written rather than detectably AI-generated, every pillar article must follow these rules:

1. **No em dashes (—), ever.** Use a comma, a period and new sentence, or parentheses instead.
2. **No "not just X, but Y" constructions.**
3. **No triplet lists used as a rhetorical device** (e.g. "X, Y, and Z" repeated as a stylistic pattern rather than because three specific things are genuinely being listed).
4. **No throat-clearing transitions**: "It's worth noting that," "Importantly," "That said," "Taken together," "Read together."
5. **No vague intensifiers as filler**: "significantly," "substantially," "genuinely," "meaningfully" — only use these words when tied to an actual number, comparison, or specific claim.
6. **Paragraphs do not need a tidy summary sentence at the end.** Stop when the point is made.
7. **No over-signposting structure** ("The first study... The second study... Together, these...").
8. **Vary sentence length and rhythm deliberately** — avoid long runs of similarly-structured, similarly-balanced sentences.
9. **Vary paragraph openers across articles** — don't start every article's first sentence with the same grammatical shape.
10. **Hedging words** ("may suggest," "could indicate," "appears to") should be used only when the source itself is genuinely uncertain, not as a reflexive softening pattern.

These rules apply to every article added to any `pillars/[slug].json` file, checked by re-reading the draft against this list before finalizing.

## Language Standard

All pillar articles, and all site copy generally, must be written in UK English (South African usage). This means:
- "colour," "favour," "organisation," "recognise," "centre," "programme," "analyse," "modelling" (not the US "color," "favor," "organization," "recognize," "center," "program," "analyze," "modeling")
- "-ise" endings preferred over "-ize" (e.g. "recognise," "characterise," "prioritise")
- South African-specific terms retained where relevant and accurate (e.g. "veld," "fynbos," "muti," "township," provincial names)
- Dates in day-month-year order (e.g. "18 July 2026," not "July 18, 2026")

## Per-Category Guidelines

**Health and Wellness**
- Describe what

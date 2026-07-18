# Scraper Bot Specification Notes

Running log of edge cases, judgment calls, and lessons learned during manual article-writing, intended as real-world input for building the automated scraper bot later. Each entry should be concrete enough that a future engineer (human or AI) could read it and understand exactly what the bot needs to handle.

---

## 2026-07-19 — Honeybush — Legislation — GI status was more advanced than assumed

**What happened:**
Earlier audit work (plant_registry.json) recorded Honeybush's GI status as "no GI, Rooibos-specific RBSA only." Live research during article-writing found Honeybush actually holds EU Geographical Indication status via the SADC-EU Economic Partnership Agreement, one of only three SA agricultural products protected this way.

**Why it mattered:**
The registry would have published an inaccurate, outdated legal status claim, undermining source-of-truth credibility on exactly the kind of fact (legal/regulatory status) most likely to be checked or challenged.

**How it was resolved manually:**
Live browser search specifically re-checked GI status at point of writing rather than trusting the earlier audit entry, found the SADC-EU EPA source, flagged the correction back to plant_registry.json.

**What this means for the bot:**
The bot cannot treat plant_registry.json as a frozen source of truth once written. Legislation and Intelligence categories specifically need mandatory re-verification against live sources every time an article is generated, even if a "final" fact already exists elsewhere in the registry. Stale internal data should never silently override fresh research.


---

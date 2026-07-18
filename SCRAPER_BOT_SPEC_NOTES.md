# Scraper Bot Specification Notes

Running log of edge cases, judgment calls, and lessons learned during manual article-writing, intended as real-world input for building the automated scraper bot later. Each entry should be concrete enough that a future engineer (human or AI) could read it and understand exactly what the bot needs to handle.

---

## 2026-07-19 — All plants — Editorial style — AI-writing tells identified in early drafts

**What happened:**
Initial Rooibos and Honeybush article drafts, while factually accurate, used detectable AI-writing patterns: frequent em dashes, "not just X but Y" constructions, throat-clearing transitions ("It's worth noting that," "Taken together"), vague intensifiers ("significantly," "genuinely") used as filler, and every paragraph closing on a tidy summary sentence.

**Why it mattered:**
Content that reads as obviously AI-generated undermines trust in a registry explicitly positioned as a source of truth. Readers and search/AI crawlers increasingly penalize or discount detectably formulaic AI writing. This also risked making all 24 plants' content sound identical in rhythm and voice, rather than reading as genuine editorial work.

**How it was resolved manually:**
A specific list of 10 AI-writing tells was identified and documented. Existing draft articles were rewritten by hand against this list (shorter sentences, no em dashes, no forced summary closings, varied paragraph openers) as a direct before/after comparison.

**What this means for the bot:**
Automated article generation needs an explicit style-linting pass before publishing, checking generated text against the specific list of prohibited patterns in SOURCE_POLICY.md's "Editorial Writing Constraints" section (no em dashes, no "not just X but Y," no throat-clearing transitions, no filler intensifiers, no forced paragraph-summary endings, varied sentence rhythm and paragraph openers). This should be a hard gate, not a soft preference, since these patterns are exactly what makes AI content detectable at scale.

---

## 2026-07-19 — All plants — Knowledge equity — No hierarchy between traditional, indigenous, and peer-reviewed knowledge

**What happened:**
Discussion surfaced a real risk: default AI/Western writing conventions implicitly rank peer-reviewed science above traditional and indigenous knowledge, treating the latter as folklore that science is "now validating." Grandt explicitly rejected this framing, given the registry's subject matter (natural medicine, indigenous knowledge, traditional healers) and stated audience (many of whom are skeptical of or opposed to Big Pharma framing).

**Why it mattered:**
This isn't just a tone preference. Implicitly hierarchical framing would be disrespectful to the traditional healers and communities the registry depends on for content, and would alienate a core part of the intended audience. It also creates real reputational and ethical risk if handled carelessly.

**How it was resolved manually:**
A four-category badge system was designed (Peer-reviewed/clinical, Natural/traditional medicine, Indigenous knowledge, Industry/trade/regulatory), explicitly designed with no visual or editorial ranking between them, only different source-type labeling. Specific writing rules were set: traditional/indigenous knowledge is described using practice language ("has long been used for"), never efficacy language ("cures," "treats"), regardless of how well-established the practice is. Peer-reviewed findings are described as measured outcomes, never framed as confirming or "catching up to" traditional knowledge.

**What this means for the bot:**
Automated article generation needs a mandatory badge-classification step (assigning one of the four badge types based on the claim's actual source type) and a corresponding phrasing-check step, ensuring traditional/indigenous claims never use efficacy language and peer-reviewed claims are never framed as validating or superseding traditional knowledge. This is a content-safety and ethical-framing gate, not just a stylistic one, and should be treated with the same seriousness as factual accuracy checks.

---

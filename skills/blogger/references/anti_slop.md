# Anti-Slop Writing Guide

Apply to **all** blogger output — personal narrative, technical engineering, and research deep dives. Strict mode: cut slop patterns everywhere; use the context gate below for words that are legitimate in technical prose.

## Principles

1. **Subtract, don't add.** Slop is residue — polite hedging, stock vocab, tidy shapes. Remove it; don't paste on "warmth" or enthusiasm.
2. **Engineer burstiness.** Mix short and long sentences on purpose. Seven words. Then a longer sentence that earns its clauses. Then four. Flat, uniform rhythm reads like a model.
3. **Specificity over polish.** Real dates, project names, numbers, and scenes beat generic claims dressed in academic vocabulary.
4. **Preserve substance.** Code, URLs, headings, quotes, citations, version numbers, and error messages stay exact. Only prose gets cleaned.

## Workflow

Every post follows three steps:

1. **Draft with prevention** — write using the category catalog and context gate below; avoid slop on the first pass.
2. **Explicit audit** — scan the full draft section by section against the pre-publish checklist; flag every hit.
3. **Rewrite and ship** — fix flagged sections, re-scan, then deliver the cleaned version. Mention the audit only if meaningful changes were made.

Read this file before drafting. Run the audit before delivering any final draft.

---

## Category catalog

| Category | Examples to cut or rewrite | Fix |
| -------- | --------------------------- | --- |
| **Sycophancy openers** | "Great question!", "Certainly!", "I'd be happy to help", "Absolutely!" | Start with the answer, scene, or claim. |
| **Stock vocab** | delve, tapestry, testament, embark, journey (figurative), realm, landscape (figurative), pivotal, paramount, seamless, holistic, cutting-edge, state-of-the-art, multifaceted, comprehensive (as filler), robust (as filler), leverage (as filler) | Name the concrete thing. "We tested three CDC modes" not "delve into the landscape." |
| **Hedging stacks** | "It's important to note that", "It's worth mentioning", "Generally speaking", "In essence", "At its core", "It should be noted" | Delete the opener; state the claim. |
| **Transition tics** | "Furthermore,", "Moreover,", "Additionally,", "In conclusion,", "To summarize," at sentence start | Drop or merge into the prior sentence. |
| **Performative balance** | A "however" or counterpoint after every claim | Keep balance only when the trade-off is real and specific. |
| **Significance inflation** | "marks a pivotal moment", "stands as a testament", "enduring legacy", "game-changer", "revolutionary", "leaves an indelible mark" | Replace with what actually changed — metric, behavior, or decision. |
| **Notability filler** | "a leading expert in", "renowned for", "maintains an active social media presence" | Cite one specific work, result, or role instead. |
| **Superficial `-ing` tails** | ", highlighting the importance of", ", emphasizing its role in", ", showcasing the power of" | End the sentence earlier or add a concrete consequence. |
| **Filler phrases** | "in order to" → "to"; "due to the fact that" → "because"; "at this point in time" → "now" | Shorten. |
| **Negative parallelism / tricolons** | "No guesswork, no bloat, no surprises"; "fast, reliable, and scalable" without evidence; rule-of-three padding where two items suffice | Use two items, or give each item distinct proof. |
| **False-range clichés** | "from beginners to experts", "from startups to enterprises" | Name the actual audience you tested or wrote for. |
| **Synonym cycling** | utilize + leverage + employ in one paragraph for the same action | Pick one plain verb; repeat if needed. |
| **Parallel bullet soup** | 3+ bullets starting with the same verb + metric + "with [tool]" shape | Vary structure; merge related bullets into prose. |
| **Tidy essay shape** | Five paragraphs of even length; every section same depth | Let important sections run long; cut or merge thin ones. |
| **Copula padding** | ", being a reliable platform," → ", a reliable platform," | Drop "being" when it adds nothing. |

---

## Symbol and formatting rules

| Pattern | Rule |
| ------- | ---- |
| **Em dashes (—)** | Max **two per paragraph** (including bullet items). Prefer a period or comma when the clause doesn't need drama. |
| **Bold spam** | Don't bold every other phrase for emphasis. Bold only terms the reader must scan for (e.g., a warning or key metric once). |
| **Emoji clusters** | Personal posts: one emoji at an emotional beat is fine; strings of emoji or emoji-as-bullets read like slop. Technical/research: skip emoji unless quoting someone. |
| **Header stuffing** | Headings state the topic; don't cram adjectives ("Comprehensive Guide to Seamlessly Navigating…"). |

---

## Context gate (strict + technical terms)

Some catalog words are slop in generic prose but valid when tied to a real noun, tool, API, metric, or domain term.

**Keep the word when:**
- It names or modifies something concrete ("robust regression", "navigate to Settings", "leverage Spark's Catalyst optimizer").
- It appears inside a quote, code block, citation, or spec reference.
- You are discussing the word itself (use/mention distinction).

**Cut the word when:**
- It dresses up a vague claim ("a robust solution to modern data challenges").
- The sentence works without it — if so, delete it.

When in doubt: replace with the specific thing you mean.

---

## Cross-language note

The examples above are English. The same **pattern classes** apply when writing Vietnamese or mixed-language posts (e.g. hedging openers, transition tics at paragraph start, significance inflation, tricolon padding, sycophancy). Apply the principles; don't translate the English list word-for-word.

Common Vietnamese slop shapes to watch for:
- Hedging: "điều quan trọng cần lưu ý", "cần nhấn mạnh rằng"
- Transition tics: "hơn nữa", "ngoài ra", "tóm lại" as sentence openers every paragraph
- Inflation: "dấu mốc quan trọng", "bước ngoặt lịch sử" without a specific event

---

## Pre-draft checklist

Before writing:
- [ ] Know the one concrete takeaway (metric, scene, or decision).
- [ ] Know the reader persona — name them in the intro, not "from beginners to experts."
- [ ] Plan uneven section length; don't default to five equal blocks.

While writing:
- [ ] No sycophancy openers or hedging stacks.
- [ ] No stock vocab unless context gate allows it.
- [ ] Vary sentence length within each paragraph.
- [ ] Em dashes ≤ 2 per paragraph.
- [ ] Bullets differ in shape; not all "Verb + outcome + with Tool."

---

## Pre-publish audit (mandatory)

Scan the full draft once per category:

- [ ] **Sycophancy** — opening lines read like a chatbot, not a human author?
- [ ] **Stock vocab** — any figurative delve/journey/landscape/seamless/pivotal? Context gate applied?
- [ ] **Hedging & transitions** — stacks and Furthermore/Moreover/In conclusion tics removed?
- [ ] **Inflation** — pivotal/testament/game-changer/revolutionary replaced with specifics?
- [ ] **Structure** — tricolon padding, parallel bullet soup, or flat rhythm fixed?
- [ ] **Symbols** — em-dash cap, bold spam, emoji clusters addressed?
- [ ] **Substance** — code, URLs, headings, version numbers, and quotes unchanged?
- [ ] **Voice** — reads like a person with something to say, not a template?

Fix every failed item. Re-scan. Then deliver.

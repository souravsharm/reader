# Formatting Pipeline Explained

This document matches the current implementation in `public/read.html`.

## Goal

Convert unreliable pasted text into readable paragraph structure that works well on iPhone Safari and Safari Reader Mode.

## End-to-End Flow

`loadText()` gets raw text from `/get-text`, then:

1. `reconstructParagraphs(text)`
2. `normalizeInputText(text)`
3. `splitIntoSegments(normalized)`
4. `splitLongParagraph(segment.text)` for text segments
5. render with:
   - `renderParagraph()` for prose
   - `renderSceneBreak()` for scene transitions

## 1) Normalization

`normalizeInputText()` handles copy/paste inconsistencies:

- line endings: `\r\n`, `\r`, Unicode paragraph separators
- non-breaking spaces: converted to regular spaces
- punctuation glue repair:
  - `Hello.World` -> `Hello. World`
- dialogue split:
  - `"ram" "sham"` -> two blocks separated by blank line
  - supports straight and curly double quotes
- scene-break normalization:
  - accepts `...`, `\u2026`, `. . .`
  - converts to canonical `...` marker

## 2) Segment Building

`splitIntoSegments()` preserves explicit structure while isolating scene breaks:

- split by blank lines first
- inside each block:
  - if line is scene break -> emit `{ type: 'scene-break' }`
  - otherwise collect text lines and join into `{ type: 'text', text: ... }`

Recognized scene break input:
- `...`
- `\u2026`
- `. . .`
- `* * *`

## 3) Long Paragraph Chunking

If a text segment is very long (common after iPhone "copy all"), `splitLongParagraph()`:

- tokenizes into sentences
- keeps normal paragraphs unchanged
- chunks oversized blocks into smaller groups for readability

Current guardrails:
- do not split when text is short
- split when block is long and has enough sentences
- chunk by max sentence count / max character budget

## 4) Rendering

Everything is rendered as semantic paragraph content:

- prose:
  ```html
  <p class="prose">...</p>
  ```
- scene break:
  ```html
  <p class="scene-break">...</p>
  ```

This keeps output simple and Reader-friendly.

## 5) Safety

`escapeHtml()` is applied before insertion into `innerHTML`, preventing script injection from pasted content.

## CSS Notes (`public/styles.css`)

Reader-focused choices:
- consistent paragraph gap (`margin-bottom`)
- left-aligned text for predictable line breaks on small screens
- disabled auto hyphenation to avoid awkward word breaks on mobile
- explicit spacing around `.scene-break`

## Tuning

If you want denser or looser output, tune:

- JS chunking thresholds in `splitLongParagraph()`
- paragraph spacing in `.reading-content p`
- scene-break spacing in `.reading-content p.scene-break`

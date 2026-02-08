# Solution Explained

## Goal

Use explicit paragraph markers instead of text heuristics.

## Rule

- `$$` means "paragraph ends here".

## Pipeline (`public/read.html`)

1. Normalize input:
   - normalize line endings
   - normalize unicode spacing
2. Replace markers:
   - `$$` -> blank line separator
3. Split into paragraphs:
   - split on blank lines
   - trim and collapse inner whitespace
4. Render:
   - each paragraph as `<p class="prose">...</p>`
   - escape HTML before insertion

## Why This Approach

- deterministic behavior on desktop and iPhone
- no quote parsing edge cases
- no scene-break special casing needed

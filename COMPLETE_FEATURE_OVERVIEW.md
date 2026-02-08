# Complete Feature Overview

## Product Goal

Provide a clean reading surface for pasted text so iPhone Safari Reader Mode can be used reliably.

## Current Feature Set

1. Text paste and submit flow
   - `public/index.html` -> `POST /submit-text`
   - server stores text in memory
2. Reader route
   - `GET /read` renders `public/read.html`
3. Formatting pipeline
   - normalization of pasted text artifacts
   - dialogue separation for adjacent quote blocks
   - scene-break detection and isolation
   - long paragraph chunking for flattened copy
4. Secure rendering
   - HTML escaped before insertion into DOM
5. Reader-friendly output
   - semantic paragraph markup only (`<p>`)
6. Mobile typography
   - tuned spacing and line-height in `public/styles.css`

## Scene Break and Dialogue Rules

- Input scene markers recognized: `...`, `\u2026`, `. . .`, `* * *`
- Scene breaks render as: `<p class="scene-break">...</p>`
- Adjacent quote groups are split into separate paragraph blocks

## Architecture

- Backend: `server.js` (Express, in-memory state)
- Frontend:
  - `public/index.html` (paste form)
  - `public/read.html` (format + render)
  - `public/styles.css` (presentation)

## Known Constraints

- text is not persisted after server restart
- single shared in-memory buffer (not multi-user isolated)
- no authentication/storage layer

## Recommended Next Improvements

1. Persist text per session or per user
2. Add unit tests for formatting functions
3. Add configurable spacing presets for reader comfort


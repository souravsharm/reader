# Text Reader

A small web app for pasting long-form text and reading it cleanly in Safari Reader Mode (especially on iPhone).

## What It Solves

When text is copied from websites, formatting often breaks:
- paragraph breaks disappear
- quotes run together
- scene breaks (`...`) get buried

This app rebuilds readable structure before rendering.

## Current Formatting Behavior

The reader page (`public/read.html`) uses this pipeline:

1. Normalize pasted text:
   - line endings (`\r\n`, `\r`, Unicode separators)
   - non-breaking spaces
   - common copy artifacts
2. Repair missing spaces after punctuation:
   - example: `Hello.World` -> `Hello. World`
3. Separate consecutive quotes:
   - example: `"ram" "sham"` -> two paragraph blocks
4. Detect scene breaks:
   - supports `...`, `\u2026`, `. . .`, and `* * *` as input markers
   - renders as an isolated `...` line with extra spacing
5. Split oversized flattened text blocks into smaller paragraph chunks by sentence boundaries.

Output is semantic paragraph markup:
- prose: `<p class="prose">...</p>`
- scene break: `<p class="scene-break">...</p>`

## Local Setup

Prerequisites:
- Node.js 14+
- npm

Run locally:

```bash
npm install
npm start
```

Open:

```text
http://localhost:3000
```

## Usage

1. Paste text on `/`
2. Click `Read Text ->`
3. Open `/read`
4. On iPhone Safari, tap `aA` -> `Show Reader View`

## Example

Input:

```text
"Hello," she said. "Hi," he replied.
...
Next scene starts.
```

Rendered structure:

```text
"Hello," she said.

"Hi," he replied.

...

Next scene starts.
```

## Project Structure

- `server.js`: Express server and in-memory text store
- `public/index.html`: paste form
- `public/read.html`: formatting logic + reader view
- `public/styles.css`: layout and reading typography

## Notes

- Text is stored in memory only (resets when server restarts).
- HTML escaping is applied before render to prevent XSS.

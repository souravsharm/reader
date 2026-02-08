# Quick Reference

## Core Features

| Feature | Input Example | Output Behavior |
|---|---|---|
| Paragraph recovery | flattened pasted text | split into readable paragraph chunks |
| Quote separation | `"ram" "sham"` | rendered as separate paragraph blocks |
| Scene break detection | `...`, `\u2026`, `. . .`, `* * *` | rendered as isolated `...` line |
| Safari friendly markup | long narrative text | semantic `<p>` structure for Reader Mode |
| XSS safety | pasted HTML/script content | escaped before render |

## Quick Test Input

```text
"First line." "Second line."
...
This is a long paragraph that may have been flattened by copy all and should be broken into smaller readable chunks when it gets too long.
```

Expected:
- first two quote blocks are separated
- scene break is shown as its own `...` line
- long prose is chunked when oversized

## Useful Files

- `public/read.html`: formatting logic
- `public/styles.css`: reader typography and spacing
- `README.md`: setup and behavior summary
- `SOLUTION_EXPLAINED.md`: technical breakdown

## Browser Console Checks

```javascript
document.querySelectorAll('.reading-content p.prose').length
document.querySelectorAll('.reading-content p.scene-break').length
```

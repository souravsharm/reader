# Dialogue and Scene Break Rules

This is the current behavior implemented in `public/read.html`.

## Dialogue Separation

Goal:
- avoid cramped output like `"ram" "sham"`
- produce clearly separated blocks

Normalization rule:
- closing quote + whitespace + opening quote
- supports straight and curly double quotes

Example:

```text
"ram" "sham"
```

becomes:

```text
"ram"

"sham"
```

## Scene Break Detection

Input markers accepted:
- `...`
- `\u2026`
- `. . .`
- `* * *`

All scene markers are normalized and rendered as:

```html
<p class="scene-break">...</p>
```

## Example

Input:

```text
"I have to go," she said. "Wait," he replied.
...
Hours later, she returned.
```

Output shape:

```text
"I have to go," she said.

"Wait," he replied.

...

Hours later, she returned.
```

## Why This Works Better on iPhone

- pasted text is normalized for Unicode spacing and punctuation artifacts
- scene breaks are isolated before prose chunking
- final output uses simple paragraph markup (`<p>`) instead of nested wrappers

## Styling Hooks

From `public/styles.css`:
- prose: `.reading-content p.prose`
- scene breaks: `.reading-content p.scene-break`

Tune spacing by changing margin values in those selectors.

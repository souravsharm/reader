# Testing Guide

This guide reflects the current renderer in `public/read.html`.

## Start Locally

```bash
npm install
npm start
```

Open `http://localhost:3000`.

## Test Matrix

### 1) Consecutive Quotes

Input:

```text
"One." "Two." "Three."
```

Expected:
- 3 prose paragraphs

### 2) Scene Break Variants

Input:

```text
Before
...
After
```

and

```text
Before
\u2026
After
```

and

```text
Before
* * *
After
```

Expected:
- exactly one `.scene-break` paragraph in each case
- scene break text is rendered as `...`

### 3) Smart Quotes

Input:

```text
\u201CRam.\u201D \u201CSham.\u201D
```

Expected:
- 2 prose paragraphs

### 4) Flattened Long Text

Input:

```text
This is sentence one.This is sentence two.This is sentence three.This is sentence four.This is sentence five.
```

Expected:
- missing spacing after punctuation repaired
- text split into readable chunks when long enough

### 5) XSS

Input:

```html
<script>alert(1)</script>
```

Expected:
- no script execution
- escaped text rendered visibly

## Safari iPhone Check

1. Open app in Safari on iPhone.
2. Paste long text and open `/read`.
3. Verify paragraph separation is preserved.
4. Tap `aA` and enable Reader View.

Expected:
- Reader View is available (for sufficient content length)
- prose and scene-break spacing remain readable

## Useful Console Checks

```javascript
document.querySelectorAll('.reading-content p.prose').length
document.querySelectorAll('.reading-content p.scene-break').length
```

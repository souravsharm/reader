# Before vs After

## Input Problem (Before)

Copied text often arrives flattened:

```text
"Hello." "Hi." Scene one...Scene two starts now.
```

This is hard to read, especially on iPhone.

## Rendered Output (After)

Current formatter converts it into readable blocks:

```text
"Hello."

"Hi."

...

Scene two starts now.
```

## What Changed in the Formatter

1. Unicode-aware normalization (spaces, line separators)
2. Missing punctuation spacing repair
3. Quote-to-quote separation
4. Scene-break isolation
5. Long-block paragraph chunking

## Result

- clearer sentence/paragraph rhythm
- visible scene transitions
- better readability in Safari Reader Mode on iPhone

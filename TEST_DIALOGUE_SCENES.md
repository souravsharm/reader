# Test Samples: Dialogue and Scene Breaks

Use these inputs on `/` and verify output on `/read`.

## Test 1: Consecutive Quotes

Input:

```text
"Hello." "Hi." "Bye."
```

Expected:
- 3 separate prose paragraphs

## Test 2: Scene Break Marker

Input:

```text
Line before.
...
Line after.
```

Expected:
- prose paragraph
- one scene break paragraph (`...`)
- prose paragraph

## Test 3: Smart Punctuation

Input:

```text
\u201COne.\u201D \u201CTwo.\u201D
\u2026
Next line.
```

Expected:
- smart quotes are treated like standard quotes
- ellipsis character is treated as scene break

## Test 4: Flattened Block Recovery

Input:

```text
This is a very long paragraph copied from a site where all spacing collapsed.This should still become readable after formatting because missing spaces after punctuation are repaired and oversized blocks are chunked into smaller paragraphs for easier reading on iPhone screens.
```

Expected:
- missing punctuation spaces repaired
- text chunked into multiple prose paragraphs if oversized

## Test 5: Alternate Scene Break Inputs

Input:

```text
Before
. . .
After
```

And:

```text
Before
* * *
After
```

Expected:
- both recognized as scene breaks
- rendered as `...` scene break paragraphs

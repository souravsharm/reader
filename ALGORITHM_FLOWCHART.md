# Formatting Flowchart

```text
Raw pasted text
    |
    v
normalizeInputText()
  - normalize line endings and unicode spaces
  - repair missing spaces after punctuation
  - split adjacent quote blocks
  - normalize scene break variants
    |
    v
splitIntoSegments()
  - text segments
  - scene-break segments
    |
    +--> scene-break -> renderSceneBreak() -> <p class="scene-break">...</p>
    |
    +--> text -> splitLongParagraph()
                  - keep normal paragraphs
                  - chunk oversized flattened blocks
                        |
                        v
                   renderParagraph() -> <p class="prose">...</p>
    |
    v
escapeHtml() + join output
    |
    v
Insert into #textContent
```

## Complexity

- Overall time: O(n)
- Overall space: O(n)

Where `n` is input text length.

# 🔄 Smart Paragraph Algorithm - Visual Flowchart

```
┌─────────────────────────────────────┐
│   User Pastes Text Into Textarea   │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│   1. NORMALIZE LINE ENDINGS         │
│   ─────────────────────────────     │
│   \r\n → \n  (Windows)              │
│   \r   → \n  (Old Mac)              │
│   Result: Consistent \n everywhere  │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│   2. CHECK FOR DOUBLE NEWLINES      │
│   ─────────────────────────────     │
│   Does text contain \n\n ?          │
└──────────────┬──────────────────────┘
               │
       ┌───────┴────────┐
       │                │
     YES              NO
       │                │
       ▼                ▼
┌──────────────┐  ┌─────────────────────────────┐
│ STRATEGY 1   │  │   3. COUNT PARAGRAPHS       │
│ ────────────│  │   ──────────────────────    │
│ Easy Mode!   │  │   Split by heuristics       │
│              │  │   Count results             │
│ Split on \n\n│  └─────────────┬───────────────┘
│ Join singles │                │
│ Wrap in <p>  │        ┌───────┴─────────┐
│              │        │                 │
│ DONE! ✅     │   Paragraphs < 3     Paragraphs ≥ 3
└──────────────┘   AND length > 1000      │
                        │                 │
                        ▼                 ▼
              ┌──────────────────┐  ┌──────────────┐
              │  STRATEGY 3      │  │  STRATEGY 2  │
              │  ───────────────│  │  ───────────│
              │  Last Resort!    │  │  Good Enough!│
              │                  │  │              │
              │  Aggressive      │  │  Use         │
              │  sentence split  │  │  heuristics  │
              │  Group by 4      │  │  as-is       │
              │  Force readable  │  │              │
              │  chunks          │  │              │
              └────────┬─────────┘  └──────┬───────┘
                       │                   │
                       └─────────┬─────────┘
                                 │
                                 ▼
                       ┌──────────────────┐
                       │  4. ESCAPE HTML  │
                       │  ───────────────│
                       │  Prevent XSS     │
                       │  attacks         │
                       └────────┬─────────┘
                                │
                                ▼
                       ┌──────────────────┐
                       │  5. RENDER HTML  │
                       │  ───────────────│
                       │  Insert into DOM │
                       │  Apply CSS       │
                       └────────┬─────────┘
                                │
                                ▼
                       ┌──────────────────┐
                       │   BEAUTIFUL      │
                       │   PARAGRAPHS! ✨ │
                       │                  │
                       │   Safari Reader  │
                       │   Mode Ready 📖  │
                       └──────────────────┘
```

---

## Strategy Details

### 📋 STRATEGY 1: Double Newline Detection

**When:** Text contains `\n\n` (paragraph markers)

**Algorithm:**
```javascript
text.split(/\n\n+/)           // Split on double newlines
    .filter(p => p.length > 0) // Remove empty
    .map(p => {
        return p.replace(/\n/g, ' ') // Single newlines → spaces
                .replace(/\s+/g, ' '); // Normalize whitespace
    })
    .map(p => `<p>${escape(p)}</p>`) // Wrap in <p> tags
```

**Example:**
```
Input:
"Paragraph one.\n\nParagraph two."

Output:
<p>Paragraph one.</p>
<p>Paragraph two.</p>
```

---

### 🧠 STRATEGY 2: Heuristic Detection

**When:** No double newlines, but reasonable line breaks

**Heuristics:**

1. **Sentence Ending Rule**
   ```
   Current line: "Hello world."
   Next line: "Another sentence."
   
   Check:
   - Ends with .!? → YES ✅
   - Next starts with A-Z → YES ✅
   
   Action: Create paragraph break
   ```

2. **Short Line Rule**
   ```
   Current line: "Short."  (length < 50)
   
   Action: Likely intentional break → new paragraph
   ```

3. **Length Safety Rule**
   ```
   Current paragraph: 500+ characters
   
   Action: Force break (prevent giant paragraphs)
   ```

**Algorithm Flow:**
```javascript
for each line:
    add line to currentParagraph
    
    if (ends with punctuation AND next starts capital):
        → finalize paragraph
    
    else if (line length < 50):
        → finalize paragraph
    
    else if (current paragraph > 500 chars):
        → finalize paragraph
```

**Example:**
```
Input:
"First sentence.\nSecond sentence.\nThird sentence."

Detection:
Line 1: "First sentence."  → ends with . → check next
Line 2: "Second sentence." → starts with S → NEW PARAGRAPH
Line 2: "Second sentence." → ends with . → check next
Line 3: "Third sentence."  → starts with T → NEW PARAGRAPH

Output:
<p>First sentence.</p>
<p>Second sentence.</p>
<p>Third sentence.</p>
```

---

### ⚡ STRATEGY 3: Aggressive Splitting

**When:** Few paragraphs detected (< 3) in long text (> 1000 chars)

**Algorithm:**
```javascript
// Split on sentence boundaries
text.split(/([.!?]+\s+)(?=[A-Z"'])/)
    
    // Group every 4 sentences
    .reduce((acc, part, i) => {
        if (i % 4 === 0) {
            acc.push(sentences[i:i+4].join(' '));
        }
        return acc;
    }, [])
    
    // Filter short fragments
    .filter(p => p.length > 20)
    
    // Wrap in <p> tags
    .map(p => `<p>${escape(p)}</p>`)
```

**Example:**
```
Input (no line breaks):
"One. Two. Three. Four. Five. Six. Seven. Eight."

Detection:
- No double newlines
- Heuristics fail (no line breaks)
- Text > 1000 chars

Action: Split into groups of 4 sentences

Output:
<p>One. Two. Three. Four.</p>
<p>Five. Six. Seven. Eight.</p>
```

---

## Decision Tree

```
Is text empty?
└─ YES → Show error
└─ NO → Continue

Has double newlines (\n\n)?
└─ YES → Use Strategy 1 (EASY MODE) ✅
└─ NO → Continue

Heuristic split produces ≥ 3 paragraphs?
└─ YES → Use Strategy 2 (HEURISTICS) ✅
└─ NO → Continue

Text length > 1000 chars?
└─ YES → Use Strategy 3 (AGGRESSIVE) ✅
└─ NO → Use Strategy 2 anyway (best effort)
```

---

## Edge Cases Handled

### Edge Case 1: All Caps Text
```
Input: "CHAPTER ONE\nTHE BEGINNING"

Problem: Capital detection fails

Solution: Check for "." not just capitals
```

### Edge Case 2: Quoted Dialogue
```
Input: "He said.\n"Hello," she replied."

Problem: Quote mark confuses capital detection

Solution: Regex includes quotes: /^[A-Z"']/
```

### Edge Case 3: Numbers Starting Lines
```
Input: "Sentence one.\n2nd paragraph."

Problem: Doesn't start with capital

Solution: Falls back to short line rule
```

### Edge Case 4: Very Short Text
```
Input: "Hi"

Problem: Not enough to split

Solution: Single <p> tag (graceful fallback)
```

### Edge Case 5: Novel-Length Text (100k+ words)
```
Problem: Performance issues?

Solution: 
- Efficient string operations
- No regex backtracking
- Linear time complexity O(n)
```

---

## Performance Characteristics

| Operation | Time Complexity | Space Complexity |
|-----------|----------------|------------------|
| Normalize line endings | O(n) | O(n) |
| Check double newlines | O(n) | O(1) |
| Strategy 1: Split | O(n) | O(n) |
| Strategy 2: Heuristics | O(n) | O(n) |
| Strategy 3: Aggressive | O(n) | O(n) |
| HTML escaping | O(n) | O(n) |
| **Total** | **O(n)** | **O(n)** |

Where `n` = text length in characters

**Result:** Handles 100,000+ word novels instantly! ⚡

---

## Why This Works for Safari Reader Mode

Safari Reader Mode looks for:

1. ✅ **Semantic HTML** - Uses `<p>` tags (not `<div>` or `<br>`)
2. ✅ **Proper nesting** - `<article>` → `<p>` structure
3. ✅ **CSS spacing** - `margin-bottom: 1.8em`
4. ✅ **No inline styles** - Clean, external CSS
5. ✅ **Text content** - No images/ads cluttering

Our algorithm produces **exactly** this structure! 🎯

---

## Testing the Algorithm

### Test Suite

```javascript
// Test 1: Perfect formatting
const test1 = "Para 1.\n\nPara 2.";
// Expected: 2 paragraphs (Strategy 1)

// Test 2: Single newlines
const test2 = "Para 1.\nPara 2.\nPara 3.";
// Expected: 3 paragraphs (Strategy 2)

// Test 3: No newlines
const test3 = "One. Two. Three. Four.";
// Expected: 1-2 paragraphs (Strategy 3)

// Test 4: Mixed formatting
const test4 = "Para 1.\n\nPara 2.\nPara 3.";
// Expected: 2 paragraphs (Strategy 1 handles \n\n, joins \n)

// Test 5: Empty text
const test5 = "";
// Expected: Error message

// Test 6: Novel length (10,000 words)
const test6 = generateNovel(10000);
// Expected: Proper pagination (no performance issues)
```

---

## Conclusion

This **multi-strategy approach** ensures that **no matter what formatting** comes from the copy button, your app will **always produce readable paragraphs**.

It's:
- 🛡️ **Robust** - Handles edge cases
- ⚡ **Fast** - Linear time complexity
- 🧠 **Smart** - Uses multiple strategies
- 🔒 **Secure** - XSS protection
- 📱 **Safari-optimized** - Perfect Reader Mode

**Copy any text. Paste anywhere. Read beautifully.** ✨

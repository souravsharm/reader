# 🧪 Quick Test: Dialogue & Scene Breaks

Copy and paste these test samples into your app to see the new features in action!

---

## TEST 1: Basic Dialogue Spacing

**Copy this:**
```
"Hello there," Emma said warmly. "Good morning," John replied. "How are you today?" she asked curiously.
```

**Expected Result:**
- 3 separate paragraphs
- Each quote on its own line
- Clear spacing between dialogue

---

## TEST 2: Scene Break Detection

**Copy this:**
```
Emma walked out of the room and closed the door.
...
The next morning, sunlight streamed through the window.
```

**Expected Result:**
- 2 paragraphs
- Visual scene break separator (★ ★ ★) between them
- Large vertical spacing

---

## TEST 3: Combined (Dialogue + Scene Break)

**Copy this:**
```
"I have to leave now," she said firmly. "When will you be back?" he asked worriedly. "I don't know," she whispered.
...
Three hours later, she arrived at the old mansion.
```

**Expected Result:**
- 3 dialogue paragraphs (separated)
- 1 scene break (visual separator)
- 1 narrative paragraph
- Total 5 elements with proper spacing

---

## TEST 4: Real Novel Example

**Copy this complete scene:**
```
The detective leaned back in his chair, studying the photograph intently. "This changes everything," he muttered under his breath. "What did you find?" Sarah asked, rushing to his side. "Look at the timestamp," he said, pointing at the corner of the image. "The victim was already dead when this was taken."

Sarah's eyes widened. "That means—" "It means our suspect has an alibi," he interrupted. "We've been chasing the wrong person this entire time."

...

Meanwhile, across town in a dimly lit warehouse, Marcus checked his watch nervously. The package should have arrived by now. He paced back and forth, his footsteps echoing in the empty space.

His phone buzzed. One new message: "It's done."

...

Back at the precinct, the detective picked up his phone. "We need to reopen this case," he said into the receiver. "I know who the real killer is."
```

**Expected Result:**
- Multiple separated dialogue lines
- 2 clear scene breaks (separating 3 different locations/times)
- Narrative paragraphs properly spaced
- Professional novel formatting
- Perfect for Safari Reader Mode!

---

## TEST 5: Stress Test (Many Quotes)

**Copy this:**
```
"One." "Two." "Three." "Four." "Five." "Six." "Seven." "Eight." "Nine." "Ten."
```

**Expected Result:**
- 10 separate paragraphs
- Each number on its own line
- Proper spacing throughout

---

## TEST 6: Multiple Scene Breaks

**Copy this:**
```
Chapter One: The Beginning

Emma opened the mysterious letter.

...

Two weeks earlier, the letter had been written.

...

Now, holding it in her hands, Emma finally understood.

...

Everything was about to change.
```

**Expected Result:**
- 4 narrative paragraphs
- 3 scene break separators
- Clear temporal shifts indicated visually

---

## Visual Guide: What You Should See

### Dialogue Formatting:
```
Before: "Quote one." "Quote two."

After:  "Quote one."
        
        "Quote two."
```

### Scene Break Formatting:
```
Before: Text before... Text after

After:  Text before
        
        ━━━━━━━━━━━
          * * *
        ━━━━━━━━━━━
        
        Text after
```

---

## How to Test:

1. **Start your app:** `npm start`
2. **Go to:** `http://localhost:3000`
3. **Copy any test above**
4. **Paste into textarea**
5. **Click "Read Text →"**
6. **Verify formatting**

### Success Criteria:

✅ Consecutive quotes are separated  
✅ Scene breaks show `* * *` symbol  
✅ Large spacing around scene breaks  
✅ Text is readable and well-formatted  
✅ Safari Reader Mode button appears (on mobile)  

---

## Troubleshooting:

### Issue: Quotes still together
**Fix:** Check browser console (F12) for errors. Refresh the page and try again.

### Issue: No scene breaks visible
**Fix:** Make sure the `...` is on its own line in your paste. Add newlines before/after if needed.

### Issue: Scene breaks look weird
**Fix:** Check that `styles.css` loaded properly (Network tab in DevTools).

---

## Quick Copy Test (All in One):

**Paste this complete example to test everything:**

```
The Midnight Meeting

"Are you sure about this?" Emma asked nervously. "I'm certain," replied the mysterious stranger. "But what if we're caught?" she whispered.

The stranger smiled in the darkness. "Trust me," he said softly.

...

Earlier that evening, Detective Morrison had received an anonymous tip. The warehouse on Fifth Street. Midnight. Come alone.

He checked his weapon. "This could be a trap," he muttered to himself.

...

Emma and the stranger reached the warehouse just as the clock struck twelve. "We're here," she said, her voice barely audible. "Now we wait," he responded calmly.

The sound of footsteps echoed in the distance. Someone was coming.

"Get down!" the stranger hissed urgently. "It's too late," Emma whispered back. "He's already seen us."

...

Detective Morrison stepped into the light, his gun drawn. "Nobody move," he commanded firmly.

The night was far from over.
```

**Expected Output:**
- 15+ separate elements (paragraphs + scene breaks)
- All dialogue properly separated
- 3 scene breaks creating 4 distinct sections
- Professional novel formatting
- Perfect readability

---

## Safari Reader Mode Test:

After pasting the test above:

1. Open on iPhone/iPad Safari
2. Tap the **aA** button in the address bar
3. Select "Show Reader View"
4. Verify:
   - ✅ Dialogue is still separated
   - ✅ Scene breaks are visible
   - ✅ Spacing is maintained
   - ✅ Text is beautifully formatted

---

**Your app now handles professional novel formatting!** 🎉📚

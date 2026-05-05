// ****** RIGHT-ALIGNED INCREASING STAR TRIANGLE ******

// "n" represents:
// - "total number of rows"
// - "total width of each row"
let n = 5;

// Outer loop → controls rows
// "Runs from 0 to n - 1"
for (let i = 0; i < n; i++) {

    // Start with an empty string for each row
    let row = "";

    // 1️⃣ Print spaces first (alignment logic)
    // Logic:
    // "Row 0 → n - 1 spaces"
    // "Row 1 → n - 2 spaces"
    // "Row 2 → n - 3 spaces"
    // So:
    // "Spaces = n - (i + 1)"
    for (let j = 0; j < n - (i + 1); j++) {
        row = row + "_";   // "_" used to visualize spaces
    }

    // 2️⃣ Print stars
    // Logic:
    // "Row 0 → 1 star"
    // "Row 1 → 2 stars"
    // "Row 2 → 3 stars"
    // So:
    // "Stars = i + 1"
    for (let k = 0; k <= i; k++) {
        row = row + "*";
    }

    // Print the completed row
    console.log(row);
}

/*
==================== SUMMARY ====================

Pattern Type:
- "Right-aligned increasing star triangle"

Visual Output (underscores = spaces):
____*
___**
__***
_****
*****

Meaning of "n":
- "n = total number of rows"
- "n = total width of each row"

-----------------------------------------------
CORE LOGIC BREAKDOWN:

Each row has TWO parts:
1️⃣ Spaces (for alignment)
2️⃣ Stars (actual pattern)

-----------------------------------------------
FORMULAS USED:

Spaces per row:
- "n - (i + 1)"

Stars per row:
- "i + 1"

-----------------------------------------------
WHY THIS WORKS:

- As row index (i) increases:
  → spaces decrease
  → stars increase

-----------------------------------------------
PATTERN CHEAT RULE 🔥

If pattern is RIGHT-ALIGNED:
- First print spaces
- Then print stars

-----------------------------------------------
INTERVIEW THINKING STEPS:

1) "How many rows?" → n
2) "Is it left or right aligned?" → right
3) "What decreases?" → spaces
4) "What increases?" → stars

-----------------------------------------------
GOLDEN RULE 🏆

Alignment patterns = spaces + stars

================================================
*/









// Note: FINAL SUMMARY

// space => j
// star => k

// 🔹 Why Stars = i + 1

// We start counting rows from i = 0
// But stars start from 1, not 0
// Stars = i + 1 => k<=i or k<i+1

// 🔹 Why Spaces = n - (i + 1)

// Total positions in each row = n
// Each row contains: spaces + stars = n
// We already know: stars = i + 1

// So
// spaces = n - stars
// spaces = n - (i + 1)
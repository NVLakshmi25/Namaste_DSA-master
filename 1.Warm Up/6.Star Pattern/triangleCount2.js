// ****** SAME NUMBER PER ROW TRIANGLE ******

// "n" represents:
// - "maximum value to be printed"
// - "controls total number of rows"
let n = 5;

// Outer loop → controls the number of rows
// "Runs from 0 to n"
for (let i = 0; i <= n; i++) {

    // Create an empty string for the current row
    // "Each row starts fresh"
    let row = "";

    // Inner loop → controls how many times the number is printed in a row
    // Logic:
    // "Row 0 → print 0 once"
    // "Row 1 → print 1 twice"
    // "Row 2 → print 2 three times"
    // So:
    // "Count per row = i + 1"
    for (let j = 0; j <= i; j++) {

        // Add the same number (i) to the row
        // "Value printed depends on row number"
        row = row + " " + i;
    }

    // Print the completed row
    // "One row printed per outer loop iteration"
    console.log(row);
}

/*
==================== SUMMARY ====================

Pattern Type:
- "Same number per row triangle"

Output:
 0
 1 1
 2 2 2
 3 3 3 3
 4 4 4 4 4
 5 5 5 5 5 5

Meaning of "n":
- "n = maximum number printed"
- "n = controls total rows"

Logic Rules:
- "Outer loop → controls rows"
- "Inner loop → controls count per row"
- "Inner loop depends on row index (i)"

Key Formula:
- "Numbers per row = i + 1"
- "Number printed = i"

Pattern Cheat Rule:
- "If value stays same across a row → print i"
- "If count increases row by row → use (i + 1)"

Interview Thinking:
1) "How many rows?" → n + 1
2) "What value to print?" → row index (i)
3) "How many times to print it?" → i + 1

Golden Rule:
- "Row index controls both value and count"

====================TRICKS============================

-----------------------------------------------
IMPORTANT TRICK (🔥 MEMORIZE THIS 🔥)

Think of patterns as TWO decisions:

1️⃣ WHAT value to print?
2️⃣ HOW MANY times to print it?

-----------------------------------------------
TRICK FORMULA:

- "i decides the VALUE"
- "j decides the COUNT"

-----------------------------------------------
APPLYING THE TRICK HERE:

Value to print:
- Same number across the row
→ use "i"

How many times:
- Increases row by row
→ use "i + 1"

-----------------------------------------------
GENERAL CHEAT TABLE:

Value Pattern              Use
--------------------------------
Same number per row     →  i
Increasing in row       →  j + 1
Decreasing in row       →  n - j
Stars only              →  "*"

Count Pattern              Use
--------------------------------
Increasing count        →  j <= i
Decreasing count        →  j < n - i
Fixed count             →  j < n

-----------------------------------------------
INTERVIEW GOLDEN RULE 🏆

"i controls WHAT to print"
"j controls HOW MANY times to print"

================================================
*/

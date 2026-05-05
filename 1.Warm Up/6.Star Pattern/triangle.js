// ****** INCREASING STAR TRIANGLE ******

// "n" represents:
// - "total number of rows"
// - "maximum number of stars in the last row"
let n = 4;

// Outer loop → controls number of rows
// "Runs from 0 to n - 1"
for (let i = 0; i < n; i++) {

    // Create an empty string for the current row
    // "Each row starts fresh"
    let row = "";

    // Inner loop → controls stars printed in the current row
    // Logic:
    // "Row 0 → 1 star"
    // "Row 1 → 2 stars"
    // "Row 2 → 3 stars"
    // So:
    // "Stars per row = i + 1"
    for (let j = 0; j < i + 1; j++) {

        // Add one star in each iteration
        // "One loop iteration = one star"
        row = row + " * ";
    }

    // Print the completed row
    // "One full row printed per outer loop iteration"
    console.log(row);
}

/*
==================== SUMMARY ====================

Pattern Type:
- "Increasing star triangle"

Output:
*
* *
* * *
* * * *

Meaning of "n":
- "n = total number of rows"
- "n = number of stars in the last row"

Logic Rules:
- "Outer loop → controls rows"
- "Inner loop → controls stars per row"
- "Inner loop depends on row index (i)"

Key Formula:
- "Stars per row = i + 1"

Equivalent Inner Loop Conditions:
- "j <= i"        → works
- "j < i + 1"     → works

Pattern Cheat Rule:
- "If elements increase row by row → use (i + 1)"

Interview Thinking:
1) "How many rows?" → n
2) "How many stars in the first row?" → 1
3) "How do stars change each row?" → increase by 1

Golden Rule:
- "Increasing pattern → depend on row index (i)"

================================================
*/

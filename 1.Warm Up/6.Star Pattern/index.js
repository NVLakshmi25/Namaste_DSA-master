// ****** GRID (SQUARE) PATTERN ******

// n represents:
// - total number of rows
// - total number of columns
let n = 4;

// Outer loop → controls the number of rows
// Runs n times → prints n rows
for (let i = 0; i < n; i++) {

    // Create an empty string for the current row
    // Must be inside the outer loop
    // so each row starts fresh
    let row = "";

    // Inner loop → controls number of stars in one row
    // Runs n times for every row
    // Inner loop does NOT depend on i
    // → star count is fixed for each row
    for (let j = 0; j < n; j++) {

        // Add one star to the row
        row = row + " * ";
    }

    // Print the completed row
    console.log(row);
}

/*
==================== SUMMARY ====================

Pattern Type:
- Grid / Square Pattern

Output Shape:
* * * *
* * * *
* * * *
* * * *

Logic Rules:
- Outer loop → controls rows
- Inner loop → controls columns (stars)
- Inner loop does NOT depend on i

Key Formula:
- Total rows        = n
- Stars per row     = n
- Total stars       = n × n

Pattern Cheat Rule:
- If inner loop condition uses a constant (j < n)
  → fixed pattern (grid / square)

Interview Thinking:
1) How many rows?        → n
2) How many stars/row?  → n
3) Does anything change?→ No

Golden Rule:
- No dependency between i and j → GRID PATTERN

================================================
*/

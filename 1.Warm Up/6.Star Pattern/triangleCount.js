// ****** INCREASING NUMBER TRIANGLE ******

// "n" represents:
// - "total number of rows"
// - "maximum count of numbers in the last row"
let n = 5;

// Outer loop → controls the number of rows
// "Runs from 0 to n - 1"
for (let i = 0; i < n; i++) {

    // Create an empty string for the current row
    // "Each row starts fresh"
    let row = "";

    // Inner loop → controls numbers printed in the current row
    // Logic:
    // "Row 0 → print 1 number"
    // "Row 1 → print 2 numbers"
    // "Row 2 → print 3 numbers"
    // So:
    // "Numbers per row = i + 1"
    for (let j = 0; j <= i; j++) {

        // Add numbers starting from 1
        // j starts from 0 → so use (j + 1)
        row = row + " " + (j + 1);
    }

    // Print the completed row
    // "One full row printed per outer loop iteration"
    console.log(row);
}

/*
==================== SUMMARY ====================

Pattern Type:
- "Increasing number triangle"

Output:
 1
 1 2
 1 2 3
 1 2 3 4
 1 2 3 4 5

Meaning of "n":
- "n = total number of rows"
- "n = maximum number printed in the last row"

Logic Rules:
- "Outer loop → controls rows"
- "Inner loop → controls numbers per row"
- "Inner loop depends on row index (i)"

Key Formula:
- "Numbers per row = i + 1"

Number Logic:
- "j starts from 0"
- "Use (j + 1) to print numbers from 1"

Pattern Cheat Rule:
- "If count increases row by row → use (i + 1)"

Interview Thinking:
1) "How many rows?" → n
2) "How many numbers in first row?" → 1
3) "How do numbers change each row?" → increase by 1

Golden Rule:
- "Increasing pattern → depend on row index (i)"

================================================
*/

// ****** DECREASING NUMBERS IN ROW PATTERN ******

// "n" represents:
// - "maximum number to print"
// - "starting value in each row"
let n = 5;

// Outer loop → controls rows
// "Rows decrease in length"
for (let i = 0; i < n; i++) {

    // Create empty string for the current row
    let row = "";

    // Inner loop → controls numbers in a row
    // Logic:
    // Row 0 → print 5 numbers
    // Row 1 → print 4 numbers
    // Row 2 → print 3 numbers
    // So:
    // "Count per row = n - i"
    for (let j = 0; j < n - i; j++) {

        // Print decreasing numbers
        // j starts from 0
        // Value = n - j
        row = row + " " + (n - j);
    }

    // Print the completed row
    console.log(row);
}

/*
==================== SUMMARY ====================

Pattern Type:
- "Decreasing numbers in a row"

Key Trick Used:
- "Decreasing in row → use (n - j)"

Logic Breakdown:
- Outer loop (i) → controls row count
- Inner loop (j) → controls column position

Value Logic:
- j = 0 → print n
- j = 1 → print n - 1
- j = 2 → print n - 2

So:
- "Value = n - j"

Count Logic:
- Numbers per row = n - i

-----------------------------------------------
IMPORTANT RULE (🔥 MEMORIZE 🔥)

If numbers DECREASE left to right
→ subtract column index
→ use (n - j)

-----------------------------------------------
INTERVIEW GOLDEN RULE 🏆

i → decides HOW MANY times
j → decides WHICH value

================================================
*/

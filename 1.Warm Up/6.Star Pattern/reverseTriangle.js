// ****** DECREASING NUMBER PATTERN ******

let n = 5; // Total number of rows

// Outer loop → controls the number of rows
// Runs from 0 to n-1
for (let i = 0; i < n; i++) {

    // Create an empty string for the current row
    let row = " ";

    // Inner loop → controls numbers printed in a row
    // Logic:
    // Row 0 → print n numbers
    // Row 1 → print n - 1 numbers
    // Row 2 → print n - 2 numbers
    // So count = n - i
    for (let j = 0; j < n - i; j++) {

        // Print numbers starting from 1
        // j starts from 0 → so use (j + 1)
        row = row + (j + 1);
    }

    // Print the completed row
    console.log(row);
}

/*
==================== SUMMARY ====================

Pattern Type:
- Decreasing number pattern

Output:
 12345
 1234
 123
 12
 1

Logic Rules:
- Outer loop → controls rows
- Inner loop → controls numbers per row
- Inner loop depends on (n - i) → decreasing pattern

Key Formula:
- Numbers per row = n - i

Number Logic:
- j starts from 0
- Use (j + 1) to print numbers from 1

Pattern Cheat Rule:
- If count decreases row by row → use (n - i)

Interview Thinking:
1) How many rows? → n
2) How many elements per row? → n - i
3) What values to print? → 1 to (n - i)

Golden Rule:
- Decreasing pattern → subtract row index from total

================================================
*/

console.log("################## <= DECREASING STAR TRIANGLE => ########################")
// ****** DECREASING STAR TRIANGLE ******

// "num" represents:
// - "total number of rows"
// - "maximum number of stars in the first row"
let num = 5;

// Outer loop → controls number of rows
// i goes from 0 to num - 1
// "Runs exactly 'num' times"
for (let i = 0; i < num; i++) {

    // Create an empty string for the current row
    // "Each row starts fresh"
    let row = "";

    // Inner loop → controls stars printed in each row
    // Logic:
    // "Row 0 → num stars"
    // "Row 1 → num - 1 stars"
    // "Row 2 → num - 2 stars"
    // So:
    // "Stars per row = num - i"
    for (let j = 0; j < num - i; j++) {

        // Add one star to the row
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
- "Decreasing star triangle"

Output:
* * * * *
* * * *
* * *
* *
*

Meaning of "num":
- "num = total number of rows"
- "num = number of stars in the first row"

Logic Rules:
- "Outer loop → rows"
- "Inner loop → stars per row"
- "Inner loop depends on (num - i)"

Key Formula:
- "Stars per row = num - i"

Pattern Cheat Rule:
- "If elements decrease row by row → use (n - i)"

Interview Thinking:
1) "How many rows?" → num
2) "How many stars in the first row?" → num
3) "How do stars change each row?" → decrease by 1

Golden Rule:
- "Decreasing pattern → subtract row index from total"

================================================
*/

// ****** 0-1 TOGGLE TRIANGLE PATTERN ******

let n = 5; // Total number of rows

// Outer loop → controls the number of rows
// Runs from 0 to n-1
for (let i = 0; i < n; i++) {

    // Create an empty string for the current row
    let row = "";

    // Toggle variable to alternate between 1 and 0
    // Every row starts with 1
    let toggle = 1;

    // Inner loop → controls number of elements in the row
    // Runs (i + 1) times → increasing pattern
    for (let j = 0; j <= i; j++) {

        // Add the current toggle value to the row
        row = row + toggle;

        // Flip the toggle value
        // If 1 → make it 0
        // If 0 → make it 1
        if (toggle == 1) {
            toggle = 0;
        } else {
            toggle = 1;
        }
    }

    // Print the completed row
    console.log(row);
}

/*
==================== SUMMARY ====================

Pattern Type:
- Increasing triangle with alternating 0 and 1

Output:
1
10
101
1010
10101

Logic Rules:
- Outer loop → controls rows
- Inner loop → controls elements per row
- Inner loop depends on i → increasing pattern

Key Formula:
- Elements per row = i + 1

Toggle Logic:
- Start each row with toggle = 1
- After printing each value, flip it:
  1 → 0
  0 → 1

Pattern Cheat Rule:
- If inner loop uses j <= i → increasing triangle
- If values alternate → use a toggle variable

Interview Thinking:
1) How many rows? → n
2) How many elements per row? → i + 1
3) How do values change? → alternate (toggle)

Golden Rule:
- When values alternate, use a toggle variable

================================================
*/

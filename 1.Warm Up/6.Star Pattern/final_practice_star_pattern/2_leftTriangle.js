let n = 5; // total number of rows

// Outer loop → controls how many rows will be printed
// i starts from 0 and goes up to n
for (let i = 0; i <= n; i++) {

    let count = ""; // empty string for the current row

    // Inner loop → controls number of stars in each row
    // Logic:
    // Row 0 → 0 stars
    // Row 1 → 1 star
    // Row 2 → 2 stars
    // ...
    // So number of stars = i
    for (let j = 0; j < i; j++) {

        // Add one star to the current row
        count = count + " * ";

        // Debug idea (optional):
        // Shows which row (i) and column (j) is running
        // count = count + " * " + i + " " + j;
    }

    // Print the completed row
    console.log(count);
}

// OUTPUT

//  * 1 j
//  * 2 j * 2 j
//  * 3 j * 3 j * 3 j
//  * 4 j * 4 j * 4 j * 4 j
//  * 5 j * 5 j * 5 j * 5 j * 5 j


// Pattern logic cheat sheet 🧠

// | Pattern type | Inner loop condition |
// | ------------ | -------------------- |
// | Increasing   | `j < i`              |
// | Decreasing   | `j < n - i`          |
// | Full square  | `j < n`              |


// One-line logic rule 🔥

// If something increases row by row → use i
// If something decreases row by row → use n - i
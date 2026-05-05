let n = 5; // total number of rows and columns

// Outer loop → controls the number of rows
// Runs n times → 5 rows
for (let i = 0; i < n; i++) {

    let count = ""; // empty string for each row

    // Inner loop → controls the number of stars in each row
    // Runs n times for every row
    // So each row will have exactly n stars
    for (let j = 0; j < n; j++) {

        // Add one star to the current row
        count = count + " * ";

        // Debug idea (optional):
        // Shows current row (i) and column (j)
        // count = count + " * " + i + " " + j;
    }

    // Print the completed row
    console.log(count);
}

// OUTPUT

//  *  *  *  *  * 
//  *  *  *  *  * 
//  *  *  *  *  *
//  *  *  *  *  *
//  *  *  *  *  *


// Logic-building thinking process

// 1️⃣ Outer loop → Rows
// Runs n times → number of lines

// 2️⃣ Inner loop → Columns
// Always runs n times
// No increase or decrease → fixed value

// 3️⃣ Why j < n?
// Because every row needs the same number of stars

// ********************

// Pattern logic cheat sheet 🔥

// | Pattern type   | Inner loop condition |
// | -------------- | -------------------- |
// | Fixed (square) | `j < n`              |
// | Increasing     | `j < i`              |
// | Decreasing     | `j < n - i`          |

// ***************************

// One-line rule (memorize this)

// If nothing changes per row → use n
// If something increases → use i
// If something decreases → use n - i
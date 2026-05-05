// let n = 5;

// for(let i=0; i<n; i++){
//     let count = "";
//     for(let j=n-i; j>0; j--){
//         count = count + " * "
//     }
//     console.log(count)
// }

// ***********OR************

let n = 5; // total number of rows to print

// Outer loop → controls the number of rows
for (let i = 0; i < n; i++) {

    let count = ""; // empty string for each row

    // Inner loop → controls number of stars in each row
    // Logic:
    // Row 0 → n stars
    // Row 1 → n - 1 stars
    // Row 2 → n - 2 stars
    // So stars = n - i
    for (let j = 0; j < n - i; j++) {

        // Add one star to the current row
        count = count + " * ";
    }

    // Print the completed row
    console.log(count);
}


// OUTPUT

//  *  *  *  *  * 
//  *  *  *  * 
//  *  *  *
//  *  *
//  *


// Outer loop  → number of rows
// Inner loop  → number of columns (stars)
// n - i       → use when values decrease each row

// **********

// How to think while building logic (IMPORTANT)

// Ask these 3 questions:

// 1️⃣ How many rows? → n
// 2️⃣ What changes every row? → stars decrease
// 3️⃣ By how much? → 1 each row → n - i


// Interview tip 🔥

// If the pattern shrinks → use n - i
// If the pattern grows → use i + 1
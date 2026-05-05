// ****** FIND SECOND LARGEST ELEMENT IN ARRAY ******

// Function to find the second largest number in an array
function secondLargest(arr) {

    // "FirstLargest" stores the largest value found so far
    // Initialized to -Infinity to handle:
    // - negative numbers
    // - mixed values
    let FirstLargest = -Infinity;

    // "secondLargest" stores the second largest value
    let secondLargest = -Infinity;

    // Loop through the array from index 0 to last index
    for (let i = 0; i < arr.length; i++) {

        // Case 1:
        // If current element is greater than FirstLargest
        if (arr[i] > FirstLargest) {

            // Previous largest becomes second largest
            secondLargest = FirstLargest;

            // Update the largest value
            FirstLargest = arr[i];
        }

        // Case 2:
        // If current element is:
        // - smaller than FirstLargest
        // - but greater than secondLargest
        // - and NOT equal to FirstLargest (to handle duplicates)
        else if (arr[i] > secondLargest && arr[i] != FirstLargest) {

            // Update second largest value
            secondLargest = arr[i];
        }
    }

    // Return the second largest number
    return secondLargest;
}


// Example array (contains duplicate values)
let arr = [4, 9, 9, 0, 2, 8, 7, 1];

// Function call
const result = secondLargest(arr);

// Print result
console.log(result); // Output: 8

/*
==================== SUMMARY ====================

Problem Type:
- "Find second largest element in an array"

What the function does:
- Traverses the array once
- Tracks the largest and second largest values
- Returns the second largest number

Meaning of variables:
- "FirstLargest"  → largest value found so far
- "secondLargest" → second largest value found so far
- "i"             → current index

Why initialize with -Infinity?
- Works for:
  - all negative arrays
  - mixed arrays
- Safer than using 0 or -1

Logic Rules:
- If value > FirstLargest:
  → shift FirstLargest to secondLargest
- Else if value < FirstLargest AND value > secondLargest:
  → update secondLargest
- Ignore duplicate largest values

Duplicate Handling:
- arr[i] != FirstLargest
- Ensures second largest is a DIFFERENT value

Algorithm Idea:
- Single pass comparison
- No sorting required

Time Complexity:
- O(n) → array traversed once

Space Complexity:
- O(1) → no extra space used

Interview Thinking Steps:
1️⃣ "Do I need sorting?" → No
2️⃣ "How many values to track?" → two (largest & second largest)
3️⃣ "How to update?" → shift values when a larger one appears
4️⃣ "What about duplicates?" → ignore same largest values

Golden Rule 🏆:
- "Track first and second values together in one pass"

================================================
*/

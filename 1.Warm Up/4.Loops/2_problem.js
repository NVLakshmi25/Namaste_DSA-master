// ****** COUNT NEGATIVE NUMBERS ******

// Function that counts how many negative numbers
// are present in an array
function countNegatives(arr) {

    // Variable to store count of negative numbers
    // "Starts from 0 because no elements checked yet"
    let count = 0;

    // Loop through the array from index 0 to last index
    // "i represents the current index"
    for (let i = 0; i < arr.length; i++) {

        // Check if the current element is negative
        if (arr[i] < 0) {

            // If condition is true, increase the count
            // "One negative number found"
            count = count + 1; // same as count++
        }
    }

    // After checking all elements,
    // return the total count of negative numbers
    return count;
}

// Array containing positive, negative, and zero values
let arr = [2, -9, 17, 0, -1, -10, -4, 8];

// Function call
const results = countNegatives(arr);

// Print the result
console.log(results); // Output: 4

/*
==================== SUMMARY ====================

Problem Type:
- "Count elements based on a condition"

What the function does:
- Traverses the array
- Counts how many values are less than 0
- Returns the total count

Meaning of variables:
- "arr"   → input array
- "i"     → current index
- "count" → number of negative elements found

Logic Rules:
- Start count from 0
- Check each element one by one
- Increase count only when condition is true

Why use arr[i] < 0?
- Any value less than 0 is negative
- Zero (0) is neither positive nor negative

Algorithm Idea:
- Simple linear traversal
- No sorting or extra data structures required

Time Complexity:
- O(n) → each element is checked once

Space Complexity:
- O(1) → no extra space used

Interview Thinking Steps:
1️⃣ "What needs to be counted?" → negative numbers
2️⃣ "How to check?" → arr[i] < 0
3️⃣ "How many passes?" → one full pass

Golden Rule 🏆:
- "When checking every element → use a single loop"

================================================
*/

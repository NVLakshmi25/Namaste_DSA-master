// ****** FIND LARGEST ELEMENT IN ARRAY ******


// Write a function that returns the largest number in an array


function findLargest(arr){

    // IMPORTANT:
    // Initialize "largest" with the FIRST element of the array
    // This works for:
    // - positive numbers
    // - negative numbers
    // - mixed numbers

    // let largest = -1;
    // let largest = -Infinity;

    // Best approach:
    let largest = arr[0]

    // Loop through the array from index 0 to last index
    // "i represents the current index"
    for(let i=0; i<arr.length; i++){

          // Compare current element with largest value found so far
        if(arr[i]>largest){

            // Update largest when a bigger value is found
            largest = arr[i]; 
        }
    }

    // After checking all elements,
    // return the largest value
    return largest
}

// let arr = [5, 0, 7, 10, 8, 17, 1];

// Example array (all negative numbers)
let arr = [-19, -7, -3];

// Function call
let result = findLargest(arr);

// Print the result
console.log(result) // Output: -3



/*
==================== SUMMARY ====================

Problem Type:
- "Find maximum element in an array"

What the function does:
- Traverses the array
- Keeps track of the largest value seen so far
- Returns the largest element

Meaning of variables:
- "arr"     → input array
- "largest" → stores the current maximum value
- "i"       → current index

Why initialize largest = arr[0] ?
- Handles all-negative arrays correctly
- Avoids wrong results from using 0 or -1
- Safe and recommended approach

❌ Wrong approaches:
- largest = 0        → fails for all-negative arrays
- largest = -1       → fails if all values < -1

✔ Correct approaches:
- largest = arr[0]
- largest = -Infinity

Logic Rules:
- Start with a valid array value
- Compare each element one by one
- Update largest only when a bigger value is found

Algorithm Idea:
- Linear traversal
- Single comparison per element

Time Complexity:
- O(n) → each element checked once

Space Complexity:
- O(1) → no extra space used

Interview Thinking Steps:
1️⃣ "What do I need?" → largest value
2️⃣ "Where to start?" → first element
3️⃣ "How to compare?" → arr[i] > largest
4️⃣ "When to update?" → when condition is true

Golden Rule 🏆:
- "Initialize with first element when finding max/min"

================================================
*/
// Write a function that searches for an element in an array and returns the index, 
// if the element is not present then just return -1

// ****** LINEAR SEARCH FUNCTION ******

// Function that searches for an element in an array
// Returns the index if found
// Returns -1 if element is not present
function searchElement(arr, x) {

    // Loop through the array from index 0 to last index
    // "i represents the current index"
    for (let i = 0; i < arr.length; i++) {

        // Check if current element matches the target value x
        if (arr[i] == x) {

            // Element found
            // Return the index immediately
            return i;
        }
    }

    // If loop finishes and no match is found
    // Return -1 to indicate "element not present"
    return -1;
}

// Array declaration
let arr = [4, 2, 0, 10, 8, 30];

// Example function calls
// searchElement(arr, 4)  → 0
// searchElement(arr, 10) → 3
// searchElement(arr, 49) → -1

// Function calls
let value  = searchElement(arr, 4);
let value1 = searchElement(arr, 10);
let value2 = searchElement(arr, 49);

// Print results
console.log(value);   // 0
console.log(value1);  // 3
console.log(value2);  // -1

/*
==================== SUMMARY ====================

Problem Type:
- "Linear Search"

What the function does:
- Searches for a value (x) in an array
- Returns the INDEX if found
- Returns -1 if not found

Meaning of variables:
- "arr" → array in which we search
- "x"   → value to search for
- "i"   → current index during traversal

Logic Rules:
- Start searching from index 0
- Compare each element with x
- Stop immediately when match is found

Why return -1?
- -1 is a standard value meaning "not found"
- Valid array indices are always >= 0

Key Algorithm Idea:
- Check elements ONE BY ONE
- No assumptions about sorting

Time Complexity:
- Best case  → O(1)  (element found at start)
- Worst case → O(n)  (element at end or not present)

Space Complexity:
- O(1) (no extra space used)

Interview Thinking Steps:
1️⃣ "Do I need the index?" → Yes
2️⃣ "Is array sorted?" → No assumption
3️⃣ "Compare one by one" → Linear search

Golden Rule 🏆:
- "If array is unsorted → use linear search"

================================================
*/

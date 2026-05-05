// REMOVE DUPLICATES FROM SORTED ARRAY

let nums = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6];

function removeDuplicate() {

    // Pointer x tracks the position of last unique element
    let x = 0;

    // Loop through the array
    for (let i = 0; i < nums.length; i++) {

        /*
        Since array is sorted:
        - If nums[i] > nums[x], it means we found a NEW unique value
        */
        if (nums[i] > nums[x]) {

            // Move unique pointer forward
            x = x + 1;

            // Place the new unique value at position x
            nums[x] = nums[i];
        }
    }

    // x is index (0-based), so length = x + 1
    return x + 1;
}

// Function call
let k = removeDuplicate();

// Output results
console.log(k);                 // Number of unique elements
console.log(nums.slice(0, k));  // Unique elements only


/*
==================== COMMENTED SUMMARY ====================

Problem:
- Remove duplicates from a SORTED array in-place
- Return the count of unique elements

Approach:
- Two Pointer Technique

Pointers:
- i → fast pointer (scans array)
- x → slow pointer (tracks unique position)

Core Logic:
- Compare nums[i] with nums[x]
- If nums[i] > nums[x]:
    → New unique element found
    → Move x forward
    → Overwrite nums[x] with nums[i]

Why it works:
- Array is sorted
- Duplicates are adjacent
- Greater value always means a new unique number

Return:
- x + 1 because x is index (0-based)

Time Complexity:
- O(n) → single loop

Space Complexity:
- O(1) → in-place, no extra array

Interview Golden Rule 🏆:
"If array is sorted → use Two Pointers"

One-line Memory Trick 🧠:
"Compare, move pointer, overwrite duplicates"

================================================
*/

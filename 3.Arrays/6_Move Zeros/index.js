let nums = [0, 1, 0, 3, 12];

function moveZeros(nums) {

    // x → pointer to place next NON-zero element
    let x = 0;

    // First pass:
    // Move all non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {

        // If current element is NOT zero
        if (nums[i] !== 0) {

            // Place it at index x
            nums[x] = nums[i];

            // Move pointer forward
            x++;
        }
    }

    /*
    After first loop:
    nums looks like → [1, 3, 12, ?, ?]
    x = number of non-zero elements
    */

    // Second pass:
    // Fill remaining positions with zero
    for (let i = x; i < nums.length; i++) {
        nums[i] = 0;
    }

    // Array modified in-place
    return nums;
}

// Function call
console.log(moveZeros(nums)); // [1, 3, 12, 0, 0]


/*
==================== COMMENTED SUMMARY ====================

Problem:
- Move all zeros to the end of the array
- Maintain relative order of non-zero elements
- Modify array in-place

Approach:
- Two Pointer Technique

Pointers:
- i → scans the array
- x → tracks position for non-zero elements

Core Logic:
1️⃣ First loop:
    - Copy all non-zero values to the front
    - Maintain original order
2️⃣ Second loop:
    - Fill remaining positions with zeros

Why it works:
- Non-zero elements are shifted left
- Zeros are pushed to the end
- Order of non-zero elements remains unchanged

Time Complexity:
- O(n) → two linear passes

Space Complexity:
- O(1) → in-place, no extra array

Interview Golden Rule 🏆:
"Stable movement → two pointers"

One-line Memory Trick 🧠:
"Push non-zeros forward, fill rest with zeros"

================================================
*/

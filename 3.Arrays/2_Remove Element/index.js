function removeElement(nums, val) {

    // x → pointer for placing elements that are NOT equal to val
    let x = 0;

    // i → scans each element of the array
    for (let i = 0; i < nums.length; i++) {

        /*
        If current element is NOT the value to remove:
        - Keep it
        - Place it at index x
        */
        if (nums[i] !== val) {

            nums[x] = nums[i]; // overwrite unwanted values
            x = x + 1;         // move pointer forward
        }
    }

    // x is the count of elements that are NOT equal to val
    return x;
}

// Input array
let nums = [3, 1, 3, 4, 3, 3, 3, 7];

// Remove all occurrences of 3
let results = removeElement(nums, 3);

// Output
// Print count of valid elements
console.log(results); // 3


/*
IMPORTANT 🔥
The array is modified IN-PLACE.

Only the first `results` elements are valid.
Elements after index (results - 1) are ignored / garbage.
*/

// slice(0, results):
// - Takes elements from index 0
// - Stops before index = results
// - Returns ONLY the valid part of the array
// - Does NOT modify the original array
console.log(nums.slice(0, results)); // [1, 4, 7]

/*
==================== COMMENTED SUMMARY ====================

Problem:
- Remove all occurrences of a given value from the array
- Modify the array in-place
- Return the number of remaining elements

Approach:
- Two Pointer Technique

Pointers:
- i → fast pointer (scans array)
- x → slow pointer (tracks position for valid elements)

Core Logic:
- If nums[i] !== val:
    → Keep the element
    → Place it at nums[x]
    → Increment x

Why it works:
- Elements to remove are skipped
- Valid elements are shifted to the front
- Order of remaining elements is preserved

Return Value:
- x represents number of valid elements

Time Complexity:
- O(n) → single pass through array

Space Complexity:
- O(1) → in-place modification

Interview Golden Rule 🏆:
"Filter elements in-place using two pointers"

One-line Memory Trick 🧠:
"Skip val, keep others, shift left"

================================================
*/

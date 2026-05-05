let nums = [-1, 0, 3, 5, 9, 12];
let target = 9;

function binarySearch(nums, target) {
    // Initialize pointers
    let left = 0;
    let right = nums.length - 1;

    // Continue searching while the range is valid
    while (right >= left) {
        // Find middle index
        let middle = Math.floor((left + right) / 2);

        // If target is found at middle
        if (target === nums[middle]) {
            return middle;
        }
        // If target is smaller, search left half
        else if (target < nums[middle]) {
            right = middle - 1;
        }
        // If target is larger, search right half
        else {
            left = middle + 1;
        }
    }

    // If target is not found
    return -1;
}

// Function call
console.log(binarySearch(nums, target));

/*
==================== COMMENTED SUMMARY ====================

1. This program performs BINARY SEARCH on a sorted array.

2. Binary search works by repeatedly dividing the search
   range into two halves.

3. The array MUST be sorted for binary search to work.

4. Two pointers are used:
   - left  → start of the array
   - right → end of the array

5. In each iteration:
   - middle index is calculated
   - target is compared with nums[middle]

6. If target == nums[middle]:
   → return the index

7. If target < nums[middle]:
   → search left half (right = middle - 1)

8. If target > nums[middle]:
   → search right half (left = middle + 1)

9. If the target is not found:
   → return -1

10. For the given input:
    Array  = [-1, 0, 3, 5, 9, 12]
    Target = 9
    Output = 4

11. Time Complexity:
    - Best case: O(1)
    - Worst case: O(log n)

=========================================================
*/
let arr = [5, 4, 9, 15, 7, 1, 0];

function bubbleSort(arr) {
    let n = arr.length;

    // Outer loop for number of passes
    for (let i = 0; i < n - 1; i++) {
        // Flag to check if any swapping happened
        let isSwapped = false;

        // Inner loop for pairwise comparison
        // After each pass, the largest element moves to the end
        for (let j = 0; j < n - 1 - i; j++) {
            // Swap if elements are in wrong order
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                // Mark that a swap occurred
                isSwapped = true;
            }
        }

        // If no swaps happened, array is already sorted
        if (!isSwapped) break;
    }

    // Return the sorted array
    return arr;
}

// Function call
let result = bubbleSort(arr);
console.log(result);

/*
==================== COMMENTED SUMMARY ====================

1. This program sorts an array using BUBBLE SORT.

2. Bubble sort works by repeatedly comparing
   adjacent elements and swapping them if needed.

3. After each pass:
   - The largest element "bubbles" to the end.

4. Optimization used:
   - 'isSwapped' flag stops the algorithm early
     if the array becomes sorted before all passes.

5. Number of loops:
   - Outer loop → passes
   - Inner loop → comparisons and swaps

6. For the given array:
   [5, 4, 9, 15, 7, 1, 0]

7. Sorted result:
   [0, 1, 4, 5, 7, 9, 15]

8. Time Complexity:
   - Best case: O(n)   (already sorted)
   - Worst case: O(n²)

9. Space Complexity:
   - O(1) (in-place sorting)

=========================================================
*/
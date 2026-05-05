let arr = [7, 1, 5, 12, -10, 0, 4, 3, 2];

function insertionSort(a) {
    let n = a.length;

    // Start from index 1 because index 0 is already sorted
    for (let i = 1; i < n; i++) {
        // Current element to be inserted
        let curr = a[i];
        let prev = i - 1;

        // Shift elements of the sorted part
        // that are greater than curr
        while (prev >= 0 && a[prev] > curr) {
            a[prev + 1] = a[prev];
            prev--;
        }

        // Insert curr at the correct position
        a[prev + 1] = curr;
    }

    return a;
}

let result = insertionSort(arr);
console.log(result);

/*
==================== COMMENTED SUMMARY ====================

1. Insertion sort builds the sorted array one element at a time.

2. OUTER FOR LOOP:
   for (i = 1 to n-1)
   - Starts from index 1
   - Index 0 is already considered sorted

3. CURRENT ELEMENT:
   curr = a[i]
   - Element that needs to be inserted
     into the sorted part

4. PREV VARIABLE:
   prev = i - 1
   - Used to compare elements on the left side

5. WHILE LOOP CONDITION:
   while (prev >= 0 && a[prev] > curr)

   a) prev >= 0
      - Stops when start of array is reached
      - Prevents invalid index access

   b) a[prev] > curr
      - Shifts larger elements to the right
      - Creates correct position for curr

6. INSERTION STEP:
   a[prev + 1] = curr
   - Places the element at its correct position

7. Final result:
   Sorted array in ascending order.

8. Time Complexity:
   - Best case: O(n)
   - Worst case: O(n²)

9. Space Complexity:
   - O(1) (in-place)

=========================================================
*/
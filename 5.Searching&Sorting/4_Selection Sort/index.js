let arr = [7, 1, 5, 12, -10, 0, 4, 3, 2];

function selectionSort(a) {
    let n = a.length;

    // Outer loop: controls number of passes
    for (let i = 0; i < n - 1; i++) {
        let min = i;

        // Inner loop: finds minimum element
        // in the unsorted part of the array
        for (let j = i + 1; j < n; j++) {
            if (a[j] < a[min]) {
                min = j;
            }
        }

        // Swap only if a smaller element is found
        if (min != i) {
            let temp = a[i];
            a[i] = a[min];
            a[min] = temp;
        }
    }

    return a;
}

console.log(selectionSort(arr));

/*
==================== COMMENTED SUMMARY ====================

1. Selection sort uses TWO for loops.

2. OUTER LOOP:
   for (let i = 0; i < n - 1; i++)
   - Controls the number of passes
   - Runs only n-1 times because
     the last element is automatically sorted

3. INNER LOOP:
   for (let j = i + 1; j < n; j++)
   - Starts from the next element
   - Searches for the minimum element
     in the UNSORTED part of the array
   - Avoids checking already sorted elements

4. Variable 'min':
   - Stores index of smallest element found

5. Condition:
   if (min != i)
   - Swap only when the minimum element
     is at a different index

6. Each pass places ONE element
   at its correct sorted position.

7. Result:
   Sorted array in ascending order.

=========================================================
*/
let nums = [5, 2, 3, 1];

// Main merge sort function
function mergeSort(arr){

    // BASE CONDITION:
    // If the array has 0 or 1 element,
    // it is already sorted, so return it
    if(arr.length <= 1) return arr;

    // Find the middle index of the array
    let mid = Math.floor(arr.length / 2);

    // Recursively sort the left half
    // arr.slice(0, mid) creates a new array
    // from index 0 to mid-1
    let left = mergeSort(arr.slice(0, mid));

    // Recursively sort the right half
    // arr.slice(mid) creates a new array
    // from mid to the end
    let right = mergeSort(arr.slice(mid));

    // Merge the two sorted halves
    // and return the sorted result
    return merge(left, right);
}

// Function to merge two sorted arrays
function merge(left, right){

    // Array to store merged result
    let res = [];

    // Pointers for left and right arrays
    let i = 0;
    let j = 0;

    // Compare elements from both arrays
    // until one array is exhausted
    while(i < left.length && j < right.length){

        // If left element is smaller,
        // add it to result and move pointer
        if(left[i] < right[j]){
            res.push(left[i]);
            i++;
        }
        // Otherwise, add right element
        else{
            res.push(right[j]);
            j++;
        }
    }

    // Add remaining elements from left or right
    // (only one side will have remaining elements)
    return [...res, ...left.slice(i), ...right.slice(j)];
}

// Function call
console.log(mergeSort(nums));


/*
==================== COMMENTED SUMMARY ====================

1. Merge Sort uses the DIVIDE AND CONQUER technique.

2. Base condition:
   if (arr.length <= 1)
   - Stops recursion
   - Single element array is already sorted

3. Divide step:
   - Array is divided into two halves using mid
   - Left half: arr.slice(0, mid)
   - Right half: arr.slice(mid)

4. Conquer step:
   - mergeSort is called recursively on both halves
   - Each half becomes sorted individually

5. Merge step:
   - merge(left, right) combines two sorted arrays
   - Smaller elements are added first

6. While loop condition:
   while (i < left.length && j < right.length)
   - Ensures safe comparison
   - Stops when one array is exhausted

7. Remaining elements:
   - Added at the end because they are already sorted

8. For input:
   [5, 2, 3, 1]

9. Output:
   [1, 2, 3, 5]

10. Time Complexity:
    - O(n log n)

11. Space Complexity:
    - O(n)

=========================================================
*/

/*
==================== COMMENTED SUMMARY ====================

1. `return merge(left, right);` is a FUNCTION CALL
   (function invocation) in JavaScript.

2. merge() is a HELPER FUNCTION used by mergeSort().

3. The value returned by merge() is directly
   returned by mergeSort().

4. This is an example of FUNCTION COMPOSITION,
   where one function uses another function's output.

5. The returned value travels up the CALL STACK
   during recursion.

6. This is NOT a callback or higher-order function.

=========================================================
*/
let arr = [4, 9, 1, 0, 2, 10];

function linearSearch(arr, target) {
    // Loop through each element of the array
    for (let i = 0; i < arr.length; i++) {
        // Check if current element matches the target
        if (arr[i] === target) {
            // If found, return its index
            return i;
        }
    }
    // If target is not found, return -1
    return -1;
}

// Function call
let result = linearSearch(arr, 10);
console.log(result);

/*
==================== COMMENTED SUMMARY ====================

1. This program performs LINEAR SEARCH on an array.

2. Linear search checks each element one by one
   from the beginning of the array.

3. The function 'linearSearch' takes:
   - arr → the array to search in
   - target → the value to find

4. The loop compares each array element with the target.

5. If the target is found:
   - The index of the element is returned immediately.

6. If the loop ends and the target is not found:
   - The function returns -1.

7. For the given input:
   Array  = [4, 9, 1, 0, 2, 10]
   Target = 10

8. Target is found at index:
   5

9. Time Complexity:
   - Best case: O(1)
   - Worst case: O(n)

=========================================================
*/
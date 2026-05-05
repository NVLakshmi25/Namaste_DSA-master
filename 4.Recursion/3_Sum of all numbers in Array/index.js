let arr = [5, 3, 2, 0, 1];

function sum(n){
    // Base condition:
    // When index reaches 0, return the first element
    if (n == 0) return arr[n];

    // Recursive call:
    // Add current element to the sum of previous elements
    return arr[n] + sum(n - 1);
}

// Start recursion from last index
console.log(sum(arr.length - 1));

/*
==================== COMMENTED SUMMARY ====================

1. This program finds the sum of all elements in an array
   using recursion.

2. The function 'sum' takes an index value 'n'
   and starts from the last index of the array.

3. Base condition:
   if (n == 0) return arr[0];
   stops further recursive calls.

4. Recursive formula:
   sum(n) = arr[n] + sum(n - 1)

5. Order of execution:
   sum(4) → sum(3) → sum(2) → sum(1) → sum(0)

6. Values added:
   1 + 0 + 2 + 3 + 5 = 11

7. Final output:
   11

8. Because of the base condition:
   ✅ Safe recursion
   ✅ No infinite loop or stack overflow

=========================================================
*/
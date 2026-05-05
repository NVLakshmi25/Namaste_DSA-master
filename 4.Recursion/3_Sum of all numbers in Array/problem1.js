// sum of only ODD numbers in an array using recursion.

let arr = [5, 2, 0, 3, 6, 1];

function sum(n) {
    // Check if the current element is odd
    let isOdd = (arr[n] % 2 !== 0);

    // Base condition:
    // When index reaches 0
    if (n == 0) {
        // If first element is odd, return it
        if (isOdd) {
            return arr[n];
        } else {
            // If even, return 0
            return 0;
        }
    }

    // If current element is odd, add it to the sum
    if (isOdd) {
        return arr[n] + sum(n - 1);
    } else {
        // If even, skip it and continue recursion
        return 0 + sum(n - 1);
    }
}

// Start recursion from last index
console.log(sum(arr.length - 1));

/*
==================== COMMENTED SUMMARY ====================

1. This program calculates the sum of ONLY ODD numbers
   in an array using recursion.

2. The function 'sum' works from the last index
   towards the first index.

3. For each element:
   - If the element is odd → add it
   - If the element is even → ignore it

4. Base condition:
   When n == 0, the function stops recursion.

5. Recursive calls follow this order:
   sum(5) → sum(4) → sum(3) → sum(2) → sum(1) → sum(0)

6. Odd elements in the array:
   5, 3, 1

7. Calculation:
   5 + 3 + 1 = 9

8. Final output:
   9

9. Because of the base condition:
   ✅ Safe recursion
   ✅ No infinite recursion

=========================================================
*/
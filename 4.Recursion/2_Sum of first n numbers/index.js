function sum(n) {
    // Base condition:
    // If n is 0, return 0 (no numbers left to add)
    if (n === 0) return 0;

    // Recursive case:
    // Add current n to the sum of (n - 1)
    return n + sum(n - 1);
}

// Function call
console.log(sum(5));

/*
==================== SUMMARY ====================

1. This function calculates the sum of the first n natural numbers
   using recursion.

2. Base condition:
   if (n === 0) return 0;
   stops the recursion.

3. Recursive relation:
   sum(n) = n + sum(n - 1)

4. Recursive calls look like:
   sum(5)
   = 5 + sum(4)
   = 5 + 4 + sum(3)
   = 5 + 4 + 3 + sum(2)
   = 5 + 4 + 3 + 2 + sum(1)
   = 5 + 4 + 3 + 2 + 1 + sum(0)
   = 5 + 4 + 3 + 2 + 1 + 0

5. Final output:
   15

6. Because of the base condition:
   ✅ Safe recursion
   ✅ No infinite calls

===============================================
*/
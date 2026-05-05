function fact(n) {
    // Base condition:
    // Factorial of 1 is 1
    if (n == 1) return 1;

    // Recursive case:
    // Multiply n with factorial of (n - 1)
    return n * fact(n - 1);
}

// Function call
console.log(fact(5));

/*
==================== COMMENTED SUMMARY ====================

1. This program calculates the factorial of a number
   using recursion.

2. Factorial formula:
   n! = n × (n - 1) × (n - 2) × ... × 1

3. Base condition:
   if (n == 1) return 1;
   stops the recursion.

4. Recursive relation:
   fact(n) = n × fact(n - 1)

5. Recursive calls:
   fact(5)
   = 5 × fact(4)
   = 5 × 4 × fact(3)
   = 5 × 4 × 3 × fact(2)
   = 5 × 4 × 3 × 2 × fact(1)

6. Final calculation:
   5 × 4 × 3 × 2 × 1 = 120

7. Output:
   120

8. Because of the base condition:
   ✅ Safe recursion
   ✅ No infinite calls

=========================================================
*/
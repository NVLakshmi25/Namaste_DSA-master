function fib(n) {
    // Base condition:
    // If n is 0 or 1, return n
    if (n <= 1) return n;

    // Recursive case:
    // fib(n) = fib(n - 1) + fib(n - 2)
    return fib(n - 1) + fib(n - 2);
}

// Function call
console.log(fib(5));

/*
==================== COMMENTED SUMMARY ====================

1. This program finds the nth Fibonacci number
   using recursion.

2. Fibonacci sequence:
   0, 1, 1, 2, 3, 5, 8, ...

3. Base condition:
   if (n <= 1) return n;
   stops recursion.

4. Recursive relation:
   fib(n) = fib(n - 1) + fib(n - 2)

5. Recursive calls for fib(5):
   fib(5)
   = fib(4) + fib(3)
   = (fib(3) + fib(2)) + (fib(2) + fib(1))
   = ...

6. Final calculation:
   fib(5) = 5

7. Output:
   5

8. Note:
   ❌ This recursive approach is slow for large n
   because it repeats calculations.

9. Best for learning recursion, not performance.

=========================================================
*/
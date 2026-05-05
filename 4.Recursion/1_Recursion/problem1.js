// Print n...to...1 using recursion (n, (n-1), (n-2), (n-3), (n-4),....,1)

function print(n) {
    // Base condition:
    // If n becomes less than 1, stop recursion
    if (n < 1) return;

    // Print the current value of n
    console.log(n);

    // Pre-decrement n and pass it to the next recursive call
    print(--n);

    // OR (another valid way)
    // n = n - 1;
    // print(n);
}

// Initial value
let n = 10;

// Start recursion
print(n);

/*
==================== SUMMARY ====================

1. This program prints numbers from n down to 1 using recursion.

2. The function 'print' calls itself with a smaller value each time.

3. Base condition:
   if (n < 1) return;
   prevents infinite recursion.

4. Recursive calls happen like:
   print(10) → print(9) → print(8) → ... → print(1)

5. Output will be:
   10
   9
   8
   7
   6
   5
   4
   3
   2
   1

6. Using '--n' decreases the value BEFORE passing it
   to the recursive call.

7. Because of the base condition:
   ✅ Safe recursion
   ✅ No stack overflow

===============================================
*/

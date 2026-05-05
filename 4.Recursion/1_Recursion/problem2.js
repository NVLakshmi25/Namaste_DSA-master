// Print 1 to n using recursion (1, 2, 3, ..., n)

let n = 10;

function print(x) {
    // Base condition:
    // If x becomes greater than n, stop recursion
    if (x > n) return;

    // Print the current value of x
    console.log(x);

    // Pre-increment x and pass it to the next recursive call
    print(++x);
}

// Initial value
let x = 1;

// Start recursion
print(x);

/*
==================== SUMMARY ====================

1. This program prints numbers from 1 to n using recursion.

2. The function 'print' calls itself with an increased value each time.

3. Base condition:
   if (x > n) return;
   prevents infinite recursion.

4. Recursive calls happen like:
   print(1) → print(2) → print(3) → ... → print(10)

5. Output will be:
   1
   2
   3
   4
   5
   6
   7
   8
   9
   10

6. Using '++x' increases the value BEFORE passing it
   to the recursive call.

7. Because of the base condition:
   ✅ Safe recursion
   ✅ No stack overflow

===============================================
*/
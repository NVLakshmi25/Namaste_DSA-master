function powerOfTwo(n) {
    // Base condition:
    // If n becomes 1, it is a power of 2
    if (n == 1) return true;

    // Failure cases:
    // - n is less than 1 (0 or negative)
    // - n is odd (cannot be power of 2)
    else if (n < 1 || (n % 2 !== 0)) return false;

    // Recursive call:
    // Divide n by 2 and check again
    return powerOfTwo(n / 2);
}

// Function call
console.log(powerOfTwo(16));

/*
==================== COMMENTED SUMMARY ====================

1. This function checks whether a number
   is a power of 2 using recursion.

2. Logic:
   A power of 2 can be repeatedly divided by 2
   until the result becomes 1.

3. Base condition:
   if (n == 1) return true;
   confirms the number is a power of 2.

4. Failure conditions:
   - n <= 0
   - n is odd

5. Recursive relation:
   powerOfTwo(n) = powerOfTwo(n / 2)

6. Example dry run (n = 16):
   16 → 8 → 4 → 2 → 1 → true

7. Output:
   true

8. This solution is:
   ✅ Correct
   ✅ Easy to understand
   ✅ Safe from infinite recursion

=========================================================
*/
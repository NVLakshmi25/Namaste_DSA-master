function fun(num) {
    // Prints the current value of num
    console.log(num);

    // Decreases num by 1
    num = num - 1;

    // Recursive call: function calls itself with updated value
    // There is NO base condition to stop recursion
    fun(num);
}

// Initial value
let a = 5;

// Starts recursion
fun(a);


/*
==================== SUMMARY ====================

1. This function uses RECURSION (a function calling itself).

2. The function prints the value of 'num' and then decreases it by 1.

3. Since there is NO base condition (no stopping point),
   the function keeps calling itself endlessly.

4. The values printed will be:
   5, 4, 3, 2, 1, 0, -1, -2, -3, ...

5. Because recursion never stops, the call stack keeps growing.

6. Eventually, JavaScript throws an error:
   "RangeError: Maximum call stack size exceeded"

7. Conclusion:
   ❌ Recursion without a base condition is unsafe.
   ✅ Every recursive function MUST have a base condition.

===============================================
*/
// RECURSION WITH BASE CONDITION

function fun(num){
    // Base condition:
    // If num becomes 0, stop the recursion
    if (num == 0) return;

    // Prints the current value of num
    console.log(num);

    // Decrease num by 1
    num = num - 1;

    // Recursive call with updated value
    fun(num);
}

// Initial value
let a = 5;

// Start recursion
fun(a);

/*
==================== SUMMARY ====================

1. This function uses RECURSION with a BASE CONDITION.

2. The base condition:
   if (num == 0) return;
   stops the function from calling itself forever.

3. The function prints the value of 'num'
   and then decreases it by 1 on each call.

4. Function calls happen like this:
   fun(5) → fun(4) → fun(3) → fun(2) → fun(1) → stop

5. Output will be:
   5
   4
   3
   2
   1

6. Because of the base condition:
   ✅ No infinite recursion
   ✅ No stack overflow error

7. Conclusion:
   Every recursive function MUST have a base condition.

===============================================
*/
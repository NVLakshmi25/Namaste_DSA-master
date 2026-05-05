// ********BASIC RECURSION CODE*********

function fun() {
    // This line prints "Namaste" to the console
    console.log("Namaste");

    // The function calls itself
    // This is called recursion
    fun();
}

// Initial function call
// This starts the recursion
fun();

/*
==================== SUMMARY ====================

1. This function demonstrates RECURSION,
   where a function calls itself.

2. Each time the function runs, it prints:
   "Namaste"

3. There is NO base condition (stopping point),
   so the function keeps calling itself forever.

4. This causes INFINITE RECURSION.

5. Every recursive call is added to the call stack.

6. Eventually, JavaScript runs out of memory and throws:
   "RangeError: Maximum call stack size exceeded"

7. Conclusion:
   ❌ Recursion without a base condition causes errors.
   ✅ Always include a base condition in recursive functions.

===============================================
*/

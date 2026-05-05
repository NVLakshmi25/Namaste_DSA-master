let a = 10;
let b = 20;

// Store value of 'a' in a temporary variable
let temp = a;

// Assign value of 'b' to 'a'
a = b;

// Assign stored value (old 'a') to 'b'
b = temp;

// Print swapped values
console.log(a, b); // 20 10


/*
==================== COMMENTED SUMMARY ====================

Problem:
- Swap values of two variables

Approach:
- Use a temporary variable

Steps:
1️⃣ Store value of 'a' in temp
2️⃣ Assign 'b' to 'a'
3️⃣ Assign temp to 'b'

Why temp is needed?
- To avoid losing original value of 'a'

Time Complexity:
- O(1)

Space Complexity:
- O(1) (one extra variable)

Interview Golden Rule 🏆:
"Use temp when direct swap may overwrite values"

One-line Memory Trick 🧠:
"Save → Replace → Restore"

================================================
*/

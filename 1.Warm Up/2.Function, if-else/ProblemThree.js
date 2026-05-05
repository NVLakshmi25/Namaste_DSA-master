// ****** CHECK EVEN OR ODD ******

// Function to check whether a number is Even or Odd
// "num" is the input parameter
function isEvenOdd(num) {

    // Find the remainder when num is divided by 2
    // % (modulus) gives the remainder
    let rem = num % 2;

    // If remainder is 0 → number is Even
    if (rem == 0) {
        console.log("Even Number");
    } else {
        // If remainder is NOT 0 → number is Odd
        console.log("Odd Number");
    }
}

// Function calls with different numbers
isEvenOdd(6);   // Output: Even Number
isEvenOdd(3);   // Output: Odd Number
isEvenOdd(10);  // Output: Even Number

/*
==================== SUMMARY ====================

Problem Type:
- "Check number property (Even / Odd)"

What the function does:
- Accepts a number as input
- Uses modulus operator (%) to check remainder
- Prints whether the number is Even or Odd

Meaning of "num":
- "num = number to be checked"

Core Logic:
- num % 2 → gives remainder after division by 2

Decision Rules:
- If remainder == 0 → Even number
- Else              → Odd number

Why modulus (%)?
- It tells whether a number is divisible by another number
- Divisible by 2 → Even

Algorithm Idea:
- Single mathematical operation
- One conditional check

Time Complexity:
- O(1) → constant time

Space Complexity:
- O(1) → no extra space used

Interview Thinking Steps:
1️⃣ What defines even/odd? → divisibility by 2
2️⃣ How to check divisibility? → modulus operator
3️⃣ What action to take? → print result

Golden Rule 🏆:
- "If num % 2 == 0 → Even, else → Odd"

================================================
*/

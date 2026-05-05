// ****** BASIC WHILE LOOP ******

// Initialize the loop control variable
// "i represents the current loop count"
let i = 0;

// While loop runs as long as the condition is TRUE
// Condition: "i < 5"
while (i < 5) {

    // Print message to the console
    console.log("Hello World");

    // Increment i by 1
    // VERY IMPORTANT:
    // Without this, the loop would run forever
    i++;
}

/*
==================== SUMMARY ====================

Loop Type:
- "while loop"

What this loop does:
- Prints "Hello World" 5 times

Step-by-step execution:
1️⃣ i starts at 0
2️⃣ Condition (i < 5) is checked → TRUE
3️⃣ "Hello World" is printed
4️⃣ i is increased by 1
5️⃣ Steps 2–4 repeat
6️⃣ Loop stops when i becomes 5

Why i++ is important:
- It updates the loop variable
- Prevents infinite loop

When to use while loop:
- When number of iterations is NOT fixed in advance
- When condition controls the loop

Comparison with for loop:
- for loop → when count is known
- while loop → when condition is more important

Common Mistake:
- Forgetting to update i → infinite loop

Golden Rule 🏆:
- "Condition must eventually become false"

================================================
*/

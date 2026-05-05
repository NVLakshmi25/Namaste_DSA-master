// Create a function which accepts the age and tells whether a person is eligible to vote or not

// ****** CHECK VOTING ELIGIBILITY ******

// Function that checks whether a person is eligible to vote
// "age" is the input parameter
function eligibleToVote(age) {

    // Check if age is less than 18
    if (age < 18) {

        // If age is below 18
        // Person is NOT eligible to vote
        console.log("Not Eligible for vote");

    } else {

        // If age is 18 or above
        // Person IS eligible to vote
        console.log("Eligible for vote");
    }
}

// Calling the function with age 10
eligibleToVote(10); // Output: Not Eligible for vote

// Calling the function with age 20
eligibleToVote(20); // Output: Eligible for vote

/*
==================== SUMMARY ====================

Problem Type:
- "Decision making using conditionals"

What the function does:
- Accepts age as input
- Checks voting eligibility
- Prints result based on condition

Meaning of "age":
- "age = age of the person"
- Used to decide eligibility

Eligibility Rule:
- Minimum voting age = 18

Logic Used:
- if (age < 18) → Not eligible
- else          → Eligible

Why use if–else?
- Only ONE of the two conditions can be true
- Ensures clear decision making

Algorithm Idea:
- Compare input value with a fixed condition
- Take action based on comparison result

Time Complexity:
- O(1) → constant time (single check)

Space Complexity:
- O(1) → no extra space used

Interview Thinking Steps:
1️⃣ What is the condition? → age < 18
2️⃣ What happens if true? → Not eligible
3️⃣ What happens if false? → Eligible

Golden Rule 🏆:
- "Use if–else when exactly one outcome must be chosen"

================================================
*/

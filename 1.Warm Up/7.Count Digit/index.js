// Write a function that returns the count of digits in a number


// Function to count digits in a number
function countDigits(n) {

    // Special case:
    // 0 has exactly one digit
    if (n === 0) return 1;

    // Convert negative number to positive
    // Because digits do not depend on sign
    n = Math.abs(n);

    let count = 0; // stores number of digits

    // Loop runs until all digits are removed
    while (n > 0) {

        // Remove the last digit
        // Example: 25899 → 2589
        n = Math.floor(n / 10);

        // One digit removed → increase count
        count++;
    }

    // Final digit count
    return count;
}


let num = -25899;

let results = countDigits(num);
console.log(results); // Output: 5


// 🧠 One-line logic formula (MEMORIZE) => Digits = number of times n can be divided by 10 until it becomes 0

// ***********************************************************************************************************

// 🔥 Interview thinking rule

// Whenever you see:

// 1.digits
// 2.last digit
// 3.reverse number
// 4.sum of digits

// 👉 Think about "n/10" and "n%10"

// ***********************************************************************************************************

// 🚀 Logic cheat sheet

// Remove last digit → Math.floor(n / 10)
// Get last digit    → n % 10
// Count digits      → loop divisions

// ***********************************************************************************************************

// Same Logic for

// 1.Recursion
// 2.log10 formula
// 3.Sum of digits / reverse number
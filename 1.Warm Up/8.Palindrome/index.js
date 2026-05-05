function isPolindrom(n) {

    // Negative numbers are not palindromes
    if (n < 0) return false;

    let rev = 0;        // will store reversed number
    let original = n;  // store original value

    // Loop until all digits are processed
    while (n > 0) {

        // Get last digit
        // Example: 121 % 10 → 1
        let rem = n % 10;

        // Build reversed number
        // Example: rev = 12 → 12 * 10 + 1 = 121
        rev = (rev * 10) + rem;

        // BEFORE CONDITION =>i.e IN FOR LOOP INCREMENT (i+++)
        // Remove last digit from n
        // Example: 121 → 12
        n = Math.floor(n / 10);
    }

    // Compare reversed number with original
    if (rev === original) {
        return true;   // palindrome
    } else {
        return false;  // not palindrome
    }
}


let num = 121;

let result = isPolindrom(num);

console.log(result)


// OUTPUT

// rev === original → 121 === 121 → true

// *************************************************************************************************************

// 🧠 One-line logic rule (MEMORIZE)

// Reverse the number and compare it with the original

// *************************************************************************************************************

// 🔥 Digit logic cheat sheet

// Get last digit    → n % 10
// Remove last digit → Math.floor(n / 10)
// Reverse number    → rev = rev * 10 + digit

// *************************************************************************************************************

// 🎯 Interview thinking pattern

// If a problem involves:

// 1.digits
// 2.reverse
// 3.palindrome
// 4.sum of digits

// 👉 Think: "n%10" and "n/10" loop

// *************************************************************************************************************

// Optional clean version (same logic, shorter)

// function isPolindrom(n) {
//     if (n < 0) return false;

//     let rev = 0, original = n;

//     while (n > 0) {
//         rev = rev * 10 + (n % 10);
//         n = Math.floor(n / 10);
//     }

//     return rev === original;
// }

// ***********************************MOST IMPORTANT RULES**************************************************************************

// Logic-building rules

// 🔹 Rule 1: Negative numbers are NOT palindromes => if (n < 0) return false;

    // Why?

    // "-121" reversed becomes "121-" → not valid
    // Minus sign breaks symmetry

// 🔹 Rule 2: Save the original number => let original = n;

    // Why?

    // n will change during the loop
    // We need the original value for comparison at the end

// 🔹 Rule 3: Reverse the number digit by digit

    // To reverse:

    // 1.Get last digit → % 10
    // 2.Build reversed number → rev * 10 + digit
    // 3.Remove last digit → / 10





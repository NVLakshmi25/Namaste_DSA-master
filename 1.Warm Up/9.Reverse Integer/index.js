// function Reverse(n){
    

//     let rev=0;
//     let original = n; // save original number
//     n = Math.abs(original)
//     while(n>0){
//         let rem = n%10;
//         rev = (rev*10) + rem;
//         n = Math.floor(n/10);
//     }
//     if(rev === original){
//         return -rev;
//     }else{
//         return rev;
//     }
// }

// let num = 1234;

// let result = Reverse(num);

// console.log(result)

// *************OR PREFER***************

function Reverse(n) {

    // Variable to store the reversed number
    let rev = 0;

    // Store the sign of the number
    // If n < 0 → sign = -1, else sign = 1
    let sign = n < 0 ? -1 : 1;

    // Convert number to positive for digit extraction
    n = Math.abs(n);

    // Loop until all digits are processed
    while (n > 0) {

        // Get the last digit
        // Example: 1234 % 10 → 4
        let rem = n % 10;

        // Build the reversed number
        // Example: rev = 12 → 12 * 10 + 4 = 124
        rev = (rev * 10) + rem;

        // Remove the last digit
        // Example: 1234 → 123
        n = Math.floor(n / 10);
    }

    // Restore the original sign
    return rev * sign;
}


// Example input
let num = 1234;

// Function call
let result = Reverse(num);

// Print the reversed number
console.log(result); // Output: 4321

// **************************************************************************************************

// 🧠 One-line logic formula (MEMORIZE)

// Reverse = take last digit and push it to the front repeatedly

// **************************************************************************************************

// 🔥 Digit logic cheat sheet

// Get last digit    → n % 10
// Remove last digit → Math.floor(n / 10)
// Reverse build     → rev = rev * 10 + digit

// **************************************************************************************************

// 🎯 Interview thinking rule

    // Whenever you see:

    // reverse number
    // palindrome
    // sum of digits
    // digit manipulation

// 👉 Think: % 10 and / 10 loop

// ***************************************MOST IMPORTANT***********************************************************

// Logic-building steps (think before code)

// 🔹 Step 1: What happens to sign? => Digits don’t care about sign.

    // So:
    // 1.Save the sign (+ or -)
    // 2.Work with the absolute value
    // 3.Restore the sign at the end

// 🔹 Step 2: How to extract digits?

    // Use:

    // Last digit → n % 10
    // Remove digit → Math.floor(n / 10)

// 🔹 Step 3: How to build reversed number? => 🔹 Step 3: How to build reversed number?

    // rev = rev * 10 + digit





// **************** const VARIABLE ****************

// const variables cannot be reassigned
// Uncommenting below will cause ERROR

// const a = 10;
// a = 20; ❌ Error: Assignment to constant variable
// console.log(a);


// **************** let VARIABLE ****************

// "let" allows reassignment
let x = 20;
console.log(x); // Output: 20

// Reassigning value
x = 30;
console.log(x); // Output: 30


// **************** STRING CONCATENATION ****************

// Declaring constant string variables
const firstName = "Akshay";
const lastName = "Saini";

// Combine strings using +
const fullName = firstName + " " + lastName;
console.log(fullName); // Output: Akshay Saini


// **************** NUMBER vs STRING ADDITION ****************

let num1 = 3;
let num2 = 7;

// If one operand is a STRING,
// + operator performs STRING CONCATENATION
let sum = num1 + " " + num2;

// If both operands are NUMBERS,
// + operator performs ADDITION
let total = num1 + num2;

console.log(sum);   // Output: 3 7
console.log(total); // Output: 10


/*
==================== SUMMARY ====================

VARIABLE TYPES:

1️⃣ const
- Value CANNOT be reassigned
- Must be initialized at declaration
- Used when value should not change

2️⃣ let
- Value CAN be reassigned
- Block-scoped
- Used when value may change

------------------------------------------------
WHEN TO USE WHAT?

- Use const → by default
- Use let   → only when reassignment is needed

------------------------------------------------
STRING CONCATENATION RULE:

- "+" joins strings
- If ANY operand is a string → result is a string

Examples:
3 + "7"   → "37"
3 + " " + 7 → "3 7"

------------------------------------------------
NUMBER ADDITION RULE:

- "+" adds numbers ONLY when both operands are numbers

Example:
3 + 7 → 10

------------------------------------------------
IMPORTANT JAVASCRIPT BEHAVIOR 🔥

"+" operator is overloaded:
- Acts as ADDITION
- Acts as STRING CONCATENATION

------------------------------------------------
COMMON MISTAKES:

❌ Expecting number addition when string is involved
❌ Reassigning const variables
❌ Forgetting space when concatenating strings

------------------------------------------------
INTERVIEW THINKING STEPS 🎯

1️⃣ Is the variable reassigned? → let
2️⃣ Is the value constant? → const
3️⃣ Are operands numbers or strings?
4️⃣ What will "+" do here?

------------------------------------------------
GOLDEN RULE 🏆

"If one operand is a string, + becomes concatenation"

================================================
*/

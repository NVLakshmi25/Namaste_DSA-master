// **************** BASIC FUNCTION ****************

// Function that prints "Hello World"
function printHelloWorld() {

    // Prints a fixed message
    console.log("Hello World");
}

// Calling the function
// Function runs only when it is called
printHelloWorld();


// **************** GREETING FUNCTION ****************

// Function that takes a parameter
// "name" is a placeholder for input value
function greet(name) {

    // Print greeting using the provided name
    console.log("Namaste " + name);
}

// Storing a name in a variable
let x = "Virat Kohli";

// Calling the function with different arguments
greet("Akshay");
greet("Deepika");
greet(x);


// **************** ADD TWO VALUES ****************

// Function that takes two parameters
function sum(a, b) {

    // Add the two values
    let add = a + b;

    // Print the result
    console.log(add);
}

// Variables with numeric values
let a = 10;
let b = 20;
let c = 30;

// Calling function with direct values
sum(7, 3);

// Calling function using variables
sum(a, c);


// **************** FUNCTION WITH RETURN VALUE ****************

// Function that calculates and RETURNS a value
function square(x) {

    // Multiply x by itself
    let result = x * x;

    // Return the calculated value
    return result;
}

// Store returned value in a variable
let value = square(2);
console.log(value); // Output: 4

// Another function call
let z = square(99);
console.log(z); // Output: 9801


/*
==================== SUMMARY ====================

What is a Function?
- A block of code designed to perform a specific task
- Runs ONLY when it is called

-----------------------------------------------
TYPES OF FUNCTIONS SHOWN:

1️⃣ Function without parameters
- Example: printHelloWorld()
- Does a fixed task

2️⃣ Function with parameters
- Example: greet(name)
- Uses input values to produce output

3️⃣ Function without return value
- Example: sum(a, b)
- Prints result directly

4️⃣ Function with return value
- Example: square(x)
- Returns a value to the caller

-----------------------------------------------
KEY TERMS:

- Parameter → variable in function definition (name, a, b, x)
- Argument  → actual value passed during function call
- return    → sends value back to the caller

-----------------------------------------------
IMPORTANT RULES:

- Code inside function does NOT run automatically
- Function must be CALLED
- return ends the function execution
- A function can be called multiple times with different values

-----------------------------------------------
WHEN TO USE return?

- When you want to:
  - store the result
  - reuse the value
  - perform further calculations

-----------------------------------------------
INTERVIEW THINKING STEPS:

1️⃣ What should the function do?
2️⃣ Does it need input? → parameters
3️⃣ Does it need to give back a value? → return
4️⃣ Where will the result be used?

-----------------------------------------------
GOLDEN RULE 🏆:

"Use functions to avoid repetition and improve clarity"

================================================
*/

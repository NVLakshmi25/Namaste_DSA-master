# Functions & If-Else – Namaste DSA

## 📘 Overview

This module introduces **Functions** and **Control Flow using if-else**. These concepts help you write **modular, reusable, and readable code**, which is essential for problem-solving and Data Structures & Algorithms (DSA).

---

## 🎯 Learning Objectives

By the end of this lesson, you will be able to:

* Define and call functions
* Pass parameters and arguments
* Return values from functions
* Use `if`, `else if`, and `else` statements
* Solve real-world decision-making problems

---

## 🧠 Total Concepts Covered

**Total Concepts: 6**

1. Function Basics
2. Functions with Parameters
3. Return Statement
4. if-else Control Flow
5. Input Validation using else-if
6. Problem Solving with Conditions

---

## 1️⃣ What is a Function?

### 📖 Definition

A **function** is a reusable block of code that performs a specific task. Instead of writing the same logic multiple times, we define it once and reuse it.

### 🧩 Why Functions?

* Avoid code repetition
* Improve readability
* Make programs modular
* Easy debugging and maintenance

### 🧱 Syntax

```js
function functionName(parameters) {
  // code to execute
  return value; // optional
}
```

---

## 2️⃣ Simple Function Example

### 🧱 Code

```js
function printHelloWorld(){
    console.log("Hello World");
}

printHelloWorld();
```

### 🧠 Code Logic Explanation

1. `function printHelloWorld()` → defines a function
2. `console.log("Hello World")` → prints output
3. `printHelloWorld()` → calls the function

📌 No parameters, no return value.

---

## 3️⃣ Function with Parameters

### 📖 Definition

Parameters are variables listed in the function definition to receive input values.

### 🧱 Syntax

```js
function functionName(param1, param2) {
  // logic
}
```

### 🧱 Code Example

```js
function greet(name){
    console.log("Namaste " + name);
}

let x = "Virat Kohli";

greet("Akshay");
greet("Deepika");
greet(x);
```

### 🧠 Code Logic Explanation

1. `name` receives the argument value
2. String concatenation happens using `+`
3. Function prints personalized greeting

📌 Same function, different outputs.

---

## 4️⃣ Function to Add Two Numbers

### 📖 Definition

Functions can accept multiple parameters to perform calculations.

### 🧱 Code

```js
function sum(a, b){
    let add = a + b;
    console.log(add);
}

let a = 10;
let b = 20;
let c = 30;

sum(7, 3);
sum(a, c);
```

### 🧠 Code Logic Explanation

1. Parameters `a` and `b` receive values
2. Addition is performed
3. Result is printed

📌 Arguments can be literals or variables.

---

## 5️⃣ Function with Return Statement

### 📖 Definition

The `return` statement sends a value back to the function caller.

### 🧱 Syntax

```js
function functionName(x) {
  return value;
}
```

### 🧱 Code

```js
function square(x) {
    let result = x * x;
    return result;
}

let value = square(2);
console.log(value);

let z = square(99);
console.log(z);
```

### 🧠 Code Logic Explanation

1. `x` receives input
2. Square is calculated
3. `return` sends result
4. Value stored in variable

📌 Returned values can be reused.

---

## 6️⃣ Introduction to if-else (Control Flow)

### 📖 Definition

`if-else` statements control program execution based on conditions.

### 🧱 Syntax

```js
if(condition) {
  // executes if condition is true
} else {
  // executes if condition is false
}
```

### 🧠 How It Works

* Condition is evaluated
* If `true` → `if` block runs
* If `false` → `else` block runs

---

## 7️⃣ Voting Eligibility Example

### 🧱 Code

```js
function eligibleToVote(age){
    if(age < 18){
        console.log("Not Eligible for vote");
    } else {
        console.log("Eligible for vote");
    }
}

eligibleToVote(10);
eligibleToVote(20);
```

### 🧠 Code Logic Explanation

1. `age` parameter receives input
2. Condition `age < 18` is checked
3. Appropriate message is printed

---

## 8️⃣ Voting Eligibility with Validation

### 🧱 Code

```js
function eligibleToVote(age){
    if(age < 0){
        console.log("Invalid Input");
    }
    else if(age < 18){
        console.log("Not Eligible for vote");
    } else {
        console.log("Eligible for vote");
    }
}

eligibleToVote(-1);
eligibleToVote(10);
eligibleToVote(20);
```

### 🧠 Code Logic Explanation

1. First condition validates input
2. Second condition checks eligibility
3. `else` handles remaining cases

📌 Conditions are checked top-down.

---

## 9️⃣ Even or Odd Number Check

### 🧱 Code

```js
function isEvenOdd(num){
    let rem = num % 2;

    if(rem == 0){
        console.log("Even Number");
    } else {
        console.log("Odd Number");
    }
}

isEvenOdd(6);
isEvenOdd(3);
isEvenOdd(10);
```

### 🧠 Code Logic Explanation

1. `%` gives remainder
2. Even numbers give remainder `0`
3. Condition checks remainder
4. Prints result

📌 Modulus is very important in DSA.

---

## 🧩 Why Functions & if-else Matter in DSA

* Break problems into smaller logical steps
* Enable reuse and clean structure
* Required for loops, recursion, and algorithms
* Improve debugging and readability

---

## 🧾 Final Summary

### Key Takeaways

* Functions promote **modularity and reuse**
* Parameters make code flexible
* `return` enables value passing
* `if-else` controls execution flow
* Validation avoids incorrect inputs

### Best Practices

* One function = one responsibility
* Use meaningful function names
* Always validate inputs

---

🚀 **Master functions and conditions to unlock the next level of DSA**

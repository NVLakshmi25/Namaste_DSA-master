# Programming 101 – Namaste DSA

## 📘 Overview

This module is an **introduction to programming fundamentals** designed to build a strong base before diving into **Data Structures & Algorithms (DSA)**. The lesson uses **JavaScript** to explain how programs are written, how data is stored and manipulated, and how basic constructs work together.

This README summarizes **all concepts covered**, explains them clearly, and maps them to examples shown in the video.

---

## 🎯 Learning Objectives

By the end of this lesson, you will be able to:

* Write and run basic JavaScript programs
* Understand variables and constants
* Work with different data types
* Use arrays and objects
* Access and manipulate data
* Understand basic syntax rules

---

## 🧠 Total Concepts Covered

**Total Concepts: 9**

1. Hello World Program
2. Variables (`const`, `let`)
3. Arithmetic Operations
4. Strings & String Concatenation
5. Type Coercion
6. Arrays
7. Array Indexing & Nested Arrays
8. Objects
9. Accessing Object Properties

---

## 1️⃣ Hello World

The simplest program used to verify that the environment is working.

```js
console.log("Hello World");
```

📌 **Concepts Learned**:

* `console.log()`
* Program output

---

## 2️⃣ Variables

Variables are used to **store data in memory** so it can be reused and modified during program execution.

### Types of Variable Declarations

#### 🔹 `var` (Old Way – Not Recommended)

* Function scoped
* Can be redeclared and reassigned
* Causes bugs due to hoisting

```js
var a = 10;
var a = 20; // allowed
```

📌 **Avoid using `var` in modern JavaScript**.

---

#### 🔹 `let`

* Block scoped `{ }`
* Can be reassigned
* Cannot be redeclared in the same scope

```js
let x = 20;
x = 30; // allowed
```

---

#### 🔹 `const` (Recommended)

* Block scoped
* Cannot be reassigned
* Must be initialized

```js
const y = 50;
// y = 60 ❌ error
```

📌 **Best Practice**: Use `const` by default, `let` only when reassignment is needed.

---

### Variable Naming Rules

* Must start with letter, `_` or `$`
* Cannot start with numbers
* Use camelCase

```js
let firstName = "Akshay";
```

---

## 3️⃣ Arithmetic Operations

Arithmetic operators are used to perform mathematical calculations.

### Operators

| Operator | Description         |
| -------- | ------------------- |
| `+`      | Addition            |
| `-`      | Subtraction         |
| `*`      | Multiplication      |
| `/`      | Division            |
| `%`      | Modulus (remainder) |
| `**`     | Power               |

```js
let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.33
console.log(a % b);  // 1
console.log(a ** b); // 1000
```

📌 **Very important for DSA** (counting, indexing, loops).

---

## 4️⃣ Strings & Concatenation

Strings represent text.

```js
const firstName = "Akshay";
const lastName = "Saini";
const fullName = firstName + " " + lastName;
```

📌 `+` is used to concatenate strings.

---

## 5️⃣ Type Coercion (Implicit Conversion)

JavaScript automatically converts types in some operations.

```js
let num1 = 3;
let num2 = 7;

let sum = num1 + " " + num2; // "3 7"
let total = num1 + num2;     // 10
```

📌 Mixing strings and numbers changes behavior.

---

## 6️⃣ Arrays

Arrays store **multiple values** in a single variable.

```js
let arr = [2, 6, 0, 100, 9, 27];
```

### Common Array Methods

| Method      | Purpose              |
| ----------- | -------------------- |
| `push()`    | Add element at end   |
| `pop()`     | Remove last element  |
| `shift()`   | Remove first element |
| `unshift()` | Add element at start |
| `length`    | Size of array        |

```js
arr.push(50);
arr.pop();
arr.unshift(1);
arr.shift();
```

### Iteration Preview

```js
for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

📌 Arrays are **core to DSA problems**.

---

## 7️⃣ Array Indexing & Nested Arrays

### Accessing Elements

```js
arr[0]; // First element
arr[5]; // Last element
```

### Nested Arrays

```js
let array = ["akshay", 7, [5, 10, [2, 10]]];

array[2];        // [5, 10, [2, 10]]
array[2][2];     // [2, 10]
array[2][2][1];  // 10
```

📌 Arrays can contain other arrays (multi-dimensional).

---

## 8️⃣ Objects

Objects store data in **key–value pairs**.

```js
let obj = {
  a: 7,
  firstName: "Akshay",
  lastName: "Saini",
  bool: true,
  arr: [6, 7, 8]
};
```

📌 Objects represent **real-world entities**.

---

## 9️⃣ Accessing Object Properties

```js
obj.a;              // 7
obj.arr[1];         // 7
obj.firstName;
obj.firstName + " " + obj.lastName;
```

📌 Use dot (`.`) notation to access values.

---

## 🔟 Logical Operators

Logical operators are used to **combine conditions**.

| Operator | Meaning |   |    |
| -------- | ------- | - | -- |
| `&&`     | AND     |   |    |
| `        |         | ` | OR |
| `!`      | NOT     |   |    |

```js
let age = 20;
let hasID = true;

if(age >= 18 && hasID) {
  console.log("Allowed");
}
```

📌 Very important for **if-else, loops, and conditions**.

---

## 🧾 Final Summary

### What You Learned

* How variables work (`var`, `let`, `const`)
* Arithmetic operations for calculations
* Arrays and essential array methods
* Nested data access
* Objects and key-value structure
* Logical operators for decision making

### Why This Is Important

* Forms the **foundation of DSA**
* Needed for loops, recursion, and problem solving
* Builds logical thinking

### Golden Rules

* Prefer `const`
* Understand indexing deeply
* Practice array & object access daily

---

🚀 **Strong fundamentals today = Faster DSA mastery tomorrow**

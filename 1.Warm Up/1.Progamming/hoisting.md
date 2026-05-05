# 🚀 JavaScript Hoisting & Temporal Dead Zone (TDZ)

A clean, interview‑ready explanation of **Hoisting** and **Temporal Dead Zone (TDZ)** in JavaScript. Perfect for **Canva**, **GitHub**, or **study notes**.

---

## 🧠 What is Hoisting?

**Hoisting** is JavaScript’s behavior of moving **declarations** to the top of their scope during the **memory creation phase**.

### ⚠️ Key Rules

* ✅ Only **declarations** are hoisted
* ❌ **Initializations are NOT hoisted**

---

## 🔹 Example 1: `var` Hoisting

```js
console.log(a); // undefined
var a = 10;
```

### 🔍 What JavaScript Does Internally

```js
var a;           // declaration hoisted
console.log(a);  // undefined
a = 10;          // assignment later
```

✅ `var` is hoisted **and initialized with `undefined`**

---

## 🔹 Example 2: `let` & `const` Hoisting

```js
console.log(b); // ❌ ReferenceError
let b = 20;

console.log(c); // ❌ ReferenceError
const c = 30;
```

✅ `let` and `const` are hoisted
❌ But **NOT initialized**

➡️ This leads to the **Temporal Dead Zone (TDZ)**

---

## 🧠 What is the Temporal Dead Zone (TDZ)?

The **Temporal Dead Zone (TDZ)** is a **specific period in JavaScript execution** where a variable declared with `let` or `const` **exists in memory but cannot be accessed**.

### 📌 In Simple Words

> TDZ means: **“The variable is known to JavaScript, but you’re not allowed to use it yet.”**

---

### 🕒 When Does TDZ Start and End?

TDZ applies only to `let` and `const` and lasts between:

1. **Hoisting (memory allocation)**
2. **Initialization (assignment)**

🚫 Any access during this time throws a **ReferenceError**.

---

### 🔹 Visual Timeline (VERY IMPORTANT)

```js
// TDZ STARTS HERE
console.log(x); // ❌ ReferenceError

let x = 10;     // TDZ ENDS HERE
```

```
|----------- TDZ -----------| x = 10 | usable |
```

➡️ Even though `x` is hoisted, it is **locked** until initialization.

---

### ❓ Why Not Just `undefined` Like `var`?

```js
console.log(a); // undefined
var a = 5;
```

But:

```js
console.log(b); // ❌ ReferenceError
let b = 5;
```

✅ This is **intentional design**.

JavaScript creators added TDZ to:

* Prevent bugs caused by accidental early access
* Force developers to declare variables **before use**
* Make code more predictable and safer

---

### 🔹 TDZ with `const`

```js
console.log(c); // ❌ ReferenceError
const c = 100;
```

* `const` behaves exactly like `let` in TDZ
* ⚠️ Difference: `const` **must be initialized immediately**

```js
const d; // ❌ SyntaxError
```

---

### 🔹 TDZ Inside Blocks

```js
{
  console.log(x); // ❌ TDZ error
  let x = 20;
}
```

✔ TDZ is **block-scoped**, not function-scoped

---

### 🧠 Interview-Ready Definition

> **Temporal Dead Zone** is the time between hoisting and initialization of `let` and `const` variables, during which accessing them results in a ReferenceError.

---

### 🧠 One-Line Memory Trick

> "If JavaScript knows the variable but won’t let you touch it — you’re in the TDZ."

---

## 🔹 Visual Timeline

```js
// TDZ START
console.log(x); // ❌ ReferenceError

let x = 10;
// TDZ END
```

```
|---- TDZ ----| x = 10 | usable |
```

---

## 🔹 Example 3: Access After Initialization

```js
let y = 50;
console.log(y); // ✅ 50
```

✔ Safe to use **after initialization**

---

## 🔹 Example 4: `const` + TDZ

```js
console.log(z); // ❌ ReferenceError
const z = 100;
```

* `const` behaves like `let`
* ⚠️ Must be **initialized immediately**

---

## 🔹 Example 5: Function Hoisting

### ✅ Function Declaration (Fully Hoisted)

```js
sayHello();

function sayHello() {
  console.log("Hello");
}
```

### ❌ Function Expression (Not Hoisted)

```js
sayHi(); // ❌ Error

var sayHi = function () {
  console.log("Hi");
};
```

🔍 Why?

* `sayHi` is hoisted as `undefined`
* Function assignment happens later

---

## 🧠 Master Summary

```txt
================ HOISTING + TDZ =================

HOISTING:
- Declarations move to top of scope
- Happens in memory creation phase

var:
- Hoisted
- Initialized as undefined
- Accessible before declaration (bad practice)

let / const:
- Hoisted
- Not initialized
- Access before declaration → ReferenceError

TDZ:
- Time between hoisting and initialization
- Applies to let & const
- Accessing during TDZ → ERROR

FUNCTIONS:
- Function Declarations → Fully hoisted
- Function Expressions → Not hoisted

WHY TDZ EXISTS?
- Prevents bugs
- Enforces safer code
- Avoids undefined access

INTERVIEW RULE:
"var → undefined, let/const → TDZ error"

MEMORY TRICK:
"var hoists with undefined,
 let & const hoist with TDZ"

BEST PRACTICE:
✔ Use let / const
❌ Avoid var
✔ Declare before use
================================================
```

---

## 🏆 Best Practices

* ✅ Prefer `let` and `const`
* ❌ Avoid `var`
* ✔ Declare variables before usage

---

📌 **Use this README in Canva, GitHub, or interview prep notes.**

Happy Coding 🚀

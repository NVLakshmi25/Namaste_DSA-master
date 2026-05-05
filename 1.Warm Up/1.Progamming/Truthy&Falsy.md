# ⚖️ JavaScript Truthy & Falsy Values — Full Explanation

A **clear, interview-ready guide** to understanding **truthy and falsy values** in JavaScript. Ideal for **Canva**, **GitHub README**, and **quick revision notes**.

---

## 🧠 What Are Truthy & Falsy?

In JavaScript, **every value** is evaluated as either:

* ✅ **Truthy** → behaves like `true` in conditions
* ❌ **Falsy** → behaves like `false` in conditions

This matters in:

* `if / else`
* `while` loops
* logical operators (`&&`, `||`)
* ternary operators

---

## ❌ Falsy Values (ONLY 7 — MEMORIZE 🔥)

These are the **only falsy values in JavaScript**:

```txt
false
0
-0
0n        // BigInt zero
""        // empty string
null
undefined
NaN
```

👉 **Nothing else is falsy**
👉 If it’s not in this list → it’s **truthy**

---

## ✅ Truthy Values (Common Examples)

```js
true
1
-1
"0"
"false"
" "        // space
[]         // empty array
{}         // empty object
function(){}
```

⚠️ Even these are **truthy**:

* `"false"`
* `"0"`
* `[]`
* `{}`

---

## 🔹 Basic Examples

```js
if (true) console.log("Runs");
if (1) console.log("Runs");
if ("hello") console.log("Runs");
```

```js
if (0) console.log("Won't run");
if ("") console.log("Won't run");
if (null) console.log("Won't run");
```

---

## ⚠️ Real Interview Traps

### 1️⃣ Empty Array

```js
if ([]) {
  console.log("Truthy"); // ✅ Runs
}
```

👉 Empty arrays are **objects**, and objects are truthy

---

### 2️⃣ Empty Object

```js
if ({}) {
  console.log("Truthy"); // ✅ Runs
}
```

👉 Objects are always truthy

---

### 3️⃣ String "false"

```js
if ("false") {
  console.log("Truthy"); // ✅ Runs
}
```

👉 Any **non-empty string** is truthy

---

### 4️⃣ NaN

```js
if (NaN) {
  console.log("Won't run"); // ❌
}
```

👉 `NaN` is one of the **7 falsy values**

---

## 🔁 Boolean Conversion

### Using `Boolean()`

```js
Boolean(0);         // false
Boolean("");        // false
Boolean(null);      // false
Boolean(undefined); // false

Boolean(1);         // true
Boolean("hello");   // true
Boolean([]);        // true
```

### Using `!!` (Double NOT)

```js
!!0;      // false
!!"hi";   // true
!![];     // true
```

---

## 🧠 Master Summary

```txt
================ TRUTHY & FALSY SUMMARY =================

Falsy Values (ONLY THESE):
--------------------------------
false
0, -0
0n
""
null
undefined
NaN

Everything else is TRUTHY

--------------------------------
Common Truthy Traps:

[]        → truthy
{}        → truthy
"false"  → truthy
"0"      → truthy

--------------------------------
Where truthy/falsy is used:

- if conditions
- while loops
- logical operators (&&, ||)
- ternary operator

--------------------------------
Boolean Conversion:

Boolean(value)
!!value

--------------------------------
Interview Golden Rule 🏆

"Only 7 falsy values exist in JavaScript"

--------------------------------
One-line Memory Trick 🧠

"If it’s not in the falsy list → it’s truthy"
================================================
```

---

## 🎯 Common Interview Questions

❓ Is `[]` truthy or falsy?
✔ **Truthy**

❓ Is `"false"` falsy?
✔ **No, it’s truthy**

❓ How many falsy values exist in JavaScript?
✔ **7**

---

📌 **Use this README for Canva slides, GitHub notes, or interview prep.**

Happy Coding 🚀

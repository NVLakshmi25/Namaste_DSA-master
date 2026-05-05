# Star Pattern (Left Triangle) & Loop Condition Tricks – Namaste DSA

## 📘 Overview

This README explains **how star patterns work**, focusing on the **left triangle pattern**, and most importantly:

👉 **How to choose correct loop conditions (`i < n` vs `i <= n-1`)**

This is a **very common beginner confusion** and also an **interview favorite**.

---

## 🎯 Problem Statement

Print a left triangle star pattern using nested loops.

### Example (n = 4)

```
*
* *
* * *
* * * *
```

---

## 1️⃣ Code (With Beginner-Friendly Comments)

```js
let n = 4; // Number of rows

for (let i = 0; i < n; i++) {

    // Start each row with an empty string
    let row = "";

    // Inner loop runs from 0 to i
    // Number of stars depends on the row number
    for (let j = 0; j <= i; j++) {

        // Add one star in each iteration
        row = row + "* ";
    }

    // Print the completed row
    console.log(row);
}
```

---

## 2️⃣ Output

```
*
* *
* * *
* * * *
```

---

## 🧪 Dry Run (Step-by-Step)

| i (row) | j values | Stars Printed |
| ------- | -------- | ------------- |
| 0       | 0        | *             |
| 1       | 0,1      | * *           |
| 2       | 0,1,2    | * * *         |
| 3       | 0,1,2,3  | * * * *       |

---

## 🧠 Core Pattern Logic (Very Important ⭐)

### Golden Rule

> **Outer loop = number of rows**
> **Inner loop = number of stars in each row**

Here:

* Row number = `i`
* Stars per row = `i + 1`

---

## 🎯 Condition Trick #1: `i < n` vs `i <= n-1`

### These TWO loops are the SAME ✅

```js
for (let i = 0; i < n; i++)
```

```js
for (let i = 0; i <= n - 1; i++)
```

### Why?

If `n = 4`

| Condition | i values |
| --------- | -------- |
| `i < 4`   | 0,1,2,3  |
| `i <= 3`  | 0,1,2,3  |

👉 **Same iterations, same output**

---

## 🎯 Condition Trick #2: How to Decide Inner Loop Condition

### Ask this question 👇

> "How many stars do I want in this row?"

For left triangle:

* Row 0 → 1 star
* Row 1 → 2 stars
* Row 2 → 3 stars

That means:

```
stars = i + 1
```

So we write:

```js
j <= i
```

---

## ❌ Common Beginner Confusions (Cleared)

### ❌ Why not `j < i`?

```js
for (let j = 0; j < i; j++)
```

This would print:

```
(no output for i=0)
*
* *
```

👉 Missing the first star ❌

---

## 🧠 Pattern Condition Cheat Sheet ⭐

| Pattern Type                 | Inner Loop Condition |
| ---------------------------- | -------------------- |
| Full square                  | `j < n`              |
| Left triangle                | `j <= i`             |
| Left triangle (no first row) | `j < i`              |
| Inverted triangle            | `j < n - i`          |

---

## 💼 Interview Tip ⭐

If interviewer asks how you decided the conditions, say:

> "I fixed the number of rows using the outer loop, and for each row I calculated how many stars were needed and used that in the inner loop condition."

---

## ⏱ Time & Space Complexity

* **Time Complexity:** `O(n²)`
* **Space Complexity:** `O(1)` (ignoring output)

---

## 🧾 Final Summary (Beginner Friendly)

* `i < n` and `i <= n - 1` are the same
* Number of stars depends on row number
* Always decide stars first, then write condition
* Nested loops become easy with dry runs

---

🚀 **Once you understand these condition tricks, ALL star patterns become easy.**

# Grid Star Pattern (Square Pattern) – Namaste DSA

## 📘 Overview

This README explains the **Grid / Square Star Pattern**, one of the **simplest and most important pattern problems** for beginners.

This pattern helps you understand:

* Nested loops
* Fixed rows and columns
* How full grids are formed

---

## 🎯 Problem Statement

Print a **square grid star pattern** of size `n × n` using nested loops.

### Example (n = 4)

```
* * * *
* * * *
* * * *
* * * *
```

---

## 1️⃣ Code (With Beginner-Friendly Comments)

```js
// ****** GRID PATTERN *******

let n = 4; // Size of the grid (rows and columns)

for (let i = 0; i < n; i++) {

    // Start with an empty string for each row
    let row = "";

    // Inner loop builds one full row
    for (let j = 0; j < n; j++) {

        // Add one star to the row
        row = row + "* ";
    }

    // Print the completed row
    console.log(row);
}
```

---

## 2️⃣ Output

```
* * * *
* * * *
* * * *
* * * *
```

---

## 🧪 Dry Run (Step-by-Step)

### Input

```
n = 4
```

| Row (i) | Inner Loop (j values) | Stars Printed |
| ------- | --------------------- | ------------- |
| 0       | 0,1,2,3               | * * * *       |
| 1       | 0,1,2,3               | * * * *       |
| 2       | 0,1,2,3               | * * * *       |
| 3       | 0,1,2,3               | * * * *       |

---

## 🧠 Core Logic (Very Important ⭐)

### Golden Rule

> **Outer loop controls number of rows**
> **Inner loop controls number of columns**

Here:

* Rows = `n`
* Columns = `n`

So both loops run from `0` to `n-1`.

---

## 🎯 Condition Trick (Beginner Secret ⭐)

### Why `j < n`?

Because **every row needs exactly `n` stars**.

### Ask yourself:

> "Do I want the number of stars to change with row number?"

Answer here: ❌ No

So inner loop is **independent of `i`**.

---

## ❌ Common Beginner Mistakes

### ❌ Writing `j <= i`

```js
for (let j = 0; j <= i; j++) {}
```

➡ This creates a **triangle**, not a grid ❌

---

### ❌ Forgetting to reset `row`

```js
let row = ""; // must be inside outer loop
```

If written outside, rows will keep growing ❌

---

## 🧠 Pattern Condition Cheat Sheet ⭐

| Pattern Type      | Inner Loop Condition |
| ----------------- | -------------------- |
| Square grid       | `j < n`              |
| Left triangle     | `j <= i`             |
| Inverted triangle | `j < n - i`          |

---

## 💼 Interview Tip ⭐

If asked to explain grid pattern, say:

> "I fixed both rows and columns using `n`, so the inner loop does not depend on `i`. Each row prints exactly `n` stars."

---

## ⏱ Time & Space Complexity

* **Time Complexity:** `O(n²)`
* **Space Complexity:** `O(1)` (ignoring output)

---

## 🧾 Final Summary (Beginner Friendly)

* Grid pattern means fixed rows and columns
* Both loops use `n`
* Inner loop does NOT depend on `i`
* Always reset `row` inside outer loop

---

🚀 **Master this pattern first — it is the base of all other star patterns.**

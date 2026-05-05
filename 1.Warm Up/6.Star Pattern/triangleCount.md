# Number Pattern (Incremental Triangle) – Namaste DSA

## 📘 Overview

This README explains a **number triangle pattern** where each row prints numbers starting from `1` up to the row count.

This pattern is important for beginners because it teaches:

* Nested loops
* Relationship between row number and printed values
* How `j + 1` converts index into number

---

## 🎯 Problem Statement

Print the following number pattern for `n = 5`:

```
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
```

---

## 1️⃣ Code (With Beginner-Friendly Comments)

```js
let n = 5; // Number of rows

for (let i = 0; i < n; i++) {

    // Start each row with an empty string
    let row = "";

    // Inner loop prints numbers from 1 to i+1
    for (let j = 0; j <= i; j++) {
        row = row + (j + 1) + " ";
    }

    // Print the completed row
    console.log(row);
}
```

---

## 2️⃣ Output

```
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
```

---

## 🧪 Dry Run (Step-by-Step)

| Row (i) | j values  | Printed Numbers |
| ------- | --------- | --------------- |
| 0       | 0         | 1               |
| 1       | 0,1       | 1 2             |
| 2       | 0,1,2     | 1 2 3           |
| 3       | 0,1,2,3   | 1 2 3 4         |
| 4       | 0,1,2,3,4 | 1 2 3 4 5       |

---

## 🧠 Pattern Logic (Beginner Explanation ⭐)

### 🔹 Why does inner loop run `j <= i`?

Ask yourself:

> "How many numbers do I want in this row?"

* Row 0 → 1 number
* Row 1 → 2 numbers
* Row 2 → 3 numbers

So:

```
numbers per row = i + 1
```

That’s why:

```js
j <= i
```

---

## 🔢 Why `(j + 1)`?

* Loop index `j` starts from **0**
* But numbers should start from **1**

So we convert index to number:

```
j = 0 → 1
j = 1 → 2
j = 2 → 3
```

👉 Hence:

```js
(j + 1)
```

---

## 🎯 Condition Tricks (Beginner Gold ⭐)

| Pattern               | Inner Loop Condition |
| --------------------- | -------------------- |
| Number triangle       | `j <= i`             |
| Fixed numbers per row | `j < n`              |

---

## ❌ Common Beginner Mistakes

### ❌ Using `j < i`

➡ First row prints nothing ❌

### ❌ Printing `j` instead of `j + 1`

➡ Output starts from `0` ❌

### ❌ Not resetting `row`

➡ Output keeps growing ❌

---

## 💼 Interview Tip ⭐

If asked to explain this pattern, say:

> "Each row prints numbers from 1 to row index + 1. The inner loop controls how many numbers appear per row."

---

## ⏱ Time & Space Complexity

* **Time Complexity:** `O(n²)`
* **Space Complexity:** `O(1)` (ignoring output)

---

## 🧾 Final Summary (Beginner Friendly)

* Outer loop controls rows
* Inner loop controls numbers in each row
* `j + 1` converts index to number
* Same logic applies to many number patterns

---

🚀 **Once you understand this, all number triangle patterns become easy.**

# Inverted Star Pattern (Decreasing Stars) – Namaste DSA

## 📘 Overview

This README explains the **Inverted (Reverse) Star Pattern**, where the **number of stars decreases in each row**.

This pattern is extremely important for beginners because it teaches:

* How to decrease values using loop conditions
* How `n - i` controls pattern size
* Difference between increasing vs decreasing patterns

---

## 🎯 Problem Statement

Given `n = 5`, print the following inverted star pattern:

```
* * * * *
* * * *
* * *
* *
*
```

---

## 1️⃣ Code (With Beginner-Friendly Comments)

```js
let n = 5;

for (let i = 0; i < n; i++) {

    // Start each row as empty
    let row = "";

    // Inner loop controls how many stars to print
    // Stars decrease as i increases
    for (let j = 0; j < n - i; j++) {
        row = row + "* ";
    }

    // Print the completed row
    console.log(row);
}
```

---

## 2️⃣ Output

```
* * * * *
* * * *
* * *
* *
*
```

---

## 🧪 Dry Run (Step-by-Step)

| Row (i) | Inner Loop Condition | Stars Printed |
| ------- | -------------------- | ------------- |
| 0       | j < 5                | 5             |
| 1       | j < 4                | 4             |
| 2       | j < 3                | 3             |
| 3       | j < 2                | 2             |
| 4       | j < 1                | 1             |

---

## 🧠 Core Logic (Beginner Explanation ⭐)

### 🔹 Why `j < n - i`?

Ask yourself:

> "How many stars do I want in this row?"

For `n = 5`:

* Row 0 → 5 stars
* Row 1 → 4 stars
* Row 2 → 3 stars

So:

```
stars = n - i
```

That directly gives:

```js
j < n - i
```

---

## 🎯 Pattern Condition Trick (IMPORTANT ⭐)

| Pattern Type        | Inner Loop Condition |
| ------------------- | -------------------- |
| Increasing triangle | `j <= i`             |
| Decreasing triangle | `j < n - i`          |

👉 Just reverse the condition to reverse the pattern.

---

## ❌ Common Beginner Mistakes

### ❌ Using `j <= n - i`

➡ Prints extra star ❌

### ❌ Using `j < i`

➡ Creates triangle, not inverted ❌

### ❌ Not resetting `row`

➡ Output keeps growing ❌

---

## 🧠 Memory Trick ⭐

> **Increasing pattern → `+ i`**
> **Decreasing pattern → `n - i`**

This trick works for stars, numbers, and spaces.

---

## 💼 Interview Tip ⭐

If asked to explain this pattern, say:

> "The inner loop runs `n - i` times, which reduces the number of stars by one in each row as `i` increases."

---

## ⏱ Time & Space Complexity

* **Time Complexity:** `O(n²)`
* **Space Complexity:** `O(1)` (ignoring output)

---

## 🧾 Final Summary (Beginner Friendly)

* Stars decrease row by row
* `n - i` is the key formula
* Reverse of increasing triangle
* Very common interview pattern

---

🚀 **Once you understand this, inverted pyramids and diamonds become easy.**


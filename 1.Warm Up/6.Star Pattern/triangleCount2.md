# Number Pattern (Same Number per Row) – Namaste DSA

## 📘 Overview

This README explains a **number pattern** where **each row prints the same number**, and that number is equal to the **row index (`i`)**.

This pattern is very useful for beginners because it helps understand:

* How outer loop values affect inner loop output
* Difference between printing `i` vs `j`
* How repetition works in nested loops

---

## 🎯 Problem Statement

Given `n = 5`, print the following pattern:

```

0
1 1
2 2 2
3 3 3 3
4 4 4 4 4
5 5 5 5 5 5
```

---

## 1️⃣ Code (With Beginner-Friendly Comments)

```js
let n = 5;

for (let i = 0; i <= n; i++) {

    // Start each row as empty
    let row = "";

    // Inner loop decides how many times the number prints
    for (let j = 0; j <= i; j++) {

        // Always print the row number (i)
        row = row + " " + i;
    }

    // Print the completed row
    console.log(row);
}
```

---

## 2️⃣ Output

```
0
1 1
2 2 2
3 3 3 3
4 4 4 4 4
5 5 5 5 5 5
```

---

## 🧪 Dry Run (Step-by-Step)

| Row (i) | j values    | Printed Value | Row Output  |
| ------- | ----------- | ------------- | ----------- |
| 0       | 0           | 0             | 0           |
| 1       | 0,1         | 1             | 1 1         |
| 2       | 0,1,2       | 2             | 2 2 2       |
| 3       | 0,1,2,3     | 3             | 3 3 3 3     |
| 4       | 0,1,2,3,4   | 4             | 4 4 4 4 4   |
| 5       | 0,1,2,3,4,5 | 5             | 5 5 5 5 5 5 |

---

## 🧠 Core Logic (Beginner Explanation ⭐)

### 🔹 Why does inner loop run `j <= i`?

Ask:

> "How many times should the number repeat in this row?"

* Row 0 → 1 time
* Row 1 → 2 times
* Row 2 → 3 times

So repetitions = `i + 1`

Hence:

```js
j <= i
```

---

## 🔢 Why print `i` instead of `j`?

* `i` = row number → constant for that row
* `j` = changes every iteration

Printing `i` gives:

```
2 2 2
```

Printing `j` would give:

```
0 1 2
```

👉 This choice decides the **pattern type**.

---

## 🎯 Condition Tricks (Beginner Gold ⭐)

| Pattern Goal        | What to Print |
| ------------------- | ------------- |
| Same number per row | Print `i`     |
| Increasing numbers  | Print `j + 1` |
| Fixed columns       | Use `j < n`   |

---

## ❌ Common Beginner Mistakes

### ❌ Using `j < i`

➡ First row prints nothing ❌

### ❌ Printing `j`

➡ Pattern becomes increasing numbers ❌

### ❌ Forgetting to reset `row`

➡ Output keeps growing ❌

---

## 💼 Interview Tip ⭐

If asked to explain this pattern, say:

> "The outer loop controls which number to print, and the inner loop controls how many times it repeats in that row."

---

## ⏱ Time & Space Complexity

* **Time Complexity:** `O(n²)`
* **Space Complexity:** `O(1)` (ignoring output)

---

## 🧾 Final Summary (Beginner Friendly)

* Outer loop decides the value
* Inner loop decides repetition count
* Printing `i` gives same-number rows
* Very common interview pattern

---

🚀 **Once you understand this, many number patterns become easy.**

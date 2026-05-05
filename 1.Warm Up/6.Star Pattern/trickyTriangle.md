# Right Aligned Star Pattern (Spaces + Stars) – Namaste DSA

## 📘 Overview

This README explains **Right Aligned Star Pattern**, where **spaces come first and stars come later** in each row.

This pattern is extremely important because it teaches:

* How to use **two inner loops**
* How to calculate **spaces vs stars**
* How to convert pattern drawings into logic

---

## 🎯 Problem Statement

Print a **right-aligned triangle star pattern** for `n` rows.

### Example (n = 5)

```
        *
      * *
    * * *
  * * * *
* * * * *
```

---

## 🧠 Pattern Observation (MOST IMPORTANT ⭐)

Before writing code, observe the pattern:

| Row (i) | Spaces | Stars |
| ------- | ------ | ----- |
| 0       | 4      | 1     |
| 1       | 3      | 2     |
| 2       | 2      | 3     |
| 3       | 1      | 4     |
| 4       | 0      | 5     |

---

## 🧮 Formula Derived (Explained Step-by-Step ⭐)

### 🔹 Why `Stars = i + 1`

* We start counting rows from `i = 0`
* But stars start from **1**, not 0

| i (row index) | Stars needed |
| ------------- | ------------ |
| 0             | 1            |
| 1             | 2            |
| 2             | 3            |
| 3             | 4            |

👉 So we add **1** to `i`

```
Stars = i + 1
```

---

### 🔹 Why `Spaces = n - (i + 1)`

Total positions in each row = `n`

Each row contains:

```
spaces + stars = n
```

We already know:

```
stars = i + 1
```

So:

```
spaces = n - stars
spaces = n - (i + 1)
```

---

### 🔍 Visual Understanding (Beginner Friendly)

For `n = 5`:

| Row   | Calculation          | Result |
| ----- | -------------------- | ------ |
| i = 0 | spaces = 5 - (0 + 1) | 4      |
| i = 1 | spaces = 5 - (1 + 1) | 3      |
| i = 2 | spaces = 5 - (2 + 1) | 2      |
| i = 3 | spaces = 5 - (3 + 1) | 1      |
| i = 4 | spaces = 5 - (4 + 1) | 0      |

👉 Spaces decrease as stars increase

---

### 🧠 One-Line Memory Trick ⭐

> "In right-aligned patterns, stars increase by 1 each row, and spaces decrease by 1 each row."

👉 This table is the KEY to writing the code.

---

## 1️⃣ Code (With Beginner-Friendly Comments)

```js
let n = 5; // Number of rows

for (let i = 0; i < n; i++) {

    // Start with empty string for each row
    let row = "";

    // 1️⃣ Print spaces first
    // Number of spaces = n - (i + 1)
    for (let space = 0; space < n - (i + 1); space++) {
        row = row + "  ";
    }

    // 2️⃣ Print stars
    // Number of stars = i + 1
    for (let star = 0; star <= i; star++) {
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
* * * * *
```

---

## 🧪 Dry Run (Step-by-Step)

| i | Spaces Loop (`n-(i+1)`) | Stars Loop (`i+1`) | Row Output |
| - | ----------------------- | ------------------ | ---------- |
| 0 | 4                       | 1                  | *          |
| 1 | 3                       | 2                  | * *        |
| 2 | 2                       | 3                  | * * *      |
| 3 | 1                       | 4                  | * * * *    |
| 4 | 0                       | 5                  | * * * * *  |

---

## 🎯 Condition Tricks (Beginner Gold ⭐)

### 🔹 Why two inner loops?

Because:

* One loop controls **spaces**
* One loop controls **stars**

Trying to do both in one loop = confusion ❌

---

### 🔹 How to decide space condition?

Ask:

> "How many empty positions before first star?"

Answer:

```
spaces = n - (i + 1)
```

---

### 🔹 How to decide star condition?

Ask:

> "How many stars should be in this row?"

Answer:

```
stars = i + 1
```

---

## ❌ Common Beginner Mistakes

### ❌ Printing stars before spaces

➡ Pattern becomes left-aligned ❌

### ❌ Using `j < i` for stars

➡ First row becomes empty ❌

### ❌ Not resetting `row`

➡ Output keeps growing ❌

---

## 🧠 Universal Pattern Formula ⭐

Whenever you see **aligned patterns**, follow this:

1️⃣ Draw the pattern
2️⃣ Count spaces per row
3️⃣ Count stars per row
4️⃣ Convert counts into formulas
5️⃣ Write loops

---

## 💼 Interview Tip ⭐

If asked how you solved it, say:

> "I observed the pattern row-wise, calculated spaces and stars for each row, then implemented them using two inner loops."

---

## ⏱ Time & Space Complexity

* **Time Complexity:** `O(n²)`
* **Space Complexity:** `O(1)` (ignoring output)

---

## 🧾 Final Summary (Beginner Friendly)

* Right aligned patterns need spaces first
* Always calculate spaces & stars separately
* Two inner loops = clean logic
* Observation table is the real solution

---

🚀 **If you master this pattern, pyramid & diamond patterns become EASY.**

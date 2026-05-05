# ⭐ Star Pattern Logic – Detailed Commented Code (JavaScript)

This file explains **three basic star patterns** with **very detailed comments**, focused purely on **logic building**.

---

## 🧩 Problem 1: Square Star Pattern (Fixed Pattern)

### Code (with detailed comments)

```js
let n = 5; // total number of rows and columns

// Outer loop → controls the number of rows
// Runs n times → prints 5 rows
for (let i = 0; i < n; i++) {

    let count = ""; // empty string to build one full row

    // Inner loop → controls number of stars in each row
    // Runs n times for every row
    // Since this is a square pattern, star count does NOT change
    for (let j = 0; j < n; j++) {

        // Add one star to the current row
        count = count + " * ";

        // Debug idea (optional):
        // Shows current row (i) and column (j)
        // count = count + " * " + i + " " + j;
    }

    // After inner loop finishes, one row is complete
    console.log(count);
}
```

### Output

```
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
```

### Logic Summary

* Outer loop → rows
* Inner loop → columns
* Nothing changes per row → use `n`

---

## 🧩 Problem 2: Increasing Right Triangle Pattern

### Code (with detailed comments)

```js
let n = 5; // total number of rows

// Outer loop → controls how many rows will be printed
// i represents the current row number
// Runs from 0 to n
for (let i = 0; i <= n; i++) {

    let count = ""; // empty string for the current row

    // Inner loop → controls number of stars in each row
    // Logic:
    // Row 0 → 0 stars
    // Row 1 → 1 star
    // Row 2 → 2 stars
    // Stars increase with row number
    for (let j = 0; j < i; j++) {

        // Add one star to the current row
        count = count + " * ";

        // Debug idea (optional):
        // count = count + " * " + i + " " + j;
    }

    // Print the completed row
    console.log(count);
}
```

### Output

```

*
* *
* * *
* * * *
* * * * *
```

### Logic Summary

* Stars increase row by row
* Increasing by 1 → use `i`

---

## 🧩 Problem 3: Decreasing Right Triangle Pattern

### Code (with detailed comments)

```js
let n = 5; // total number of rows

// Outer loop → controls number of rows
for (let i = 0; i < n; i++) {

    let count = ""; // empty string for the current row

    // Inner loop → controls number of stars in each row
    // Logic:
    // Row 0 → n stars
    // Row 1 → n - 1 stars
    // Row 2 → n - 2 stars
    // Stars decrease as row number increases
    for (let j = 0; j < n - i; j++) {

        // Add one star to the current row
        count = count + " * ";
    }

    // Print the completed row
    console.log(count);
}
```

### Output

```
* * * * *
* * * *
* * *
* *
*
```

### Logic Summary

* Stars decrease row by row
* Decreasing by 1 → use `n - i`

---

## 🧠 Pattern Logic Cheat Sheet

```
Pattern Type      Inner Loop Condition
------------------------------------
Fixed (Square)    j < n
Increasing        j < i
Decreasing        j < n - i
```

---

## 🔥 One-Line Logic Rules (MEMORIZE)

```
If nothing changes per row → use n
If something increases     → use i
If something decreases     → use n - i
```

---

## 🎯 Interview Thinking Formula

Ask these 3 questions:
1️⃣ How many rows? → outer loop
2️⃣ What changes per row? → stars
3️⃣ How does it change? → +1 or −1

Master these and you can solve **most pattern problems easily**.

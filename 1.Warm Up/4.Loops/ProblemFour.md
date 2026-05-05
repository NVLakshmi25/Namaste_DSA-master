# Second Largest Element in an Array – Namaste DSA

## 📘 Overview

This problem builds on the **largest element pattern** and teaches how to track **two values simultaneously** while traversing an array. It is a **very popular interview question** and tests logical thinking, edge cases, and proper condition handling.

---

## 🎯 Problem Statement

Write a function that returns the **second largest distinct number** in an array.

---

## 🧠 Concepts Covered

**Total Concepts: 8**

1. Linear traversal
2. Tracking multiple variables
3. Comparison logic
4. Handling duplicates
5. Safe initialization using `-Infinity`
6. Dry run analysis
7. Edge case handling
8. Time & Space Complexity

---

## 1️⃣ Function Code (With Detailed Comments)

```js
// Function to find the second largest number in an array
function secondLargest(arr) {

    // Store the largest number found so far
    let firstLargest = -Infinity;

    // Store the second largest number found so far
    let secondLargest = -Infinity;

    // Loop through the array
    for (let i = 0; i < arr.length; i++) {

        // If current element is greater than the largest
        if (arr[i] > firstLargest) {

            // Old largest becomes second largest
            secondLargest = firstLargest;

            // Update largest
            firstLargest = arr[i];
        }
        // If current element is smaller than firstLargest
        // but greater than secondLargest
        else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            secondLargest = arr[i];
        }
    }

    // Return second largest number
    return secondLargest;
}
```

---

## 2️⃣ Example Input

```js
let arr = [4, 9, 9, 0, 2, 8, 7, 1];
```

---

## 3️⃣ Function Call & Output

```js
let result = secondLargest(arr);
console.log(result); // Output: 8
```

---

## 4️⃣ Dry Run (Step-by-Step Execution)

**Input Array:**

```
[4, 9, 9, 0, 2, 8, 7, 1]
```

| Step | i | arr[i] | FirstLargest | SecondLargest | Explanation           |
| ---- | - | ------ | ------------ | ------------- | --------------------- |
| 1    | 0 | 4      | -∞ → 4       | -∞            | First largest found   |
| 2    | 1 | 9      | 4 → 9        | 4             | Update largest        |
| 3    | 2 | 9      | 9            | 4             | Duplicate → ignored   |
| 4    | 3 | 0      | 9            | 4             | No change             |
| 5    | 4 | 2      | 9            | 4             | No change             |
| 6    | 5 | 8      | 9            | 4 → 8         | Update second largest |
| 7    | 6 | 7      | 9            | 8             | No change             |
| 8    | 7 | 1      | 9            | 8             | No change             |

➡ Loop ends → `return 8`

---

## 🧠 Why This Logic Works

* `firstLargest` always stores the maximum value
* `secondLargest` stores the largest value **smaller than firstLargest**
* `arr[i] !== firstLargest` prevents duplicates from being counted

---

## ⚠️ Important Edge Case (Interview Favorite)

### Case:

```js
[5, 5, 5]
```

### Output:

```
-Infinity
```

👉 Because **no second largest element exists**.

### Optional Safety Check

```js
if (secondLargest === -Infinity) return null;
```

---

## 💼 Interview Questions & Answers

### 1️⃣ Why do we use `-Infinity`?

**Answer:** It safely works for all-negative, all-positive, and mixed arrays without assumptions.

---

### 2️⃣ Why do we check `arr[i] !== firstLargest`?

**Answer:** To avoid counting duplicate largest values as second largest.

---

### 3️⃣ Can this be solved in one loop?

**Answer:** Yes, this solution uses a single loop (`O(n)` time).

---

### 4️⃣ What if the array has less than 2 unique elements?

**Answer:** No second largest exists; return `null` or `-1`.

---

## ⏱ Time & Space Complexity (Interview Ready)

* **Time Complexity:** `O(n)`
* **Space Complexity:** `O(1)`

---

## 🧠 How to Analyze This Question (Thinking Process)

1. We need **two values**, not one → track two variables
2. Update second largest only when largest changes
3. Handle duplicates carefully
4. Avoid incorrect initialization

---

## 🧾 Final Summary – When This Logic Is Used

### ✅ Use This Pattern When:

* Finding second largest / smallest
* Ranking problems
* Leaderboard-style questions

### 🚀 Real Examples:

* Second highest salary
* Runner-up score
* Second maximum temperature

---

⭐ **Mastering this problem means you understand multi-variable tracking — a key DSA skill.**

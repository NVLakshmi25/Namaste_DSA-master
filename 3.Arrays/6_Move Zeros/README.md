# Move Zeroes (LeetCode #283)

## 📌 Problem Overview

### 🔹 Problem Statement Explanation

You are given an integer array `nums`.

👉 Your task is to **move all `0`s to the end of the array** while:

* **Maintaining the relative order** of the non-zero elements
* **Modifying the array in-place** (no extra array allowed)

This problem focuses on **stable rearrangement** of elements using efficient pointer logic.

---

## 📈 What Does “Maintaining Relative Order” Mean?

It means the **order of non-zero elements must remain the same** as in the original array.

### Example

```txt
Input:  [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]
```

✔ Non-zero order preserved → `1 → 3 → 12`

❌ Invalid output:

```txt
[3, 1, 12, 0, 0]  // order changed ❌
```

---

## ✅ JavaScript Solution (Two Pointers)

### 🔹 Function Signature Explanation

```js
function moveZeros(nums) {
```

### Why only one parameter?

* `nums` is modified **directly**
* No need to return a new array
* This enforces **in-place logic** (important interview constraint)

---

### 💡 Core Idea

* Use one pointer to **scan** the array
* Use another pointer to **track where the next non-zero should go**

---

### 🧠 Code Implementation

```js
function moveZeros(nums) {
    let x = 0; // position for next non-zero

    // First pass: move non-zero elements forward
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[x] = nums[i];
            x++;
        }
    }

    // Second pass: fill remaining positions with zeros
    for (let i = x; i < nums.length; i++) {
        nums[i] = 0;
    }
}
```

---

## 🔍 Dry Run (Step-by-Step)

### Input

```js
nums = [0, 1, 0, 3, 12]
```

### First Pass (Move non-zero values)

| i | nums[i] | Action | nums (partial) | x |
| - | ------- | ------ | -------------- | - |
| 0 | 0       | skip   | [0,1,0,3,12]   | 0 |
| 1 | 1       | copy   | [1,1,0,3,12]   | 1 |
| 2 | 0       | skip   | [1,1,0,3,12]   | 1 |
| 3 | 3       | copy   | [1,3,0,3,12]   | 2 |
| 4 | 12      | copy   | [1,3,12,3,12]  | 3 |

### Second Pass (Fill zeros)

```txt
[1, 3, 12, 0, 0]
```

---

## 🧩 JavaScript Topics Covered

### 1️⃣ Arrays

**Definition:** Collection of values stored in a single variable.

**Syntax:**

```js
let arr = [1, 2, 3];
```

---

### 2️⃣ Functions

**Definition:** Reusable block of code that performs a task.

**Syntax:**

```js
function functionName(params) { }
```

---

### 3️⃣ Loops (`for` loop)

**Definition:** Executes code repeatedly until condition fails.

**Syntax:**

```js
for (let i = 0; i < n; i++) { }
```

---

### 4️⃣ Conditional Statements

**Definition:** Executes logic based on conditions.

**Syntax:**

```js
if (condition) { }
```

---

### 5️⃣ Two Pointer Technique

**Definition:** Uses two indices to process data efficiently.

**Why used here?**

* One pointer scans (`i`)
* One pointer places non-zero elements (`x`)

---

## ⏱️ Complexity Analysis

* **Time Complexity:** `O(n)`
* **Space Complexity:** `O(1)` (in-place)

---

## 📝 Final Summary

* This problem focuses on **stable in-place array manipulation**
* Two pointers allow efficient rearrangement without extra space
* Order preservation is the key challenge

### 🧠 Interview Memory Trick

> "Push non-zeros forward, fill the rest with zeros"

Mastering this problem strengthens your understanding of:

* Array traversal
* Pointer-based algorithms
* In-place updates

Happy Coding 🚀

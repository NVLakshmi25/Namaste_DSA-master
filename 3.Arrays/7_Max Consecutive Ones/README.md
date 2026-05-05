# Max Consecutive Ones (LeetCode #485)

## 📌 Problem Overview

### 🔹 Problem Statement Explanation

You are given a **binary array** `nums`, which means:

* Each element is either `0` or `1`

👉 Your task is to **find the maximum number of consecutive `1`s** present in the array.

You are **not modifying** the array here — only calculating and returning a number.

---

## 📘 What Does “Consecutive” Mean?

**Consecutive** means elements appear **next to each other without interruption**.

### Examples

```txt
[1, 1, 1]      → 3 consecutive 1s
[1, 0, 1, 1]  → max = 2 consecutive 1s
```

A `0` **breaks** the sequence of `1`s.

---

## ✅ JavaScript Solution (Linear Scan)

### 🔹 Function Signature Explanation

```js
function findMaxConsecutiveOnes(nums) {
```

#### Parameter Explanation

* `nums` → A binary array containing only `0` and `1`

The function returns:

* A **number** representing the longest streak of consecutive `1`s

---

## 🧠 Core Idea

* Traverse the array **once**
* Count current streak of `1`s
* Reset the count when `0` appears
* Track the **maximum streak found so far**

---

## 💡 Code Implementation

```js
function findMaxConsecutiveOnes(nums) {
    let currCount = 0; // current streak of 1s
    let maxCount = 0;  // maximum streak found

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currCount++;
        } else {
            maxCount = Math.max(maxCount, currCount);
            currCount = 0;
        }
    }

    // Handle case where array ends with 1s
    return Math.max(maxCount, currCount);
}
```

---

## 🔍 Dry Run (Step-by-Step)

### Input

```js
nums = [1, 1, 0, 1, 1, 1]
```

| i | nums[i] | currCount | maxCount | Action           |
| - | ------- | --------- | -------- | ---------------- |
| 0 | 1       | 1         | 0        | streak continues |
| 1 | 1       | 2         | 0        | streak continues |
| 2 | 0       | 0         | 2        | reset + update   |
| 3 | 1       | 1         | 2        | new streak       |
| 4 | 1       | 2         | 2        | continue         |
| 5 | 1       | 3         | 2        | continue         |

Final comparison:

```txt
max(2, 3) = 3
```

✅ Output: `3`

---

## ❓ Why Final `Math.max(maxCount, currCount)` Is Needed

If the array **ends with 1s**, the last streak never gets compared inside the loop.

Example:

```txt
[1, 1, 1]
```

➡️ Without final comparison, result would be incorrect.

---

## 🧩 JavaScript Topics Covered

### 1️⃣ Arrays

**Definition:**
An array is a data structure that stores multiple values in a single variable.

**Syntax:**

```js
let arr = [1, 0, 1];
```

**Example from this problem:**

```js
nums[i]
nums.length
```

We access elements by index and use `length` to control the loop.

---

### 2️⃣ Loops (`for` loop)

**Definition:**
A loop is used to execute a block of code repeatedly.

**Syntax:**

```js
for (let i = 0; i < n; i++) {
  // code
}
```

**Example from this problem:**

```js
for (let i = 0; i < nums.length; i++) {
```

Used to scan the array once from left to right.

---

### 3️⃣ Conditional Statements (`if / else`)

**Definition:**
Conditional statements allow execution of different code blocks based on conditions.

**Syntax:**

```js
if (condition) {
  // true block
} else {
  // false block
}
```

**Example from this problem:**

```js
if (nums[i] === 1) {
  currCount++;
} else {
  currCount = 0;
}
```

Used to detect streak continuation or break.

---

### 4️⃣ Variables

**Definition:**
Variables store values that can change during program execution.

**Syntax:**

```js
let count = 0;
```

**Example from this problem:**

```js
let currCount = 0;
let maxCount = 0;
```

Used to track current and maximum streaks.

---

### 5️⃣ Math Utility (`Math.max`)

**Definition:**
Built-in JavaScript method that returns the largest of given numbers.

**Syntax:**

```js
Math.max(a, b)
```

**Example from this problem:**

```js
Math.max(maxCount, currCount)
```

Ensures the final streak is counted correctly.

---

### 2️⃣ Loops (`for` loop)

**Syntax:**

```js
for (let i = 0; i < n; i++) { }
```

---

### 3️⃣ Conditional Statements

**Syntax:**

```js
if (condition) { } else { }
```

---

### 4️⃣ Math Utility

**Method Used:**

```js
Math.max(a, b)
```

Returns the larger of two numbers.

---

## ⏱️ Complexity Analysis

* **Time Complexity:** `O(n)` → single traversal
* **Space Complexity:** `O(1)` → constant extra space

---

## 📝 Final Summary

* This problem is about **counting streaks**
* A `0` breaks the streak, a `1` extends it
* Linear scan is the most optimal solution

### 🧠 Interview Memory Trick

> "Increase on 1, reset on 0"

Mastering this problem builds confidence in:

* Array traversal
* State tracking
* Writing clean, optimal loops

🚀 Great stepping stone before sliding window problems!

# Missing Number (LeetCode #268)

## 📌 Problem Overview

### 🔹 Problem Statement Explanation

You are given an array `nums` containing **n distinct numbers**.

* All numbers are in the range **[0, n]**
* Exactly **one number is missing** from this range

👉 Your task is to **find and return the missing number**.

This problem tests your ability to recognize **complete number sequences** and apply **mathematical reasoning**.

---

## 📘 Understanding the Range `[0, n]`

If the array length is `n`, then:

* There should be **n + 1 numbers** in total
* One number is missing, so only `n` numbers are present

### Example

```txt
nums = [3, 0, 1]
length = 3
Expected range = [0, 1, 2, 3]
Missing number = 2
```

---

## ✅ JavaScript Solution (Math Formula)

### 🔹 Function Signature Explanation

```js
function missingNumber(nums) {
```

#### Parameter Explanation

* `nums` → Array of distinct numbers from range `[0, n]` with one number missing

#### Return Value

* A **number** → the missing value

---

## 🧠 Core Idea

* The sum of numbers from `0` to `n` is known
* Calculate the **expected sum** using a formula
* Subtract the **actual sum** of array elements
* The difference is the missing number

---

## 💡 Code Implementation

```js
function missingNumber(nums) {
    let n = nums.length;

    // Expected sum of numbers from 0 to n
    let totalSum = n * (n + 1) / 2;

    // Actual sum of array elements
    let partialSum = 0;
    for (let i = 0; i < n; i++) {
        partialSum += nums[i];
    }

    return totalSum - partialSum;
}
```

---

## 🔍 Dry Run (Code-Oriented Step-by-Step)

### Input

```js
nums = [3, 0, 1]
```

### Step 1: Initialize variables

```js
let n = nums.length; // n = 3
```

```txt
Range of numbers should be: [0, 1, 2, 3]
```

---

### Step 2: Calculate expected sum

```js
let totalSum = n * (n + 1) / 2;
```

```txt
totalSum = 3 * 4 / 2 = 6
```

---

### Step 3: Calculate actual sum using loop

```js
let partialSum = 0;

for (let i = 0; i < n; i++) {
    partialSum = partialSum + nums[i];
}
```

#### Loop execution breakdown

| i | nums[i] | partialSum |
| - | ------- | ---------- |
| 0 | 3       | 3          |
| 1 | 0       | 3          |
| 2 | 1       | 4          |

```txt
partialSum = 4
```

---

### Step 4: Find missing number

```js
return totalSum - partialSum;
```

```txt
Missing number = 6 - 4 = 2
```

✅ Final Output:

```js
2
```

---

## 🧩 JavaScript Topics Covered

### 1️⃣ Arrays

**Definition:**
An array stores multiple values in a single variable.

**Syntax:**

```js
let arr = [3, 0, 1];
```

**Example from this problem:**

```js
nums.length
nums[i]
```

---

### 2️⃣ Loops (`for` loop)

**Definition:**
Used to repeat a block of code.

**Syntax:**

```js
for (let i = 0; i < n; i++) { }
```

**Example from this problem:**

```js
for (let i = 0; i < n; i++) {
    partialSum += nums[i];
}
```

---

### 3️⃣ Variables

**Definition:**
Used to store data values.

**Syntax:**

```js
let sum = 0;
```

**Example from this problem:**

```js
let totalSum = n * (n + 1) / 2;
let partialSum = 0;
```

---

### 4️⃣ Mathematical Formula

**Definition:**
Using math to avoid unnecessary loops or extra space.

**Formula Used:**

```txt
Sum from 0 to n = n × (n + 1) / 2
```

**Why this is powerful:**

* Reduces logic
* Keeps solution optimal

---

## ⏱️ Complexity Analysis

* **Time Complexity:** `O(n)`
* **Space Complexity:** `O(1)`

---

## 📝 Final Summary

* This problem relies on **sequence completeness**
* Mathematical formulas provide a clean and optimal solution
* No sorting or extra data structures needed

### 🧠 Interview Memory Trick

> "Expected sum − actual sum = missing number"

Mastering this problem improves:

* Math-based problem solving
* Array traversal
* Writing optimal solutions

🚀 A must-know problem for coding interviews!


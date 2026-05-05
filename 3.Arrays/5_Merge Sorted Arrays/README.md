# Merge Sorted Array (LeetCode #88)

## 📌 Problem Overview

### 🔹 Problem Statement Explanation

You are given **two sorted arrays** `nums1` and `nums2`.

* `nums1` has a length of `m + n`

  * The **first `m` elements** are valid and sorted
  * The **last `n` elements** are placeholders (`0`) to hold elements from `nums2`
* `nums2` has `n` elements and is also sorted

👉 Your task is to **merge `nums2` into `nums1`** so that the final array is sorted in **non-decreasing order**.

### 📈 What is Non-Decreasing Order?

**Non-decreasing order** means:

* Each element is **greater than or equal to** the previous element
* Duplicates are allowed

✅ Examples:

```txt
[1, 2, 2, 3, 5, 6]  ✔ non-decreasing
[1, 1, 1, 2]        ✔ non-decreasing
```

❌ Not non-decreasing:

```txt
[1, 3, 2]  ✘ (2 < 3)
```

⚠️ Important constraint:

* You **must not return** a new array
* You must **modify `nums1` in-place**

This problem checks your understanding of **array manipulation**, **sorted data**, and **pointer-based logic**.

---

## 🧠 Key Idea

Since both arrays are already sorted, we use the **Two Pointer Technique** to merge them efficiently.

---

## ✅ JavaScript Solution (Two Pointers + Temp Copy)

### 🔹 Function Signature Explanation

```js
function merge(nums1, m, nums2, n) {
```

Let’s understand **why these four parameters are used**:

#### 1️⃣ `nums1`

* The main array where the final merged result must be stored
* Has a size of `m + n`
* Contains extra space (`0`s) at the end

Example:

```js
nums1 = [1, 2, 3, 0, 0, 0]
```

---

#### 2️⃣ `m`

* Number of **valid elements** in `nums1`
* Tells us **where the real data ends**

Example:

```js
m = 3   // valid elements → [1, 2, 3]
```

Why `m` is important:

* Prevents reading placeholder zeros
* Helps us copy only meaningful values

---

#### 3️⃣ `nums2`

* Second sorted array
* Contains `n` valid elements

Example:

```js
nums2 = [2, 5, 6]
```

---

#### 4️⃣ `n`

* Number of elements in `nums2`

Example:

```js
n = 3
```

Why `n` is important:

* Helps detect when `nums2` is exhausted
* Avoids out-of-bounds errors

---

### 🔑 Key Idea Behind Parameters

| Parameter | Purpose                          |
| --------- | -------------------------------- |
| `nums1`   | Destination array (final answer) |
| `m`       | Valid data length in `nums1`     |
| `nums2`   | Source array to merge            |
| `n`       | Length of `nums2`                |

LeetCode passes these separately so you **don’t rely on array length**, which is critical in real-world problems.

---

```js
function merge(nums1, m, nums2, n) {
    let nums1Copy = nums1.slice(0, m);
    let p1 = 0;
    let p2 = 0;

    for (let i = 0; i < m + n; i++) {
        if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
            nums1[i] = nums1Copy[p1];
            p1++;
        } else {
            nums1[i] = nums2[p2];
            p2++;
        }
    }
}
```

---

## 🔍 Dry Run (Step-by-Step)

### Input

```js
nums1 = [1, 2, 3, 0, 0, 0]
nums2 = [2, 5, 6]
m = 3, n = 3
```

### Initial Setup

```txt
nums1Copy = [1, 2, 3]
p1 = 0, p2 = 0
```

| i | nums1Copy[p1] | nums2[p2] | Picked | nums1 after step   |
| - | ------------- | --------- | ------ | ------------------ |
| 0 | 1             | 2         | 1      | [1, _, _, _, _, _] |
| 1 | 2             | 2         | 2      | [1, 2, _, _, _, _] |
| 2 | 2             | 5         | 2      | [1, 2, 2, _, _, _] |
| 3 | 3             | 5         | 3      | [1, 2, 2, 3, _, _] |
| 4 | exhausted     | 5         | 5      | [1, 2, 2, 3, 5, _] |
| 5 | exhausted     | 6         | 6      | [1, 2, 2, 3, 5, 6] |

✅ Final Output:

```js
[1, 2, 2, 3, 5, 6]
```

---

## 🧩 JavaScript Topics Covered

### 1️⃣ Arrays

**Definition:**
An array is a collection of elements stored in a single variable.

**Syntax:**

```js
let arr = [1, 2, 3];
```

### ❓ Why do we use `slice(0, m)`?

```js
let nums1Copy = nums1.slice(0, m);
```

**Reason:**

* `nums1` contains extra zeros at the end
* Only the **first `m` elements are valid and sorted**
* The zeros are placeholders and **must not be compared**

📌 `slice(0, m)` creates a copy of **only the meaningful part**:

```js
nums1 = [1, 2, 3, 0, 0, 0]
nums1Copy = [1, 2, 3]
```

### 🎯 Why is this important?

* Prevents comparing real values with `0`
* Protects original values while overwriting `nums1`
* Makes the merge logic clean and safe

---

### 2️⃣ Functions

**Definition:**
A function is a reusable block of code designed to perform a task.

**Syntax:**

```js
function functionName(parameters) {
  // logic
}
```

**Example from code:**

```js
function merge(nums1, m, nums2, n) { }
```

---

### 3️⃣ Loops (`for` loop)

**Definition:**
Loops allow repeated execution of a block of code.

**Syntax:**

```js
for (let i = 0; i < limit; i++) {
  // code
}
```

**Example from code:**

```js
for (let i = 0; i < m + n; i++) { }
```

---

### 4️⃣ Conditional Statements (`if / else`)

**Definition:**
Used to execute code based on conditions.

**Syntax:**

```js
if (condition) {
  // true block
} else {
  // false block
}
```

**Example from code:**

```js
if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2]))
```

---

### 5️⃣ Logical Operators

**Definition:**
Operators used to combine multiple conditions.

* `&&` → AND
* `||` → OR

**Example:**

```js
p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])
```

---

### 6️⃣ Two Pointer Technique

**Definition:**
An algorithmic technique where two pointers traverse data structures to reduce time complexity.

**Why used here?**

* Both arrays are sorted
* Allows merging in linear time

---

## ⏱️ Complexity Analysis

* **Time Complexity:** `O(m + n)`
* **Space Complexity:** `O(m)` (temporary copy)

---

## 🏆 Interview Takeaways

* When arrays are **sorted** → think **Two Pointers**
* Always clarify **in-place vs extra space**
* Dry runs help avoid off-by-one errors

🧠 **Memory Trick:**

> Compare → place smaller → move pointer

---

## 📝 Final Summary

* The problem focuses on **merging two sorted arrays** efficiently
* JavaScript arrays and pointers are used to avoid unnecessary sorting
* A temporary copy helps preserve original values while merging
* The **Two Pointer Technique** ensures optimal time complexity

### ⏱️ Final Complexity

* **Time:** `O(m + n)`
* **Space:** `O(m)`

### 🧠 Key Interview Insight

> If data is sorted, never re-sort — **merge smartly** using pointers.

This problem is a foundation for mastering:

* Array manipulation
* Pointer-based algorithms
* Real-world in-place updates

✅ Once comfortable, move to the **O(1) space optimized solution** for advanced interviews.

Happy Learning & Coding 🚀

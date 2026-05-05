# 🧠 Remove Element (LeetCode 27) – Two Pointer Technique

## 📘 Overview

This README explains the **Remove Element** problem in a **beginner-friendly** way using the **Two Pointer Technique**.

You will learn:

* How in-place array modification works
* How two pointers solve filtering problems
* How to do a **dry run** step by step (most important for beginners)

---

## 🎯 Problem Statement

Given an integer array `nums` and an integer `val`, remove **all occurrences of `val` in-place**.

* The order of remaining elements **does not matter**
* Return the number of elements **not equal to `val`**
* Only the **first `k` elements** of the array matter

---

### Example

Input:

```
nums = [3, 1, 3, 4, 3, 3, 3, 7]
val = 3
```

Output:

```
k = 3
nums = [1, 4, 7, _, _, _, _, _]
```

---

## 🧠 Core Idea (Beginner Logic ⭐)

> "Scan the array, keep elements that are NOT equal to `val`, and shift them to the front."

This is a **filtering problem**, solved best using **Two Pointers**.

---

## 🧑‍💻 JavaScript Code (With Comments)

```js
function removeElement(nums, val) {

    // x → pointer for placing elements that are NOT equal to val
    let x = 0;

    // i → scans each element of the array
    for (let i = 0; i < nums.length; i++) {

        // If current element should be kept
        if (nums[i] !== val) {

            nums[x] = nums[i]; // overwrite unwanted values
            x = x + 1;         // move pointer forward
        }
    }

    // x is the count of valid elements
    return x;
}
```

---

## 🧪 Dry Run (Step-by-Step 🔥)

### Input

```
nums = [3, 1, 3, 4, 3, 3, 3, 7]
val = 3
```

### Initial State

```
x = 0
```

### Iteration Table

| i | nums[i] | nums[i] !== 3 | Action Taken | x | Array (first part) |
| - | ------- | ------------- | ------------ | - | ------------------ |
| 0 | 3       | ❌ No          | Skip         | 0 | []                 |
| 1 | 1       | ✅ Yes         | nums[0] = 1  | 1 | [1]                |
| 2 | 3       | ❌ No          | Skip         | 1 | [1]                |
| 3 | 4       | ✅ Yes         | nums[1] = 4  | 2 | [1, 4]             |
| 4 | 3       | ❌ No          | Skip         | 2 | [1, 4]             |
| 5 | 3       | ❌ No          | Skip         | 2 | [1, 4]             |
| 6 | 3       | ❌ No          | Skip         | 2 | [1, 4]             |
| 7 | 7       | ✅ Yes         | nums[2] = 7  | 3 | [1, 4, 7]          |

---

### ✅ Final Result

```
k = 3
Valid elements = [1, 4, 7]
```

Only the **first `k` elements** matter.

---

## 🔍 Visualization (Beginner Friendly)

```
[3, 1, 3, 4, 3, 3, 3, 7]
   ↓     ↓              ↓
[1, 4, 7, _, _, _, _, _]
```

All unwanted values (`3`) are skipped.

---

## 🧠 Why Two Pointers Work Here

* `i` scans every element
* `x` tracks where the next valid element should go
* Unwanted elements are simply ignored

---

## ⏱ Time & Space Complexity

**Time Complexity:**

* `O(n)` → single loop through array

**Space Complexity:**

* `O(1)` → no extra array used (in-place)

---

## 🏆 Interview Golden Rules

* Filtering array in-place → **Two Pointers**
* Don’t delete elements → **overwrite them**
* Only first `k` elements matter

---

## 🧠 One-Line Memory Trick

> "Skip `val`, keep others, shift left."

---

## 🧾 Final Summary (Beginner Friendly)

* Use two pointers
* One scans, one stores
* Ignore unwanted values
* Return count, not the array

🚀 **If you understand this, you are ready for many array interview problems.**

---

## ✅ Complete JavaScript Code (Final Version)

```js
function removeElement(nums, val) {

    // x → pointer for placing elements that are NOT equal to val
    let x = 0;

    // i → scans each element of the array
    for (let i = 0; i < nums.length; i++) {

        /*
        If current element is NOT the value to remove:
        - Keep it
        - Place it at index x
        */
        if (nums[i] !== val) {

            nums[x] = nums[i]; // overwrite unwanted values
            x = x + 1;         // move pointer forward
        }
    }

    // x is the count of elements that are NOT equal to val
    return x;
}

// Input array
let nums = [3, 1, 3, 4, 3, 3, 3, 7];

// Remove all occurrences of 3
let results = removeElement(nums, 3);

// Output
console.log(results);                // 3
console.log(nums.slice(0, results)); // [1, 4, 7]
```

---

### 🔥 Important Notes (Beginner Must-Read)

* The array is modified **IN-PLACE**
* Only the **first `results` elements** are valid
* Elements after that are **ignored / garbage values**
* `slice(0, results)` is used only for **display**, not required in LeetCode

---

### 🧠 One-Line Revision Trick

> "Skip `val`, keep others, overwrite from left"

---

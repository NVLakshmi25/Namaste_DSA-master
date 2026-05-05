# Linear Search & `return -1` Logic – Namaste DSA

## 📘 Overview

This README explains the **Linear Search algorithm** in JavaScript and, most importantly, **why `return -1` must be written outside the loop**.

This is a **very common interview trap**, and understanding it clearly will save you from logical mistakes in exams and real interviews.

---

## 🎯 Learning Objectives

After reading this file, you will be able to:

* Understand how Linear Search works
* Trace code using dry runs
* Know where to place `return -1` correctly
* Explain early exit vs full traversal
* Answer interview questions confidently

---

## 🧠 Total Concepts Covered

**Total Concepts: 7**

1. Linear Search Algorithm
2. Function with return value
3. for-loop traversal
4. Early exit using return
5. Dry run (step-by-step)
6. Common mistake: wrong `return -1`
7. Time & Space Complexity

---

## 1️⃣ What is Linear Search?

### 📖 Definition

**Linear Search** is an algorithm that checks each element of an array **one by one** until the target element is found or the array ends.

---

## 2️⃣ Function Definition (With Code Explanation in Comments)

### 🧱 Code with Detailed Comments

```js
// Function that searches for an element in an array
// and returns its index if found, otherwise returns -1
function searchElement(arr, x) {

    // Loop through the array from index 0 to last index
    for (let i = 0; i < arr.length; i++) {

        // Check if the current element is equal to x
        if (arr[i] === x) {
            return i;   // Element found → return index and exit function
        }
    }

    // If loop finishes and element is not found
    return -1;          // Return -1 to indicate element is absent
}
```

### 🧠 Line-by-Line Explanation

* `function searchElement(arr, x)` → defines a function with array and target value
* `for (let i = 0; i < arr.length; i++)` → iterates over each array index
* `arr[i] === x` → compares current element with target
* `return i` → exits immediately when match is found
* `return -1` → runs only if full array is checked and no match exists

---

## 3️⃣ Example Input

```js
let arr = [4, 2, 0, 10, 8, 30];
```

---

## 4️⃣ Dry Run 1: `searchElement(arr, 4)`

| Step | i | arr[i] | x | Match? | Action   |
| ---- | - | ------ | - | ------ | -------- |
| 1    | 0 | 4      | 4 | ✅ Yes  | return 0 |

🛑 Function stops immediately when match is found.

---

## 5️⃣ Dry Run 2: `searchElement(arr, 10)`

| Step | i | arr[i] | x  | Match? | Action   |
| ---- | - | ------ | -- | ------ | -------- |
| 1    | 0 | 4      | 10 | ❌      | continue |
| 2    | 1 | 2      | 10 | ❌      | continue |
| 3    | 2 | 0      | 10 | ❌      | continue |
| 4    | 3 | 10     | 10 | ✅      | return 3 |

---

## 6️⃣ Dry Run 3: `searchElement(arr, 49)`

| Step | i | arr[i] | x  | Match? | Action   |
| ---- | - | ------ | -- | ------ | -------- |
| 1    | 0 | 4      | 49 | ❌      | continue |
| 2    | 1 | 2      | 49 | ❌      | continue |
| 3    | 2 | 0      | 49 | ❌      | continue |
| 4    | 3 | 10     | 49 | ❌      | continue |
| 5    | 4 | 8      | 49 | ❌      | continue |
| 6    | 5 | 30     | 49 | ❌      | continue |

➡ Loop ends → `return -1`

---

## 7️⃣ ❌ WRONG Placement of `return -1`

### 🚫 Wrong Code

```js
function searchElement(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            return i;
        }
        return -1; // ❌ WRONG
    }
}
```

---

### 🧪 Dry Run (Why This Fails)

**Input:** `searchElement(arr, 10)`

| Step | i | arr[i] | Match? | Action    |
| ---- | - | ------ | ------ | --------- |
| 1    | 0 | 4      | ❌      | return -1 |

🛑 Function exits immediately after first iteration.

❗ Remaining elements are **never checked**.

---

## 8️⃣ ✅ CORRECT Placement of `return -1`

```js
function searchElement(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            return i; // success → exit early
        }
    }
    return -1; // failure → after full loop
}
```

---

## 🧠 Think Like This (Easy Analogy)

🏠 Array = House with rooms

* Loop = checking rooms one by one
* `return i` = “Found it! Stop searching”
* `return -1` inside loop = “Not in first room → give up” ❌

---

## 📌 Interview Gold Rule ⭐

✔ `return` for **success** → inside loop
✔ `return` for **failure** → after loop

---

## 🧪 One-Line Summary
✔ `return -1`  inside loop → ❌ wrong logic
✔ `return -1`   after loop → ✅ correct linear search

## ⏱ Time & Space Complexity

* **Time Complexity:** `O(n)` → In the worst case, every element is checked once
* **Space Complexity:** `O(1)` → No extra memory is used

---

## 💼 Interview Questions & Answers (Must-Prepare)

### 1️⃣ What is Linear Search?

**Answer:**
Linear Search is an algorithm that checks each element of an array one by one until the required element is found or the array ends.

---

### 2️⃣ Why do we return `-1` in Linear Search?

**Answer:**
`-1` indicates that the element is **not present** in the array. Since array indices are always `0` or positive, `-1` safely represents failure.

---

### 3️⃣ Why is `return -1` written outside the loop?

**Answer:**
Because we should return `-1` **only after checking all elements**. Writing it inside the loop causes the function to exit after the first iteration.

---

### 4️⃣ What happens if `return -1` is inside the loop?

**Answer:**
The function exits immediately during the first iteration, even if the element exists later in the array. This results in incorrect output.

---

### 5️⃣ When does Linear Search perform best?

**Answer:**
When the element is found at the **first index**, making the time complexity `O(1)` (best case).

---

### 6️⃣ Can Linear Search work on an unsorted array?

**Answer:**
Yes. Linear Search does **not require a sorted array**.

---

### 7️⃣ Linear Search vs Binary Search?

**Answer:**

* Linear Search works on both sorted and unsorted arrays
* Binary Search requires sorted arrays but is faster (`O(log n)`)

---

## 🧪 One-Line Summary

* `return i` → element found → stop searching
* `return -1` → element not found after full traversal

---

## 🧾 Final Summary – When to Use Linear Search

### ✅ Use Linear Search When:

* The array is **small**
* The array is **unsorted**
* Simplicity is more important than performance
* You want an easy-to-implement solution

### ❌ Avoid Linear Search When:

* The array is very **large**
* Performance is critical
* Data is sorted (use Binary Search instead)

---

🚀 **Linear Search is the foundation of searching algorithms. Master it once, and advanced searches become easy.**

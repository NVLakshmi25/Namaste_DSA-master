# Count Negative Numbers in an Array – Namaste DSA

## 📘 Overview

This problem focuses on **array traversal**, **conditional checks**, and the **counter pattern**. It teaches how to scan an array and count elements that satisfy a specific condition.

This is a **very common beginner + interview-level problem** and builds the foundation for many DSA counting problems.

---

## 🎯 Problem Statement

Write a function that counts how many **negative numbers** are present in an array and returns the count.

---

## 🧠 Concepts Covered

**Total Concepts: 6**

1. Array traversal using loop
2. Conditional checks (`< 0`)
3. Counter variable pattern
4. Function return values
5. Dry run analysis
6. Time & Space Complexity

---

## 1️⃣ Function Code (With Detailed Comments)

```js
// Function that counts how many negative numbers are in an array
function countNegatives(arr) {

    // Variable to store count of negative numbers
    let count = 0;

    // Loop through each element of the array
    for (let i = 0; i < arr.length; i++) {

        // Check if the current element is negative
        if (arr[i] < 0) {
            // Increase count when a negative number is found
            count = count + 1; // or count++
        }
    }

    // Return total count of negative numbers
    return count;
}
```

---

## 2️⃣ Example Input

```js
let arr = [2, -9, 17, 0, -1, -10, -4, 8];
```

---

## 3️⃣ Function Call & Output

```js
const result = countNegatives(arr);
console.log(result); // Output: 4
```

---

## 4️⃣ Dry Run (Step-by-Step Execution)

**Input Array:**

```
[2, -9, 17, 0, -1, -10, -4, 8]
```

| Step | i | arr[i] | Is arr[i] < 0? | count |
| ---- | - | ------ | -------------- | ----- |
| 1    | 0 | 2      | ❌ No           | 0     |
| 2    | 1 | -9     | ✅ Yes          | 1     |
| 3    | 2 | 17     | ❌ No           | 1     |
| 4    | 3 | 0      | ❌ No           | 1     |
| 5    | 4 | -1     | ✅ Yes          | 2     |
| 6    | 5 | -10    | ✅ Yes          | 3     |
| 7    | 6 | -4     | ✅ Yes          | 4     |
| 8    | 7 | 8      | ❌ No           | 4     |

➡ Loop ends → `return count`

---

## 🧠 Code Logic Explanation

1. Initialize a counter variable `count = 0`
2. Traverse the array using a loop
3. Check if each element is negative
4. Increment counter when condition is true
5. After loop ends, return the counter

---

## 💼 Interview Questions & Answers

### 1️⃣ What pattern is used in this problem?

**Answer:** Counter pattern using a loop and condition.

---

### 2️⃣ Can this problem be solved without a loop?

**Answer:** No. Each element must be checked at least once.

---

### 3️⃣ What happens if the array is empty?

**Answer:** The loop does not execute and the function returns `0`.

---

### 4️⃣ Can we use `for...of` loop instead?

**Answer:** Yes, it makes the code cleaner.

---

## ✨ Cleaner Version (Optional)

```js
function countNegatives(arr) {
    let count = 0;
    for (let num of arr) {
        if (num < 0) count++;
    }
    return count;
}
```

---

## ⏱ Time & Space Complexity (Interview Ready)

* **Time Complexity:** `O(n)`
* **Space Complexity:** `O(1)`

---

## 🧠 How to Analyze This Question (Thinking Process)

1. Output depends on checking **every element** → loop needed
2. Condition-based counting → counter variable
3. No extra memory → constant space

---

## 🧾 Final Summary – When This Logic Is Used

### ✅ Use This Pattern When:

* You need to **count elements** matching a condition
* Problems involving positives, negatives, evens, odds
* Frequency-based questions

### 🚀 Examples:

* Count even numbers
* Count vowels in a string
* Count occurrences of an element

---

⭐ **This counter-pattern is one of the most important DSA fundamentals. Master it once, reuse it everywhere.**

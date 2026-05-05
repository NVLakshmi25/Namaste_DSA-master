# 🧠 Remove Duplicates from Sorted Array

## (Two Pointer Technique – Beginner Friendly)

This README explains **how to remove duplicates from a sorted array** using the **Two Pointer Technique**.

This is a **very important interview question** and also helps you understand:

* Array traversal
* In-place modification
* Time & Space efficiency

---

## 📘 Problem Statement

Given a **sorted array**, remove the duplicates **in-place** such that each unique element appears only once.

Return the **count of unique elements**.

---

## 🔹 Given Input

```js
let nums = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6];
```

✔ Array is **sorted**
✔ Duplicates are **adjacent**

---

## 🧠 Key Observation (MOST IMPORTANT ⭐)

Because the array is **sorted**:

* All duplicates come **next to each other**
* We only need to compare with the **last unique element**

---

## 1️⃣ Code (With Beginner-Friendly Comments)

```js
function removeDuplicates(nums) {

    let x = 0; // slow pointer → position of last unique element

    // fast pointer scans the array
    for (let i = 0; i < nums.length; i++) {

        // If a new (greater) value is found
        if (nums[i] > nums[x]) {
            x = x + 1;        // move slow pointer
            nums[x] = nums[i]; // overwrite duplicate
        }
    }

    // x is index → length = index + 1
    return x + 1;
}
```

---

## 🧪 Dry Run (Step-by-Step Execution 🔥)

### Initial State

```
nums = [0,0,1,1,2,2,3,3,4,4,5,5,6]
x = 0
nums[x] = 0
```

### 🔍 Iteration Table

| i  | nums[i] | nums[x] | nums[i] > nums[x]? | x after | nums (updated)    |
| -- | ------- | ------- | ------------------ | ------- | ----------------- |
| 0  | 0       | 0       | ❌                  | 0       | no change         |
| 1  | 0       | 0       | ❌                  | 0       | no change         |
| 2  | 1       | 0       | ✅                  | 1       | [0,1,...]         |
| 3  | 1       | 1       | ❌                  | 1       | no change         |
| 4  | 2       | 1       | ✅                  | 2       | [0,1,2,...]       |
| 5  | 2       | 2       | ❌                  | 2       | no change         |
| 6  | 3       | 2       | ✅                  | 3       | [0,1,2,3,...]     |
| 7  | 3       | 3       | ❌                  | 3       | no change         |
| 8  | 4       | 3       | ✅                  | 4       | [0,1,2,3,4,...]   |
| 9  | 4       | 4       | ❌                  | 4       | no change         |
| 10 | 5       | 4       | ✅                  | 5       | [0,1,2,3,4,5,...] |
| 11 | 5       | 5       | ❌                  | 5       | no change         |
| 12 | 6       | 5       | ✅                  | 6       | [0,1,2,3,4,5,6]   |

---

## ✅ Final State

```
x = 6
k = x + 1 = 7
```

### Modified Array (first k elements)

```js
[0, 1, 2, 3, 4, 5, 6]
```

---

## 🔹 Output

```js
console.log(k);               // 7
console.log(nums.slice(0,k)); // [0,1,2,3,4,5,6]
```

---

## 🧠 Core Logic Explained (Plain English)

```
Two pointers:

x → keeps track of last unique element
i → moves forward and scans the array

If nums[i] > nums[x]:
- A new unique number is found
- Move x forward
- Place nums[i] at nums[x]
```

---

## 🔥 Why `return x + 1`?

* `x` is a **0-based index**
* Length of array = index + 1

Example:

```
Indexes: 0 1 2 3 4 5 6
Length : 7
```

---

## 🧠 Time & Space Complexity

```js
Time Complexity: O(n)
- Single pass through array

Space Complexity: O(1)
- In-place modification
- No extra array used
```

---

## 🏆 Interview Golden Rules ⭐

```
If array is SORTED:
→ Use Two Pointer Technique

Fast pointer (i) → scans
Slow pointer (x) → tracks unique position
```

---

## 🧠 One-Line Memory Trick ⭐

> **"Compare with last unique, overwrite duplicates."**

---

## 🧾 Final Summary (Beginner Friendly)

### ✅ What the problem asks

* You are given a **sorted array**
* Remove duplicates **in-place** (no extra array)
* Keep the **relative order** of elements
* Return the **count of unique elements (k)**

---

### 🧠 How the logic works (in short)

* Use **Two Pointers**

  * `i` → scans every element (fast pointer)
  * `x` → tracks position of last unique element (slow pointer)

* Because the array is **sorted**:

  * Duplicates are always **next to each other**
  * A new unique element is found when:

    ```js
    nums[i] > nums[x]
    ```

* When a new unique value is found:

  * Move `x` forward
  * Overwrite `nums[x]` with the new value

---

### 👀 Visualisation (Easy to Remember ⭐)

```
Original array:
[1, 1, 2, 3, 3, 5]

Step-by-step unique placement:
[1, _, _, _, _, _]
[1, 2, _, _, _, _]
[1, 2, 3, _, _, _]
[1, 2, 3, 5, _, _]
```

Only the **first k positions matter**.
Everything after `k` is ignored.

---

### 🔢 Final Result Example

```
Final array (first k elements): [1, 2, 3, 5]
Unique count (k): 4
```

---

### ⏱ Time & Space Complexity (Recap)

* **Time Complexity:** `O(n)`

  * Single pass through the array

* **Space Complexity:** `O(1)`

  * In-place modification
  * Only pointers used

---

### 🏆 Interview One-Liner (Very Important ⭐)

> "Since the array is sorted, I used the two-pointer technique to overwrite duplicates in-place and return the count of unique elements in linear time and constant space."

---

🚀 **This problem is the foundation for many array interview questions. Master it once, reuse it everywhere.**

---

## 🧑‍💻 Complete JavaScript Code (Final Version with Summary Comments)

```js
let nums = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6];

function removeDuplicate() {
    // Pointer x tracks the position of last unique element
    let x = 0;

    // Loop through the array using fast pointer i
    for (let i = 0; i < nums.length; i++) {

        /*
        Since array is sorted:
        - If nums[i] > nums[x], it means we found a NEW unique value
        */
        if (nums[i] > nums[x]) {
            // Move unique pointer forward
            x = x + 1;

            // Place the new unique value at position x
            nums[x] = nums[i];
        }
    }

    // x is index (0-based), so length = x + 1
    return x + 1;
}

// Function call
let k = removeDuplicate();

// Output results
console.log(k);                // Number of unique elements
console.log(nums.slice(0, k)); // Unique elements only

/* ==================== COMMENTED SUMMARY ====================

Problem:
- Remove duplicates from a SORTED array in-place
- Return the count of unique elements

Approach:
- Two Pointer Technique

Pointers:
- i → fast pointer (scans array)
- x → slow pointer (tracks unique position)

Core Logic:
- Compare nums[i] with nums[x]
- If nums[i] > nums[x]:
    → New unique element found
    → Move x forward
    → Overwrite nums[x] with nums[i]

Why it works:
- Array is sorted
- Duplicates are adjacent
- Greater value always means a new unique number

Return:
- x + 1 because x is index (0-based)

Time Complexity:
- O(n) → single loop

Space Complexity:
- O(1) → in-place, no extra array

Interview Golden Rule 🏆:
"If array is sorted → use Two Pointers"

One-line Memory Trick 🧠:
"Compare, move pointer, overwrite duplicates"

================================================ */
```

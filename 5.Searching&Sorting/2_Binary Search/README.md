# 🔍 Binary Search – Complete Guide (README)

Binary Search is one of the most fundamental and important algorithms in **Data Structures & Algorithms (DSA)**. It is highly efficient and widely used when working with **sorted arrays**.

---

## 📌 What is Binary Search?

**Binary Search** is a searching algorithm used to find the position (index) of a target element in a **sorted array** by repeatedly dividing the search space into two halves.

Instead of checking every element one by one (like Linear Search), Binary Search:

* Compares the target with the **middle element**
* Eliminates **half of the array** in every step

That’s why it is extremely fast.

---

## ✅ Key Requirements

For Binary Search to work:

* The array **must be sorted** (ascending or descending)
* Random access to elements is required (arrays, not linked lists)

---

## 🧠 Intuition (Simple Words)

Imagine searching for a word in a dictionary:

* You open the book in the middle
* If your word comes **before**, you search the left side
* If it comes **after**, you search the right side

That’s exactly how Binary Search works.

---

## 🧩 Algorithm Steps

1. Initialize two pointers:

   * `left = 0`
   * `right = array.length - 1`

2. While `left <= right`:

   * Find the middle index
   * Compare middle element with target

3. If target equals middle → return index

4. If target is smaller → move `right = middle - 1`

5. If target is larger → move `left = middle + 1`

6. If not found → return `-1`

---

## 🧪 Syntax (JavaScript)

```js
function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (nums[middle] === target) {
            return middle;
        } else if (target < nums[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return -1;
}
```

---

## 📘 Example

**Input:**

```js
nums = [-1, 0, 3, 5, 9, 12]
target = 9
```

**Output:**

```js
4
```

---

## 🧮 Dry Run (Step-by-Step)

Array: `[-1, 0, 3, 5, 9, 12]`
Target: `9`

| Step | Left | Right | Middle | nums[middle] | Action                 |
| ---- | ---- | ----- | ------ | ------------ | ---------------------- |
| 1    | 0    | 5     | 2      | 3            | target > 3 → move left |
| 2    | 3    | 5     | 4      | 9            | target found ✔         |

**Result:** Index `4`

---

## ⏱️ Time Complexity

Binary Search divides the array into half every time.

* **Best Case:** `O(1)` (target found at first middle)
* **Worst Case:** `O(log n)`
* **Average Case:** `O(log n)`

### Why `O(log n)`?

Example:

* `n = 16` → max steps = 4
* `n = 100` → max steps ≈ 7
* `n = 1,000,000` → max steps ≈ 20

Each step cuts the problem size in half.

---

## 💾 Space Complexity

* **Iterative Binary Search:** `O(1)` (constant space)
* **Recursive Binary Search:** `O(log n)` (due to recursion stack)

---

## ⚠️ Common Mistakes

❌ Using Binary Search on an **unsorted array**
❌ Infinite loop due to wrong condition (`left < right` instead of `<=`)
❌ Wrong middle calculation in some languages (overflow issue)

---

## 🌟 Advantages

✔ Very fast for large datasets
✔ Efficient and predictable performance
✔ Widely used in real-world systems

---

## 🚫 Limitations

✘ Works only on sorted data
✘ Not suitable for linked lists
✘ Requires random access

---

## 🧠 Advanced Binary Search Tricks & Interview Insights

Binary Search is not just about finding an element. In interviews and real problems, it is often used in **creative and indirect ways**.

---

## 🎯 Important Binary Search Tricks

### 1️⃣ Binary Search on Answer (Search Space Reduction)

Binary Search is often applied when:

* The answer lies in a **range of values**
* A condition switches from **false → true** or **true → false**

📌 Example Problems:

* Minimum speed to finish work
* Capacity to ship packages
* Allocate minimum pages

👉 Trick:

```text
If condition(mid) is true → move right
Else → move left
```

This is called **Binary Search on Answer**.

---

### 2️⃣ First Occurrence / Last Occurrence

Used when duplicates exist.

* First occurrence → keep moving left even after finding target
* Last occurrence → keep moving right

👉 Key change:

* Do NOT return immediately when found
* Store answer and continue searching

---

### 3️⃣ Lower Bound & Upper Bound

* **Lower Bound**: First index where `value >= target`
* **Upper Bound**: First index where `value > target`

These are extremely popular in:

* Competitive programming
* C++ STL concepts

---

### 4️⃣ Binary Search on Rotated Sorted Array

Even if the array is rotated:

* One half is always sorted
* Identify sorted half and discard the other

📌 Classic Interview Pattern

---

### 5️⃣ Overflow-Safe Middle Calculation (Important!)

Instead of:

```js
mid = Math.floor((left + right) / 2)
```

Use:

```js
mid = left + Math.floor((right - left) / 2)
```

This avoids **integer overflow** in languages like Java / C++.

---

## ⏱️ Time Complexity (Deep Explanation)

Binary Search reduces the problem size by **half every iteration**.

### Mathematical View:

If:

```text
n / 2^k = 1
```

Then:

```text
k = log₂(n)
```

So the maximum number of steps is `log₂(n)`.

### Time Complexity Summary:

| Case         | Complexity |
| ------------ | ---------- |
| Best Case    | O(1)       |
| Average Case | O(log n)   |
| Worst Case   | O(log n)   |

---

## 💾 Space Complexity (Detailed)

### Iterative Binary Search

* Uses constant variables
* **Space Complexity: O(1)**

### Recursive Binary Search

* Uses recursion stack
* Depth of recursion = `log n`
* **Space Complexity: O(log n)**

👉 Interview Tip:

> Prefer **iterative binary search** when asked about space optimization.

---

## 🧠 When to Think of Binary Search?

Ask yourself:

* Is the data **sorted**?
* Can the problem be reduced to **true/false condition**?
* Is the search space **monotonic**?

If YES → Binary Search is likely the solution.

---

## ⚠️ Common Interview Traps

❌ Forgetting sorted condition
❌ Infinite loop due to wrong boundaries
❌ Returning too early in first/last occurrence
❌ Wrong mid calculation

---

## 🧠 Final Summary

* Binary Search is a **logarithmic time algorithm**
* Works by repeatedly halving the search space
* Extremely powerful beyond simple searching
* Core idea behind many hard problems

### Key Takeaways:

✔ Always check for **sorted / monotonic property**
✔ Use **Binary Search on Answer** for optimization problems
✔ Prefer iterative approach for better space usage
✔ Mastering Binary Search unlocks many DSA patterns

🚀 If you master Binary Search, you master half of DSA interviews.

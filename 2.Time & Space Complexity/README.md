# ⏱️ Time & Space Complexity – Big O Notation (Beginner Friendly)

This README is designed as **Canva-ready notes** and **interview revision material**.
It explains **Time Complexity**, **Space Complexity**, and **Big-O notation** from scratch with examples.

---

## 📘 What is Time Complexity?

**Time Complexity** measures how the **running time of an algorithm grows** as the input size `n` increases.

### Important Points ⭐

* Focuses on **number of operations**, not real clock time
* Machine, language, or hardware do NOT matter
* Measured using **Big-O notation**
* Describes **growth rate**, not exact time

---

## 🧠 What is Big-O Notation?

**Big-O notation** represents the **worst-case time or space usage** of an algorithm.

### Key Rules (Interview Gold ⭐)

* Always consider the **worst case**
* Ignore constants → `O(2n)` becomes `O(n)`
* Ignore smaller terms → `O(n² + n)` becomes `O(n²)`
* Focus only on the **dominant factor**

---

## 🔍 Example 1: Linear Search (Very Detailed for Beginners)

### 🧠 What is happening?

We check **each element one by one** until we find the target.

Think of it like:

> Searching a name in an unsorted notebook, page by page.

---

### JavaScript Code (With Line-by-Line Explanation)

```js
function linearSearch(arr, target) {
  // Loop through each element
  for (let i = 0; i < arr.length; i++) {

    // Compare current element with target
    if (arr[i] === target) {
      return i; // Stop immediately if found
    }
  }

  // If loop finishes, element not found
  return -1;
}
```

---

### 🧪 Dry Run Example

Array: `[2, 1, 3, 5, 4, 7]`
Target: `5`

| Step | i | arr[i] | Comparison | Result       |
| ---- | - | ------ | ---------- | ------------ |
| 1    | 0 | 2      | 2 == 5 ❌   | continue     |
| 2    | 1 | 1      | 1 == 5 ❌   | continue     |
| 3    | 2 | 3      | 3 == 5 ❌   | continue     |
| 4    | 3 | 5      | 5 == 5 ✅   | found → stop |

---

### ⏱ Time Complexity Explained

* Best Case: element at index 0 → **1 step → O(1)**
* Worst Case: element at end / absent → **n steps → O(n)**

➡ If array size doubles, work doubles.

---|------------|
| 10 | 10 |
| 100 | 100 |
| 1000 | 1000 |

➡ Growth is **linear**

---

## 🔍 Example 2: Binary Search (Very Detailed for Beginners)

### 🧠 What is happening?

We **cut the array into half** again and again.

Think of it like:

> Finding a word in a dictionary by opening the middle page.

⚠️ Works only on **sorted arrays**.

---

### JavaScript Code (With Explanation)

```js
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Found
    }
    else if (arr[mid] < target) {
      left = mid + 1; // Search right half
    }
    else {
      right = mid - 1; // Search left half
    }
  }
  return -1;
}
```

---

### 🧪 Dry Run Example

Array: `[1, 3, 4, 7, 9, 10, 15]`
Target: `15`

| Step | left | right | mid | arr[mid] | Action   |
| ---- | ---- | ----- | --- | -------- | -------- |
| 1    | 0    | 6     | 3   | 7        | go right |
| 2    | 4    | 6     | 5   | 10       | go right |
| 3    | 6    | 6     | 6   | 15       | found    |

---

### ⏱ Time Complexity Explained

Each step halves the problem:

```
n → n/2 → n/4 → n/8 → 1
```

So number of steps = **log₂ n**

➡ Even for very large `n`, steps grow slowly.

---|-------|
| 10 | ~3 |
| 100 | ~7 |
| 1000 | ~10 |

➡ Growth is **logarithmic**

---

## 📈 Common Time Complexities (With Intuition)

| Complexity   | Meaning        | Example               |
| ------------ | -------------- | --------------------- |
| `O(1)`       | Constant       | Access array element  |
| `O(log n)`   | Halves input   | Binary Search         |
| `O(n)`       | Linear         | Linear Search         |
| `O(n log n)` | Divide + merge | Merge Sort            |
| `O(n²)`      | Nested loops   | Matrix traversal      |
| `O(2ⁿ)`      | Exponential    | Brute-force recursion |

### Efficiency Order (Best → Worst)

```
O(1) > O(log n) > O(n) > O(n log n) > O(n²) > O(2ⁿ) > O(n!)
```

---

## 💾 What is Space Complexity? (Beginner Friendly)

### 🧠 Simple Meaning

Space Complexity = **extra memory** used by an algorithm.

We do NOT count:

* Input array itself

We DO count:

* New variables
* New arrays
* Function call stack

---

### 🔍 Example: Finding Maximum (No Extra Space)

```js
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
```

* Variables used: `i`, `max`
* Do they grow with n? ❌

✅ Space = `O(1)`
✅ Time = `O(n)`

---

### 🔍 Example: Creating New Array (Extra Space)

```js
function doubleArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}
```

* New array of size `n`

✅ Space = `O(n)`

---

## 🧠 Space Complexity Rules ⭐

| What You Create        | Space   |
| ---------------------- | ------- |
| Variables (`i`, `max`) | `O(1)`  |
| Array of size `n`      | `O(n)`  |
| 2D matrix `n×n`        | `O(n²)` |
| Recursion depth `n`    | `O(n)`  |

---

## 🔍 Space Complexity Examples

### Example 1: Constant Space

```js
function getElement(arr) {
  return arr[4];
}
```

* Space: `O(1)`
* Time: `O(1)`

---

### Example 2: Extra Array

```js
function doubleArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i] * 2;
  }
  return newArr;
}
```

* Space: `O(n)`
* Time: `O(n)`

---

## ⚠️ Time vs Space (Don’t Confuse)

### Nested Loops

```js
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {}
}
```

* Time: `O(n²)`
* Space: `O(1)`

### Independent Loops

```js
for (let i = 0; i < n; i++) {}
for (let j = 0; j < n; j++) {}
```

* Time: `O(2n)` → `O(n)`
* Space: `O(1)`

---

## 🧮 Simplifying Big-O Expressions

| Expression        | Final Big-O |
| ----------------- | ----------- |
| `O(3n)`           | `O(n)`      |
| `O(n² + n)`       | `O(n²)`     |
| `O(n³ + n² + n)`  | `O(n³)`     |
| `O(n² + n log n)` | `O(n²)`     |

---

## 🧠 Key Takeaways (Interview Gold ✨)

* Big-O describes **worst-case behavior**
* Ignore constants and smaller terms
* Binary Search ≫ Linear Search
* Loops affect **time**, not space
* Creating new arrays increases space

---

## 🧾 Final Summary

* **Time Complexity** → how fast algorithm grows
* **Space Complexity** → how much extra memory is used
* Big-O focuses on scalability
* Prefer `O(log n)` and `O(n log n)`
* Avoid `O(n²)` and above when possible

---

🚀 **These concepts are the backbone of DSA and interviews. Master them well.**

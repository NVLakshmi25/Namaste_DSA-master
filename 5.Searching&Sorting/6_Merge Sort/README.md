# Merge Sort (Divide & Conquer Algorithm)

## 📌 Definition

Merge Sort is an efficient, comparison-based sorting algorithm that follows the **Divide and Conquer** strategy. It divides the array into smaller subarrays, sorts them recursively, and then **merges** the sorted subarrays to produce the final sorted array.

---

## 🧠 Core Idea (Divide & Conquer)

1. **Divide** the array into two halves.
2. **Recursively sort** each half.
3. **Merge** the two sorted halves into one sorted array.
4. Continue until the base condition is reached.

---

## 🧩 Syntax (JavaScript)

```js
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let res = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            res.push(left[i++]);
        } else {
            res.push(right[j++]);
        }
    }

    return [...res, ...left.slice(i), ...right.slice(j)];
}
```

---

## 🔍 Explanation of Important Conditions

### ✅ Base Condition

```js
if (arr.length <= 1) return arr;
```

* Stops recursion
* A single element array is already sorted

---

### ✅ Divide Step

```js
let mid = Math.floor(arr.length / 2);
```

* Finds the midpoint
* Splits array into left and right halves

---

### ✅ Recursive Calls

```js
mergeSort(arr.slice(0, mid));
mergeSort(arr.slice(mid));
```

* Recursively sorts both halves

---

### ✅ Merge Step

```js
return merge(left, right);
```

* Combines two sorted arrays into one sorted array

---

## 🧪 Example Input

```js
let arr = [8, 4, 5, 6, 9, 1, 3, 6];
```

---

## 🖼️ Visual Diagram (Divide & Merge Tree)

Below is a **visual recursion tree diagram** that shows how Merge Sort divides the array and then merges it back:

```
                          [8, 4, 5, 6, 9, 1, 3, 6]
                                   |
                 -------------------------------------------------
                 |                                               |
           [8, 4, 5, 6]                                     [9, 1, 3, 6]
                 |                                               |
         -------------------                             -------------------
         |                 |                             |                 |
      [8, 4]             [5, 6]                        [9, 1]            [3, 6]
         |                 |                             |                 |
      -------           -------                        -------           -------
      |     |           |     |                        |     |           |     |
    [8]   [4]         [5]   [6]                      [9]   [1]         [3]   [6]
```

---

## 🔁 Merge Phase (Bottom-Up Visualization)

```
[8] + [4]   → [4, 8]
[5] + [6]   → [5, 6]
[4, 8] + [5, 6] → [4, 5, 6, 8]

[9] + [1]   → [1, 9]
[3] + [6]   → [3, 6]
[1, 9] + [3, 6] → [1, 3, 6, 9]

[4, 5, 6, 8] + [1, 3, 6, 9]
        ↓
[1, 3, 4, 5, 6, 6, 8, 9]
```

---

## 📝 Complete Dry Run (Step-by-Step)

### Initial Array

```
[8, 4, 5, 6, 9, 1, 3, 6]
```

---

### 🔹 Level 1 – Divide

```
Left  = [8, 4, 5, 6]
Right = [9, 1, 3, 6]
```

---

### 🔹 Level 2 – Divide Further

```
[8, 4]   [5, 6]      [9, 1]   [3, 6]
```

---

### 🔹 Level 3 – Divide to Single Elements

```
[8] [4] [5] [6] [9] [1] [3] [6]
```

(Base condition reached)

---

## 🔁 Merge Phase (Bottom-Up)

### Merge [8] and [4]

```
[4, 8]
```

### Merge [5] and [6]

```
[5, 6]
```

### Merge [4, 8] and [5, 6]

```
[4, 5, 6, 8]
```

---

### Merge [9] and [1]

```
[1, 9]
```

### Merge [3] and [6]

```
[3, 6]
```

### Merge [1, 9] and [3, 6]

```
[1, 3, 6, 9]
```

---

### 🔁 Final Merge

Merge:

```
[4, 5, 6, 8] and [1, 3, 6, 9]
```

Step-by-step comparison:

```
1 → 3 → 4 → 5 → 6 → 6 → 8 → 9
```

---

## ✅ Final Sorted Array

```
[1, 3, 4, 5, 6, 6, 8, 9]
```

---

## ⏱️ Time & Space Complexity

| Case    | Time Complexity |
| ------- | --------------- |
| Best    | O(n log n)      |
| Average | O(n log n)      |
| Worst   | O(n log n)      |

* **Space Complexity:** O(n)
* Uses extra space for merging

---

## ✅ Summary

* Uses **Divide & Conquer** strategy
* Always guarantees O(n log n) time
* Stable sorting algorithm
* Excellent for large datasets
* Preferred over quadratic sorting algorithms

✨ Merge Sort is powerful, predictable, and interview‑favorite!

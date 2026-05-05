# 🫧 Bubble Sort – Complete Guide (README)

Bubble Sort is one of the **simplest sorting algorithms** and is often taught as a first step to understand how sorting works internally.

---

## 📌 What is Bubble Sort?

**Bubble Sort** is a comparison-based sorting algorithm where **adjacent elements are compared and swapped** if they are in the wrong order.

With every pass:

* The **largest element moves (bubbles) to the end** of the array
* This process repeats until the array becomes sorted

---

## 🧠 Intuition (Real-Life Analogy)

Imagine bubbles in water:

* Larger bubbles rise to the top
* Smaller ones stay below

Similarly in Bubble Sort:

* Larger numbers move towards the end
* Smaller numbers move towards the beginning

---

## ✅ Key Characteristics

* Comparison-based algorithm
* In-place sorting (no extra memory)
* Stable sorting algorithm
* Best for **learning**, not for large datasets

---

## 🧩 Algorithm Steps

1. Start from the first element
2. Compare it with the next element
3. Swap if they are in the wrong order
4. Continue till the end of the array
5. Repeat the process for remaining elements
6. Stop early if no swaps occur (optimization)

---

## 🧪 Syntax (JavaScript – Optimized)

```js
function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let isSwapped = false;

        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSwapped = true;
            }
        }

        if (!isSwapped) break;
    }
    return arr;
}
```

---

## 📘 Example

**Input:**

```js
[5, 4, 9, 15, 7, 1, 0]
```

**Output:**

```js
[0, 1, 4, 5, 7, 9, 15]
```

---

## 🧮 Dry Run (Step-by-Step)

Array: `[5, 2, 4, 1]`

---

## 🔁 For Loop Dry Run (Very Important 🔥)

Let:

```text
arr = [5, 2, 4, 1]
n = 4
```

### 🔹 Outer Loop (Passes)

Outer loop:

```js
for (let i = 0; i < n - 1; i++)
```

This controls **number of passes**.

---

### ✅ Pass 1 (i = 0)

Inner loop runs:

```js
j < n - 1 - i  →  j < 3
```

| j | Compare | Action | Array        |
| - | ------- | ------ | ------------ |
| 0 | 5 & 2   | Swap   | [2, 5, 4, 1] |
| 1 | 5 & 4   | Swap   | [2, 4, 5, 1] |
| 2 | 5 & 1   | Swap   | [2, 4, 1, 5] |

✔ Largest element `5` fixed at last position

---

### ✅ Pass 2 (i = 1)

Inner loop:

```js
j < 2
```

| j | Compare | Action  | Array        |
| - | ------- | ------- | ------------ |
| 0 | 2 & 4   | No swap | [2, 4, 1, 5] |
| 1 | 4 & 1   | Swap    | [2, 1, 4, 5] |

✔ Second largest `4` fixed

---

### ✅ Pass 3 (i = 2)

Inner loop:

```js
j < 1
```

| j | Compare | Action | Array        |
| - | ------- | ------ | ------------ |
| 0 | 2 & 1   | Swap   | [1, 2, 4, 5] |

✔ Array is now sorted

---

### 🚀 Optimization Check

If `isSwapped === false` in any pass:

* No swaps happened
* Array already sorted
* Loop breaks early

---

## 🎯 Important Bubble Sort Tricks

### 1️⃣ Early Exit Optimization

If no swaps occur in a pass:

* Array is already sorted
* Stop further iterations

This improves best-case performance to **O(n)**.

---

### 2️⃣ Reducing Comparisons

After each pass:

* Last element is already sorted
* Inner loop runs till `n - 1 - i`

---

## ⏱️ Time Complexity (Detailed)

| Case         | Complexity | Explanation                 |
| ------------ | ---------- | --------------------------- |
| Best Case    | O(n)       | Already sorted + early exit |
| Average Case | O(n²)      | Random order                |
| Worst Case   | O(n²)      | Reverse sorted              |

### Why O(n²)?

* Two nested loops
* Each element compared with others

---

## 💾 Space Complexity

* Uses constant extra space
* Sorting done in the same array

**Space Complexity:** `O(1)`

---

## ⚠️ Common Mistakes

❌ Forgetting optimization flag
❌ Wrong loop boundaries
❌ Assuming Bubble Sort is efficient for large inputs

---

## 🌟 Advantages

✔ Very easy to understand
✔ Simple implementation
✔ Stable sorting algorithm

---

## 🚫 Limitations

✘ Very slow for large datasets
✘ Not used in real-world applications
✘ Inefficient compared to Merge / Quick Sort

---

## 🧠 When to Use Bubble Sort?

* Educational purposes
* Very small datasets
* When simplicity matters more than performance

---

## 🧠 Final Summary

* Bubble Sort repeatedly swaps adjacent elements
* Largest elements move to the end in each pass
* Best case: `O(n)` (optimized)
* Worst case: `O(n²)`
* Space complexity: `O(1)`

📌 Bubble Sort helps you understand the **foundation of sorting algorithms**.

Once you master this, advanced sorting becomes much easier 🚀

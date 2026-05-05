# Insertion Sort

## 📌 Definition

Insertion Sort is a simple and intuitive sorting algorithm that works the way you sort playing cards in your hand. It builds the **sorted array one element at a time** by taking each new element and inserting it into its correct position in the already sorted part of the array.

---

## 🧠 Core Idea

* Assume the **first element is already sorted**.
* Take the next element (`curr`) from the unsorted part.
* Shift all elements in the sorted part that are **greater than `curr`** one position to the right.
* Insert `curr` at its correct position.
* Repeat until the array is sorted.

---

## 🧩 Syntax (JavaScript)

```js
function insertionSort(a) {
    let n = a.length;

    for (let i = 1; i < n; i++) {
        let curr = a[i];
        let prev = i - 1;

        while (prev >= 0 && a[prev] > curr) {
            a[prev + 1] = a[prev];
            prev--;
        }

        a[prev + 1] = curr;
    }
    return a;
}
```

---

## 🔍 Understanding the Loop Conditions

### ✅ Outer `for` Loop

```js
for (let i = 1; i < n; i++)
```

* Starts from index **1**
* Index `0` is already considered sorted
* Each iteration inserts one element into the sorted part

---

### ✅ `curr` and `prev`

```js
let curr = a[i];
let prev = i - 1;
```

* `curr`: element to be placed correctly
* `prev`: last index of the sorted portion

---

### ✅ `while` Loop Condition

```js
while (prev >= 0 && a[prev] > curr)
```

* `prev >= 0` → prevents index underflow
* `a[prev] > curr` → shifts larger elements to the right

---

## 🧪 Example

```js
let arr = [7, 1, 5, 12, -10, 0, 4, 3, 2];
```

---

## 📝 Complete Dry Run (Step-by-Step)

Initial Array:

```
[7, 1, 5, 12, -10, 0, 4, 3, 2]
```

---

### 🔁 Pass 1 (i = 1, curr = 1)

Sorted part: `[7]`

* Compare 7 > 1 → shift 7
* Insert 1 at index 0

```
[1, 7, 5, 12, -10, 0, 4, 3, 2]
```

---

### 🔁 Pass 2 (i = 2, curr = 5)

Sorted part: `[1, 7]`

* 7 > 5 → shift
* 1 < 5 → stop

```
[1, 5, 7, 12, -10, 0, 4, 3, 2]
```

---

### 🔁 Pass 3 (i = 3, curr = 12)

Sorted part: `[1, 5, 7]`

* 12 is already in correct position

```
[1, 5, 7, 12, -10, 0, 4, 3, 2]
```

---

### 🔁 Pass 4 (i = 4, curr = -10)

Sorted part: `[1, 5, 7, 12]`

* Shift 12, 7, 5, 1
* Insert -10 at index 0

```
[-10, 1, 5, 7, 12, 0, 4, 3, 2]
```

---

### 🔁 Pass 5 (i = 5, curr = 0)

Sorted part: `[-10, 1, 5, 7, 12]`

* Shift 12, 7, 5, 1
* Insert 0 at index 1

```
[-10, 0, 1, 5, 7, 12, 4, 3, 2]
```

---

### 🔁 Pass 6 (i = 6, curr = 4)

Sorted part: `[-10, 0, 1, 5, 7, 12]`

* Shift 12, 7, 5
* Insert 4 at index 3

```
[-10, 0, 1, 4, 5, 7, 12, 3, 2]
```

---

### 🔁 Pass 7 (i = 7, curr = 3)

Sorted part: `[-10, 0, 1, 4, 5, 7, 12]`

* Shift 12, 7, 5, 4
* Insert 3 at index 3

```
[-10, 0, 1, 3, 4, 5, 7, 12, 2]
```

---

### 🔁 Pass 8 (i = 8, curr = 2)

Sorted part: `[-10, 0, 1, 3, 4, 5, 7, 12]`

* Shift 12, 7, 5, 4, 3
* Insert 2 at index 3

```
[-10, 0, 1, 2, 3, 4, 5, 7, 12]
```

---

## ✅ Final Sorted Array

```
[-10, 0, 1, 2, 3, 4, 5, 7, 12]
```

---

## ⏱️ Time & Space Complexity

| Case                        | Time Complexity |
| --------------------------- | --------------- |
| Best Case (Already Sorted)  | O(n)            |
| Average Case                | O(n²)           |
| Worst Case (Reverse Sorted) | O(n²)           |

* **Space Complexity:** O(1) (In-place)

---

## ✅ Summary

* Builds the sorted array gradually from left to right
* Very efficient for **nearly sorted arrays**
* Uses **shifting instead of swapping**
* Stable and in-place sorting algorithm
* Ideal for learning and small datasets

✨ Insertion Sort is simple, elegant, and intuitive!

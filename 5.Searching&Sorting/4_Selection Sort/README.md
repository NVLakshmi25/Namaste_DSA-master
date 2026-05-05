# Selection Sort

## 📌 Definition

Selection Sort is a simple comparison-based sorting algorithm. It repeatedly selects the **smallest element** from the unsorted part of the array and moves it to the **front**, growing the sorted portion step by step.

---

## 🧠 How Selection Sort Works (Idea)

1. Divide the array into two parts:

   * **Sorted part** (initially empty)
   * **Unsorted part** (initially the whole array)
2. Find the minimum element in the unsorted part.
3. Swap it with the first element of the unsorted part.
4. Move the boundary of the sorted part one step to the right.
5. Repeat until the array is sorted.

---

## 🧩 Syntax (JavaScript)

```js
function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let min = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        if (min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}
```

---

## 🔍 Understanding the `for` Loop Conditions

### ✅ Outer Loop

```js
for (let i = 0; i < n - 1; i++)
```

* `i` represents the **current position** to be filled with the smallest element.
* Runs only `n-1` times because the **last element is automatically sorted**.

### ✅ Inner Loop

```js
for (let j = i + 1; j < n; j++)
```

* Starts from `i + 1` because elements before `i` are already sorted.
* Searches for the **minimum element** in the unsorted portion.

---

## ⚙️ Remaining Conditions Explained

### 🔹 `min` Variable

```js
let min = i;
```

* Stores the index of the **smallest element found** during each pass.

### 🔹 Comparison Condition

```js
if (arr[j] < arr[min])
```

* Updates `min` when a smaller element is found.

### 🔹 Swap Condition

```js
if (min !== i)
```

* Prevents unnecessary swaps when the smallest element is already in place.

---

## 🧪 Example

```js
let arr = [7, 1, 5, 12, -10, 0, 4, 3, 2];
selectionSort(arr);
```

### Output

```js
[-10, 0, 1, 2, 3, 4, 5, 7, 12]
```

---

## 📝 Dry Run

Initial Array:

```
[7, 1, 5, 12, -10, 0, 4, 3, 2]
```

### Pass 1 (i = 0)

* Minimum = -10
* Swap with 7

```
[-10, 1, 5, 12, 7, 0, 4, 3, 2]
```

### Pass 2 (i = 1)

* Minimum = 0
* Swap with 1

```
[-10, 0, 5, 12, 7, 1, 4, 3, 2]
```

### Pass 3 (i = 2)

* Minimum = 1

```
[-10, 0, 1, 12, 7, 5, 4, 3, 2]
```

### Continue...

After all passes:

```
[-10, 0, 1, 2, 3, 4, 5, 7, 12]
```

---

## ⏱️ Time & Space Complexity

| Case    | Time Complexity |
| ------- | --------------- |
| Best    | O(n²)           |
| Average | O(n²)           |
| Worst   | O(n²)           |

* **Space Complexity:** `O(1)` (In-place sorting)

---

## ✅ Summary

* Selection Sort is easy to understand and implement.
* Uses **two loops** to repeatedly find the smallest element.
* Always performs `n²` comparisons, regardless of input order.
* Best suited for **learning sorting concepts**, not large datasets.

✨ Great choice for mastering sorting fundamentals!

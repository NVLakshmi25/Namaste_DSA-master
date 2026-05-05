# Linear Search

## 📌 Definition

Linear Search is a simple searching algorithm that traverses an array **sequentially**, checking each element one by one until the target element is found or the array ends. It works on **unsorted arrays** and is often the first searching technique learned in Data Structures.

---

## 🧠 Key Idea

* Start from the first element
* Compare each element with the target
* Stop when the target is found
* If not found till the end, return `-1`

---

## 🧾 Syntax (JavaScript)

```js
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
```

---

## 💡 Example

```js
let arr = [4, 9, 1, 0, 2, 10];
let target = 10;

let result = linearSearch(arr, target);
console.log(result); // Output: 5
```

---

## 🔍 Dry Run

**Array:** `[4, 9, 1, 0, 2, 10]`
**Target:** `10`

| Index (i) | arr[i] | Comparison with target | Result       |
| --------- | ------ | ---------------------- | ------------ |
| 0         | 4      | 4 === 10 ❌             | Continue     |
| 1         | 9      | 9 === 10 ❌             | Continue     |
| 2         | 1      | 1 === 10 ❌             | Continue     |
| 3         | 0      | 0 === 10 ❌             | Continue     |
| 4         | 2      | 2 === 10 ❌             | Continue     |
| 5         | 10     | 10 === 10 ✅            | **Return 5** |

➡️ Target found at **index 5**.

---

## ⏱️ Time Complexity

* **Best Case:** `O(1)` (target found at first index)
* **Worst Case:** `O(n)` (target at last index or not present)

## 🧮 Space Complexity

* `O(1)` (no extra space used)

---

## ✅ When to Use Linear Search

* When the array is **unsorted**
* When the dataset is **small**
* When simplicity is more important than performance

---

## 📝 Summary

* Linear Search checks elements **one by one**
* Easy to understand and implement
* Works on both sorted and unsorted arrays
* Inefficient for large datasets but great for basics

🚀 *Master this first — it builds the foundation for predicting better algorithms!*

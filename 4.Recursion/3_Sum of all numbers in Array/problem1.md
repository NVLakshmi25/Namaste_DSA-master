# 🔢 Sum of ONLY Odd Numbers in an Array (Using Recursion)

> **Canva‑ready README** – explained for absolute beginners

---

## 🎯 Problem Statement

Find the **sum of only ODD numbers** in an array using **recursion**.

### Example

```js
arr = [5, 2, 0, 3, 6, 1]
```

### Odd Numbers in Array

```
5, 3, 1
```

### Expected Output

```
5 + 3 + 1 = 9
```

---

## 🧠 Recursive Thinking (Most Important)

Ask yourself 👇

> **If I already know the sum of odd numbers till index (n − 1), can I find the sum till index n?**

Yes:

```
If arr[n] is odd → arr[n] + sum(n - 1)
If arr[n] is even → sum(n - 1)
```

This condition‑based addition is the key idea.

---

## ✅ Base Case (Stopping Condition)

```js
if (n === 0)
```

Why?

* Index `0` is the first element
* No elements before it
* Prevents infinite recursion

At index `0`:

* If element is odd → return it
* If even → return `0`

---

## ✅ Recursive Code (Clean & Safe)

```js
let arr = [5, 2, 0, 3, 6, 1];

function sum(n) {
  let isOdd = (arr[n] % 2 !== 0);

  // Base condition
  if (n === 0) {
    return isOdd ? arr[n] : 0;
  }

  // Recursive case
  if (isOdd) {
    return arr[n] + sum(n - 1);
  } else {
    return sum(n - 1);
  }
}

console.log(sum(arr.length - 1));
```

---

## 🪜 Call Flow (Index Based)

```
sum(5) → sum(4) → sum(3) → sum(2) → sum(1) → sum(0)
```

Recursion always **moves toward the base case**.

---

## 🧪 Simple Dry Run (Beginner Friendly)

### Array with Index

```
Index:  0  1  2  3  4  5
Array: [5, 2, 0, 3, 6, 1]
```

---

### Step‑by‑Step Execution

```
sum(5) → 1 is odd  → 1 + sum(4)
sum(4) → 6 is even → sum(3)
sum(3) → 3 is odd  → 3 + sum(2)
sum(2) → 0 is even → sum(1)
sum(1) → 2 is even → sum(0)
sum(0) → 5 is odd  → return 5
```

---

## 🔁 Returning Back (Where Calculation Happens)

```
sum(1) = 5
sum(2) = 5
sum(3) = 3 + 5 = 8
sum(4) = 8
sum(5) = 1 + 8 = 9
```

📌 **Final Answer:** `9`

---

## 🧠 Beginner Mental Model

* Function goes **index by index**
* Even numbers are **ignored**
* Odd numbers are **added while returning**

Think like filtering odd numbers first, then adding them 📦

---

## ⚠️ Common Mistakes

❌ Forgetting base case → stack overflow

❌ Adding even numbers by mistake

❌ Not reducing index (`sum(n)` instead of `sum(n - 1)`)

---

## ⏱️ Complexity

* **Time Complexity:** `O(n)`
* **Space Complexity:** `O(n)` (recursive call stack)

---

## ⭐ One‑Line Rule (Exam / Interview)

> **In recursion, we decide to add or skip, but we always move toward the base case.**

---

## 🎨 Canva Slide Tip

* 1 slide → Problem
* 1 slide → Logic (odd / even)
* 1 slide → Code
* 1 slide → Dry run
* 1 slide → Final answer

✅ Ready to paste directly into **Canva slides**.
 
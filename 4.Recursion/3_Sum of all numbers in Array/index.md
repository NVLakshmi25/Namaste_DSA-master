# 🧮 Sum of All Numbers in an Array (Using Recursion)

> **Canva-ready README** – beginner friendly, visual, and interview safe

---

## 🎯 Problem Statement

Find the **sum of all elements in an array** using **recursion**.

### Example

```js
arr = [5, 3, 2, 0, 1]
```

### Expected Output

```
5 + 3 + 2 + 0 + 1 = 11
```

---

## 🧠 Recursive Thinking (Most Important)

Ask this question 👇

> **If I know the sum of elements till index (n − 1), can I find the sum till index n?**

Yes:

```
sum(n) = arr[n] + sum(n - 1)
```

This single line is the **core idea of recursion**.

---

## ✅ Base Case (Stopping Condition)

We must stop recursion somewhere.

```js
if (n === 0) return arr[0];
```

### Why?

* Index `0` is the first element
* No previous elements left
* Prevents infinite recursion

---

## ✅ Recursive Code (Clean & Safe)

```js
let arr = [5, 3, 2, 0, 1];

function sum(n) {
  if (n === 0) return arr[n];   // base case
  return arr[n] + sum(n - 1);   // recursive case
}

console.log(sum(arr.length - 1));
```

---

## 🪜 Call Flow (Index Based)

```
sum(4) → sum(3) → sum(2) → sum(1) → sum(0)
```

Recursion **goes down first**, then returns back.

---

## 🧪 Simple Dry Run (Beginner Friendly)

### Array with Index

```
Index:  0  1  2  3  4
Array: [5, 3, 2, 0, 1]
```

### Step-by-Step

```
sum(4) = 1 + sum(3)
sum(3) = 0 + sum(2)
sum(2) = 2 + sum(1)
sum(1) = 3 + sum(0)
sum(0) = 5   ✅ base case
```

---

## 🔁 Returning Back (Key Concept)

```
sum(1) = 3 + 5  = 8
sum(2) = 2 + 8  = 10
sum(3) = 0 + 10 = 10
sum(4) = 1 + 10 = 11
```

📌 **Final Answer:** `11`

---

## 🧠 Beginner Mental Model

* Recursive calls **go down** until base case
* Nothing is calculated immediately
* Actual addition happens **while coming back**

Think like opening boxes 📦 and closing them one by one.

---

## ⚠️ Common Mistakes

❌ Forgetting base case → stack overflow

❌ Wrong base case

```js
if (n === 1) return arr[1]; // unsafe
```

❌ Not reducing input

```js
return arr[n] + sum(n); // infinite recursion
```

---

## ⏱️ Complexity

* **Time Complexity:** `O(n)`
* **Space Complexity:** `O(n)` (call stack)

---

## ⭐ One-Line Rule (Exam / Interview)

> **Recursion goes down to the base case, then builds the answer while returning.**

---

## 🎨 Canva Slide Tip

* 1 slide → Problem
* 1 slide → Recursive relation
* 1 slide → Code
* 1 slide → Dry run
* 1 slide → Stack idea

✅ This README is ready to be pasted directly into **Canva slides**.

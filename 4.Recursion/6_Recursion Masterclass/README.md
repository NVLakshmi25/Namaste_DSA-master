# 🔢 Fibonacci Number (LeetCode 509)

> **Canva-ready README** – beginner friendly → interview ready

---

## 🎯 Problem Statement

Find the **nth Fibonacci number**.

### Fibonacci Definition

```
F(0) = 0
F(1) = 1
F(n) = F(n − 1) + F(n − 2)   (for n ≥ 2)
```

### Sequence

```
Index: 0  1  2  3  4  5  6  7  8
Value: 0, 1, 1, 2, 3, 5, 8, 13, 21
```

Examples:

* `fib(2) = 1`
* `fib(5) = 5`
* `fib(8) = 21`

---

## 🧠 Recursive Thinking (MOST IMPORTANT)

Ask yourself 👇

> **If I already know Fibonacci of (n − 1) and (n − 2), can I find Fibonacci of n?**

Yes:

```
fib(n) = fib(n - 1) + fib(n - 2)
```

This relation defines the recursion.

---

## ✅ Base Cases (Stopping Condition)

```js
fib(0) = 0
fib(1) = 1
```

Why?

* These are the **starting values** of Fibonacci
* They stop infinite recursion

---

## 1️⃣ Simple Recursive Solution (For Learning)

```js
function fib(n) {
  if (n <= 1) return n;      // base cases
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(5)); // 5
```

---

## 🪜 Call Flow (n = 5)

```
fib(5)
= fib(4) + fib(3)
= (fib(3) + fib(2)) + (fib(2) + fib(1))
= ...
```

Same values are calculated **again and again** ❌

---

## ❌ Why This Is Slow

* Repeated calculations
* Time Complexity: **O(2ⁿ)** ❌
* Works only for small `n`

📌 Good for learning recursion, **bad for performance**

---

## 2️⃣ Optimized Recursive Solution (Memoization)

```js
function fib(n, memo = {}) {
  if (n <= 1) return n;

  if (memo[n]) return memo[n];

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

console.log(fib(8)); // 21
```

### Complexity

* **Time:** `O(n)`
* **Space:** `O(n)`

---

## 3️⃣ ✅ BEST Solution (Iterative – Interview Favorite ⭐)

```js
function fib(n) {
  if (n <= 1) return n;

  let a = 0, b = 1;

  for (let i = 2; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }

  return b;
}

console.log(fib(5)); // 5
```

---

## 🧪 Iterative Dry Run (n = 5)

```
a = 0, b = 1

i = 2 → c = 1 → a = 1, b = 1
i = 3 → c = 2 → a = 1, b = 2
i = 4 → c = 3 → a = 2, b = 3
i = 5 → c = 5 → a = 3, b = 5
```

📌 **Final Answer:** `5`

---

## ⏱️ Complexity Comparison

| Approach         | Time  | Space  |
| ---------------- | ----- | ------ |
| Simple Recursion | O(2ⁿ) | O(n)   |
| Memoization      | O(n)  | O(n)   |
| Iterative        | O(n)  | O(1) ⭐ |

---

## 🧠 Beginner Mental Model

* Fibonacci = sum of **previous two numbers**
* Recursion explains the idea
* Iteration is best for performance

---

## 🔁 Flow Diagram – Recursive Fibonacci (Conceptual)

This shows **how calls flow**, not values.

```
            fib(5)
           /      \
       fib(4)    fib(3)
       /   \      /   \
   fib(3) fib(2) fib(2) fib(1)
    /  \     /  \
fib(2) fib(1) fib(1) fib(0)
```

📌 Notice:

* Same calls repeat (`fib(3)`, `fib(2)`)
* This is why simple recursion is **slow** ❌

---

## 🔁 Flow Diagram – Optimized (Memoization)

```
fib(5)
 ↓
fib(4)
 ↓
fib(3)
 ↓
fib(2)
 ↓
fib(1)
```

📌 Each value is calculated **once** and stored.

---

## 🔄 Flow Diagram – Iterative Fibonacci (BEST)

```
Start
 ↓
a = 0, b = 1
 ↓
Loop i = 2 → n
 ↓
c = a + b
 ↓
a = b
 ↓
b = c
 ↓
End → return b
```

📌 No recursion, no stack growth.

---

## 🧠 Visual Comparison Summary

| Method      | Flow Style          |
| ----------- | ------------------- |
| Recursion   | Tree-like branching |
| Memoization | Linear with memory  |
| Iteration   | Straight line loop  |

---

## ⭐ Interview One-Liner (MEMORIZE)

> **“Fibonacci is defined as F(n)=F(n−1)+F(n−2) with base cases F(0)=0 and F(1)=1. Simple recursion is exponential, so we optimize using iteration or memoization.”**

---

## 🎨 Canva Slide Tip

* 1 slide → Definition
* 1 slide → Recursive formula
* 1 slide → Recursive code
* 1 slide → Why recursion is slow
* 1 slide → Best iterative solution

✅ Ready to paste directly into **Canva slides**.

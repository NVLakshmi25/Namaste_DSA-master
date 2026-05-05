# 🔢 Factorial of a Number (Using Recursion)

> **Canva-ready README** – beginner friendly, step-by-step, and interview safe

---

## 🎯 Problem Statement

Find the **factorial of a number** using **recursion**.

### Example

```js
n = 5
```

### Expected Output

```
5! = 5 × 4 × 3 × 2 × 1 = 120
```

---

## 🧠 Recursive Thinking (MOST IMPORTANT)

Ask yourself 👇

> **If I already know the factorial of (n − 1), can I find the factorial of n?**

Yes:

```
fact(n) = n × fact(n - 1)
```

This single line is the **core recursion idea**.

---

## ✅ Base Case (Stopping Condition)

```js
if (n === 1) return 1;
```

### Why?

* Factorial of `1` is `1`
* No more multiplication needed
* Prevents infinite recursion

---

## ✅ Recursive Code (Clean & Safe)

```js
function fact(n) {
  // Base case
  if (n === 1) return 1;

  // Recursive case
  return n * fact(n - 1);
}

console.log(fact(5));
```

---

## 🪜 Call Flow

```
fact(5) → fact(4) → fact(3) → fact(2) → fact(1)
```

Recursion goes **down to the base case first**.

---

## 🧪 Simple Dry Run (Beginner Friendly)

### Step-by-Step Execution

```
fact(5) = 5 × fact(4)
fact(4) = 4 × fact(3)
fact(3) = 3 × fact(2)
fact(2) = 2 × fact(1)
fact(1) = 1   ✅ base case
```

---

## 🔁 Returning Back (MOST IMPORTANT)

Now multiplication happens **while returning**:

```
fact(2) = 2 × 1   = 2
fact(3) = 3 × 2   = 6
fact(4) = 4 × 6   = 24
fact(5) = 5 × 24  = 120
```

📌 **Final Answer:** `120`

---

## 🧠 Beginner Mental Model

* Function keeps calling itself with smaller numbers
* Nothing is calculated immediately
* Calculation happens **while coming back**

Think of stacking boxes 📦 and multiplying while removing them.

---

## ⚠️ Common Mistakes

❌ Forgetting base case → stack overflow

❌ Wrong base case

```js
if (n === 0) return 0; // ❌ breaks factorial
```

❌ Not reducing input

```js
return n * fact(n); // ❌ infinite recursion
```

---

## ⏱️ Complexity

* **Time Complexity:** `O(n)`
* **Space Complexity:** `O(n)` (recursive call stack)

---

## ⭐ One-Line Rule (Exam / Interview)

> **Factorial recursion keeps multiplying while returning from the base case.**

---

## 🎨 Canva Slide Tip

* 1 slide → Problem
* 1 slide → Recursive formula
* 1 slide → Code
* 1 slide → Dry run
* 1 slide → Final calculation

✅ Ready to paste directly into **Canva slides**.

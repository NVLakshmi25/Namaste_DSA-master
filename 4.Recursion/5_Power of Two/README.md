# 🔢 Check if a Number is Power of 2 (Using Recursion)

> **Canva-ready README** – beginner friendly, step-by-step, and interview safe

---

## 🎯 Problem Statement

Check whether a given number `n` is a **power of 2** using **recursion**.

### Example

```js
n = 16
```

### Expected Output

```
true
```

---

## 🧠 Recursive Thinking (MOST IMPORTANT)

Ask yourself 👇

> **If a number is a power of 2, can I keep dividing it by 2 until it becomes 1?**

Yes ✅

So the idea is:

```
powerOfTwo(n) = powerOfTwo(n / 2)
```

until `n` becomes `1`.

---

## ✅ Base Case (Stopping Condition)

```js
if (n === 1) return true;
```

### Why?

* `2⁰ = 1`
* If we reach `1`, the number **is** a power of 2
* This stops recursion safely

---

## ❌ Failure Conditions

```js
if (n < 1 || n % 2 !== 0) return false;
```

### Why?

* `n < 1` → cannot be power of 2
* Odd numbers (except 1) cannot be power of 2

---

## ✅ Recursive Code (Clean & Safe)

```js
function powerOfTwo(n) {
  // Base case
  if (n === 1) return true;

  // Failure cases
  if (n < 1 || n % 2 !== 0) return false;

  // Recursive call
  return powerOfTwo(n / 2);
}

console.log(powerOfTwo(16));
```

---

## 🪜 Call Flow

```
powerOfTwo(16)
→ powerOfTwo(8)
→ powerOfTwo(4)
→ powerOfTwo(2)
→ powerOfTwo(1)
```

Recursion keeps **dividing by 2** until it reaches the base case.

---

## 🧪 Simple Dry Run (Beginner Friendly)

### Input

```
n = 16
```

### Step-by-Step Execution

```
powerOfTwo(16)
16 is even → divide by 2

powerOfTwo(8)
8 is even → divide by 2

powerOfTwo(4)
4 is even → divide by 2

powerOfTwo(2)
2 is even → divide by 2

powerOfTwo(1)
return true ✅
```

---

## 📊 Visual Stack Diagram (Easy)

```
| powerOfTwo(1) |  ← base case
| powerOfTwo(2) |
| powerOfTwo(4) |
| powerOfTwo(8) |
| powerOfTwo(16)|
-------------------
(Call Stack)
```

Stack unwinds and returns `true`.

---

## 🧠 Beginner Mental Model

* Keep **dividing by 2**
* Stop when number becomes `1`
* If number becomes odd or ≤ 0 → stop with `false`

Think like folding a paper in half until you reach one piece 📄

---

## ⚠️ Common Mistakes

❌ Missing base case → infinite recursion

❌ Checking only `n % 2 == 0` (missing `n < 1` case)

❌ Returning `true` too early

---

## ⏱️ Complexity

* **Time Complexity:** `O(log n)`
* **Space Complexity:** `O(log n)` (recursive call stack)

---

## ⭐ One-Line Rule (Exam / Interview)

> **A number is power of 2 if it can be divided by 2 repeatedly until it becomes 1.**

---

## 🎨 Canva Slide Tip

* 1 slide → Problem
* 1 slide → Logic (divide by 2)
* 1 slide → Code
* 1 slide → Dry run
* 1 slide → Stack diagram

✅ Ready to paste directly into **Canva slides**.

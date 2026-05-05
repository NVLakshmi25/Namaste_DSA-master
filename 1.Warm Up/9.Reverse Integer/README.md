# 🔢 Reverse a Number – DSA Logic Building

This is a **separate beginner-friendly README** that explains how to **reverse a number using pure logic**.

This problem is a **foundation** for:

* Palindrome check
* Armstrong number
* Digit-based DSA problems

---

## 📘 Problem Statement

Write a function that **reverses a given number**.

### Examples

```
Input:  1234   → Output: 4321
Input: -258    → Output: -852
Input:  100    → Output: 1
```

---

## 🧠 Core Idea (Very Important ⭐)

> **Extract digits one by one from the end and build a new number in reverse order**.

We do this using:

* `% 10` → get last digit
* `/ 10` → remove last digit

---

## 1️⃣ Correct & Interview-Safe Code

```js
function reverseNumber(n) {

    let rev = 0;
    let original = n;       // store original number

    // Work with positive number for logic
    n = Math.abs(n);

    // Reverse digits
    while (n > 0) {
        let rem = n % 10;          // last digit
        rev = rev * 10 + rem;     // build reverse
        n = Math.floor(n / 10);   // remove last digit
    }

    // Restore sign if number was negative
    return original < 0 ? -rev : rev;
}

let num = 1234;
console.log(reverseNumber(num)); // 4321
```

---

## 2️⃣ Output

```
4321
```

---

## 🧪 Dry Run (Step-by-Step)

### Input

```
n = 1234
rev = 0
```

| Iteration | n (before) | rem | rev (after) | n (after ÷10) |
| --------- | ---------- | --- | ----------- | ------------- |
| 1         | 1234       | 4   | 4           | 123           |
| 2         | 123        | 3   | 43          | 12            |
| 3         | 12         | 2   | 432         | 1             |
| 4         | 1          | 1   | 4321        | 0             |

➡ Loop stops when `n == 0`

---

## 🧠 Why `rev = rev * 10 + rem` Works ⭐

Example:

```
rev = 0
rev = 0*10 + 4 → 4
rev = 4*10 + 3 → 43
rev = 43*10 + 2 → 432
rev = 432*10 + 1 → 4321
```

Each step **shifts digits left** and adds the new digit.

---

## ❗ Important Edge Cases

### 🔸 Negative Numbers

```js
-258 → -852
```

Handled using:

```js
n = Math.abs(n);
return original < 0 ? -rev : rev;
```

---

### 🔸 Trailing Zeros

```js
100 → 1
```

Zeros disappear because numbers do not store leading zeros.

---

## 🔁 for Loop Version (Interview Question ⭐)

```js
function reverseNumberFor(n) {
    let rev = 0;
    let original = n;

    for (n = Math.abs(n); n > 0; n = Math.floor(n / 10)) {
        let rem = n % 10;
        rev = rev * 10 + rem;
    }

    return original < 0 ? -rev : rev;
}

console.log(reverseNumberFor(-258)); // -852
```

---

## 🧠 While vs For (Quick Comparison)

| Aspect            | while loop | for loop   |
| ----------------- | ---------- | ---------- |
| Readability       | ⭐⭐⭐        | ⭐⭐         |
| Digit problems    | ⭐ Best     | Acceptable |
| Interview clarity | ⭐⭐⭐        | ⭐⭐         |

---

## 🎯 Tricks & Tips (Beginner Gold ⭐⭐⭐)

### ✅ Trick 1: Digit extraction pattern

If you see:

```
% 10 and / 10
```

👉 You are working with digits.

---

### ✅ Trick 2: Save original value early

Because `n` will be modified.

---

### ✅ Trick 3: Reverse logic reuse

Same logic used in:

* Reverse number
* Palindrome
* Armstrong
* Strong number

---

## 💼 Interview Tip ⭐

Say:

> "I extract digits using modulo and rebuild the number in reverse order while removing digits using division by 10."

---

## ⏱ Time & Space Complexity

* **Time Complexity:** `O(d)` where `d` = number of digits
* **Space Complexity:** `O(1)`

---

## 🧾 Final Summary (Beginner Friendly)

* `% 10` gives last digit
* `/ 10` removes last digit
* `rev * 10 + rem` builds knowing reverse
* Handle negative numbers
* Core DSA digit logic

---

🚀 **If you master this, you are strong in digit-based DSA problems.**

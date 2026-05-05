# 🔁 Palindrome Number Check – DSA Logic Building

This README is a **separate, beginner-friendly file** that explains how to **check whether a number is a palindrome** using pure logic.

A palindrome number is a number that **reads the same forward and backward**.

---

## 📘 Problem Statement

Write a function that checks whether a given number is a **palindrome**.

### Examples

```
Input:  121   → true
Input:  123   → false
Input:  1221  → true
```

---

## 🧠 Key Idea (Very Important ⭐)

> **Reverse the number and compare it with the original number**.

If both are the same → palindrome ✅
Otherwise → not a palindrome ❌

---

## 1️⃣ Code (Beginner-Friendly & Interview Safe)

```js
function isPalindrome(n) {

    let rev = 0;           // to store reversed number
    let original = n;      // save original number

    // Loop until number becomes 0
    while (n > 0) {
        let rem = n % 10;          // get last digit
        rev = (rev * 10) + rem;   // build reversed number
        n = Math.floor(n / 10);   // remove last digit
    }

    // Compare reversed number with original
    return rev === original;
}

let num = 121;
console.log(isPalindrome(num)); // true
```

---

## 2️⃣ Output

```
true
```

---

## 🧪 Dry Run (Step-by-Step)

### Input

```
n = 121
original = 121
rev = 0
```

### Loop Execution

| Iteration | n (before) | rem | rev (after) | n (after ÷10) |
| --------- | ---------- | --- | ----------- | ------------- |
| 1         | 121        | 1   | 1           | 12            |
| 2         | 12         | 2   | 12          | 1             |
| 3         | 1          | 1   | 121         | 0             |

Loop stops when `n == 0`

### Final Comparison

```
rev = 121
original = 121
→ Palindrome ✅
```

---

## 🧠 Core Logic Explained (Beginner Level ⭐)

### 🔹 How does reversing work?

This line is the heart of the logic:

```js
rev = (rev * 10) + rem;
```

Example step-by-step:

```
rev = 0
rev = 0*10 + 1 → 1
rev = 1*10 + 2 → 12
rev = 12*10 + 1 → 121
```

---

## ❗ Important Edge Cases

### 🔸 Case 1: Negative numbers

```js
-121 → NOT palindrome
```

Why?

* Minus sign only appears once
* Reverse won’t match original

👉 Usually treated as **not palindrome**.

---

### 🔸 Case 2: Single-digit numbers

```js
7 → palindrome
```

Any single-digit number is always a palindrome.

---

## 🔁 Solving Using `for` Loop (Interview Question ⭐)

```js
function isPalindromeFor(n) {
    let rev = 0;
    let original = n;

    for (; n > 0; n = Math.floor(n / 10)) {
        let rem = n % 10;
        rev = rev * 10 + rem;
    }

    return rev === original;
}

console.log(isPalindromeFor(121)); // true
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

### ✅ Trick 1: Use `while` for digit problems

If the number keeps shrinking:

```
n → n/10 → n/10 → 0
```

👉 Use `while`

---

### ✅ Trick 2: Always save original value

```js
let original = n;
```

Because `n` will change during reversal.

---

### ✅ Trick 3: Reuse this logic

Same reverse logic is used in:

* Reverse a number
* Palindrome number
* Armstrong number

---

## 💼 Interview Tip ⭐

If asked to explain, say:

> "I reverse the number digit by digit and compare it with the original number to check if it is a palindrome."

---

## ⏱ Time & Space Complexity

* **Time Complexity:** `O(d)` where `d` = number of digits
* **Space Complexity:** `O(1)`

---

## 🧾 Final Summary (Beginner Friendly)

* Reverse the number using `% 10` and `/ 10`
* Compare reversed number with original
* Handle edge cases carefully
* Very common DSA interview question

---

🚀 **If you understand this problem, you are strong in digit-based DSA logic.**

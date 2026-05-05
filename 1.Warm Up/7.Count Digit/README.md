# 🔢 Count Digits in a Number – DSA Logic Building

This README is **separate and focused** on one classic DSA problem:

> **Count how many digits are present in a number**

Perfect for **beginners**, **Canva notes**, and **interview prep**.

---

## 📘 Problem Statement

Write a function that returns the **count of digits** in a given number.

### Examples

```
Input:  -25899
Output: 5

Input:  0
Output: 1
```

---

## 1️⃣ Code (Beginner-Friendly & Interview Safe)

```js
// Function that returns the count of digits in a number
function countDigits(n) {

    // Special case: 0 has exactly one digit
    if (n === 0) return 1;

    // Convert negative numbers to positive
    n = Math.abs(n);

    let count = 0;

    // Loop until number becomes 0
    while (n > 0) {
        n = Math.floor(n / 10); // Remove last digit
        count++;               // Increase digit count
    }

    return count;
}

let num = -25899;
console.log(countDigits(num)); // 5
```

---

## 2️⃣ Output

```
5
```

---

## 🧪 Dry Run (Step-by-Step)

### Input

```
n = -25899
```

### Step 1: Handle Negative Number

```
n = Math.abs(-25899) → 25899
count = 0
```

### Loop Execution

| Iteration | n (before) | n (after ÷10) | count |
| --------- | ---------- | ------------- | ----- |
| 1         | 25899      | 2589          | 1     |
| 2         | 2589       | 258           | 2     |
| 3         | 258        | 25            | 3     |
| 4         | 25         | 2             | 4     |
| 5         | 2          | 0             | 5     |

➡ Loop stops when `n == 0`

---

## 🧠 Core Logic (Beginner Explanation ⭐)

### 🔹 Why divide by 10?

Dividing a number by **10 removes its last digit**.

Example:

```
25899 → 2589 → 258 → 25 → 2 → 0
```

Each division removes **one digit**.
So:

> **Number of divisions = number of digits**

---

## ❗ Why Special Case for `0`?

```js
countDigits(0)
```

* While loop will not run
* But `0` still has **one digit**

So we manually return `1`.

---

## 🔁 While Loop – Syntax, Purpose & Usage (Beginner Friendly)

---

### ✅ What is a `while` loop?

A `while` loop is used when **you do not know in advance how many times the loop should run**.

It keeps running **as long as a condition is true**.

---

### 🧠 Purpose of `while` Loop

Use a `while` loop when:

* The number of iterations depends on a condition
* You are reducing a value step by step
* You are working with digits of a number

That’s why `while` loop is **perfect for digit problems**.

---

### 🧾 Syntax of `while` Loop

```js
while (condition) {
    // code to execute
}
```

⚠️ Important:

* Condition must become **false at some point**
* Otherwise, it becomes an **infinite loop**

---

### 📌 Example 1: Simple while loop

```js
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

Output:

```
1 2 3 4 5
```

---

### 📌 Example 2: Digit-based loop (Why we used while)

```js
let n = 2589;

while (n > 0) {
    n = Math.floor(n / 10);
}
```

➡ Loop runs until digits are exhausted.

---

## 🧮 Common `Math` Methods Used in DSA (Beginner Guide)

---

### 🔹 `Math.abs()` – Absolute Value

```js
Math.abs(-25); // 25
Math.abs(10);  // 10
```

📌 Purpose:

* Converts negative numbers to positive
* Used to handle negative inputs safely

---

### 🔹 `Math.floor()` – Round Down

```js
Math.floor(25.9); // 25
Math.floor(3.1);  // 3
```

📌 Purpose:

* Removes decimal part
* Used while dividing numbers

---

### 🔹 `Math.ceil()` – Round Up

```js
Math.ceil(25.1); // 26
Math.ceil(3.9);  // 4
```

---

### 🔹 `Math.round()` – Round to Nearest Integer

```js
Math.round(4.3); // 4
Math.round(4.6); // 5
```

---

### 🔹 `Math.pow()` – Power Calculation

```js
Math.pow(2, 3); // 8
```

---

### 🔹 `Math.sqrt()` – Square Root

```js
Math.sqrt(16); // 4
```

---

## 🎯 Tricks & Tips (Beginner Gold ⭐⭐⭐)

### ✅ Trick 1: Use `while` for digit problems

If you see:

* Digits
* Division by 10
* Number shrinking

👉 Use `while`, not `for`

---

### ✅ Trick 2: Always combine `Math.floor()` with division

```js
n = Math.floor(n / 10);
```

Avoid decimal errors.

---

### ✅ Trick 3: Learn Math methods by usage, not by heart

Don’t memorize.
Practice them in real problems.

--- (Beginner Gold ⭐⭐⭐)

### ✅ Trick 1: Use `while (n > 0)` for digit problems

This works for:

* Count digits
* Sum of digits
* Reverse a number
* Palindrome check

---

### ✅ Trick 2: Always handle negative numbers

```js
n = Math.abs(n);
```

Never assume input is positive.

---

### ✅ Trick 3: Think about edge cases first

| Case             | Reason         |
| ---------------- | -------------- |
| `0`              | Loop won’t run |
| Negative numbers | Input safety   |
| Large numbers    | Performance    |

---

## 💼 Interview Tip ⭐

If interviewer asks for explanation, say:

> "I repeatedly divide the number by 10 to remove digits and count how many times this operation occurs."

This shows **clear logical thinking**.

---

## ⏱ Time & Space Complexity

* **Time Complexity:** `O(d)` where `d` = number of digits
* **Space Complexity:** `O(1)`

---

## 🔁 Solving the Same Problem Using a `for` Loop (Important ⭐)

---

## 📌 Why use a `for` loop here?

Although **`while` loop is the best choice** for digit problems, interviewers may ask:

> ❓ *Can you solve this using a `for` loop?*

So it’s important to understand **how and why it works**.

---

## 1️⃣ Idea Behind `for` Loop Solution

We still need to:

* Remove digits one by one
* Count how many times we remove a digit

The logic is the same:

```
divide by 10 → remove one digit → count it
```

Only the **loop structure changes**.

---

## 2️⃣ Code Using `for` Loop (Interview Safe)

```js
function countDigitsForLoop(n) {

    // Special case: 0 has one digit
    if (n === 0) return 1;

    // Handle negative numbers
    n = Math.abs(n);

    let count = 0;

    // for-loop used instead of while
    for (; n > 0; n = Math.floor(n / 10)) {
        count++;
    }

    return count;
}

console.log(countDigitsForLoop(-25899)); // 5
```

---

## 🧪 Dry Run (Same as while loop)

| Iteration | n (before) | n (after ÷10) | count |
| --------- | ---------- | ------------- | ----- |
| 1         | 25899      | 2589          | 1     |
| 2         | 2589       | 258           | 2     |
| 3         | 258        | 25            | 3     |
| 4         | 25         | 2             | 4     |
| 5         | 2          | 0             | 5     |

---

## 🧠 Key Difference: `while` vs `for`

| Aspect               | `while` loop  | `for` loop       |
| -------------------- | ------------- | ---------------- |
| Readability          | More natural  | Slightly compact |
| Digit problems       | ⭐ Best choice | Acceptable       |
| Interview preference | ⭐⭐⭐           | ⭐⭐               |

---

## 🎯 Interview Tip ⭐

If asked which loop is better, say:

> "Both work, but `while` is more readable for digit-based problems because the number naturally decreases until it becomes zero."

---

## ✨ Alternative Method (String-Based)

```js
function countDigits(n) {
    return Math.abs(n).toString().length;
}
```

⚠️ Easier but **logic-based solutions are preferred in interviews**.

---

## 🧾 Final Summary (Beginner Friendly)

* Divide by 10 removes digits
* Count divisions to count digits
* Handle `0` separately
* Handle negative numbers
* Very common DSA interview problem

---

🚀 **If you master this, you can solve all digit-based problems easily.**

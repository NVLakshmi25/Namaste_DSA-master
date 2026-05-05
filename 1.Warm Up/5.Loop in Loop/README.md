# Nested Loops & Pattern Logic – Namaste DSA

## 📘 Overview

This README explains **nested loops** step by step using **dry runs, patterns, and interview logic**. Nested loops are heavily used in **pattern problems, matrix traversal, and DSA fundamentals**.

---

## 🎯 Learning Objectives

After reading this file, you will be able to:

* Understand how nested loops work
* Predict outputs confidently
* Perform dry runs correctly
* Identify row–column relationships
* Avoid common mistakes (scope issues)

---

## 🧠 Master Rule for Nested Loops ⭐

> **Outer loop controls ROWS**
> **Inner loop controls COLUMNS**

Always remember this before solving pattern questions.

---

## 🔹 LOOP 1: Full 3 × 3 Grid

### 🧱 Code

```js
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log("i = " + i + " j = " + j);
    }
}
```

### 🧠 Logic

* Outer loop runs **3 times**
* Inner loop runs **3 times for each i**
* Total prints = `3 × 3 = 9`

### 🧪 Output

```
i=0 j=0
i=0 j=1
i=0 j=2
i=1 j=0
i=1 j=1
i=1 j=2
i=2 j=0
i=2 j=1
i=2 j=2
```

---

## 🔹 LOOP 2: Triangular Pattern (`j < i`)

### 🧱 Code

```js
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < i; j++) {
        console.log("i = " + i + " j = " + j);
    }
}
```

### 🧪 Dry Run

| i | j values |
| - | -------- |
| 0 | none     |
| 1 | 0        |
| 2 | 0, 1     |

### 🧪 Output

```
i=1 j=0
i=2 j=0
i=2 j=1
```

---

## 🔹 LOOP 3: `j <= i` (⚠️ Scope Issue)

### ❌ Code (Bad Practice)

```js
for (let i = 0; i < 5; i++) {
    for (j = 0; j <= i; j++) {
        console.log("i= " + i + " j= " + j);
    }
}
```

### ⚠️ Important Note

* `j` becomes a **global variable**
* Can cause **unexpected bugs**

### 🧪 Pattern

| i | j values  |
| - | --------- |
| 0 | 0         |
| 1 | 0,1       |
| 2 | 0,1,2     |
| 3 | 0,1,2,3   |
| 4 | 0,1,2,3,4 |

---

## 🔹 LOOP 4: Correct Version of Loop 3 ✅

### 🧱 Code

```js
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        console.log("i= " + i + " j= " + j);
    }
}
```

✔ Same output
✔ Proper variable scoping
✔ Interview-safe code

---

## 🔹 LOOP 5: Reverse Inner Loop

### 🧱 Code

```js
for (let i = 0; i < 5; i++) {
    for (let j = i; j > 0; j--) {
        console.log("i= " + i + " j=" + j);
    }
}
```

### 🧪 Dry Run

| i | j values |
| - | -------- |
| 0 | none     |
| 1 | 1        |
| 2 | 2,1      |
| 3 | 3,2,1    |
| 4 | 4,3,2,1  |

---

## 🔹 LOOP 6: Reverse Outer Loop

### 🧱 Code

```js
for (let i = 5; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        console.log("i= " + i + " j= " + j);
    }
}
```

### 🧪 Dry Run

| i | j values  |
| - | --------- |
| 5 | 0,1,2,3,4 |
| 4 | 0,1,2,3   |
| 3 | 0,1,2     |
| 2 | 0,1       |
| 1 | 0         |

---

## ⏱ Time Complexity Insight

* Single loop → `O(n)`
* Nested loop → usually `O(n²)`

Pattern problems almost always involve nested loops.

---

## 💼 Interview Questions & Answers

### 1️⃣ Why do nested loops usually have O(n²) complexity?

**Answer:** Because for every iteration of the outer loop, the inner loop runs fully.

---

### 2️⃣ What happens if inner loop depends on `i`?

**Answer:** The number of iterations reduces, forming triangular patterns.

---

### 3️⃣ Why is `let j` important?

**Answer:** It ensures block-level scope and prevents global variable bugs.

---

## 🧠 Beginner Tricks & Tips for Nested Loops (Must Read ⭐)

This section is specially written for **beginners** to remove fear and confusion around nested loops.

---

## ✅ Trick 1: Always Read Inner Loop First

When you see nested loops, **focus on the inner loop first**.

Ask:

* How many times does the inner loop run for **one value of `i`**?

Example:

```js
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < i; j++) {
        console.log(i, j);
    }
}
```

👉 Inner loop runs `i` times.

---

## ✅ Trick 2: Make a Small Table (Best Debugging Hack)

Whenever confused, make a table:

| i | j values |
| - | -------- |
| 0 | none     |
| 1 | 0        |
| 2 | 0,1      |

📌 If you can fill this table, you understand the loop.

---

## ✅ Trick 3: Outer Loop = Rows, Inner Loop = Columns ⭐

Think of output like a **grid or pattern**.

* Outer loop → new line / row
* Inner loop → items in that row

---

## ✅ Trick 4: Change Numbers to See Pattern

Before solving for `n = 5`, try with `n = 3`.

Smaller numbers = clearer thinking.

---

## ✅ Trick 5: Use Pen & Paper Dry Run

Do NOT trust your brain alone.

Write:

```
i = 0 → j runs ?
i = 1 → j runs ?
i = 2 → j runs ?
```

---

## ❌ Common Beginner Mistakes (Avoid These)

### ❌ Forgetting `let` in inner loop

```js
for (j = 0; j < i; j++) {}
```

➡ Creates global variable ❌

✔ Always write:

```js
for (let j = 0; j < i; j++) {}
```

---

## 🎯 Condition Tricks for Each Pattern (VERY IMPORTANT ⭐)

This is the **secret section** beginners usually miss.

---

### 🔹 Pattern 1: Full Grid (Square)

```js
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
```

🧠 **Condition Trick:**

* Inner loop does NOT depend on `i`
* Always prints **n columns** in every row

👉 Think: **Rectangle / full matrix**

---

### 🔹 Pattern 2: Left Triangle (`j < i`)

```js
for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
```

🧠 **Condition Trick:**

* Inner loop depends on `i`
* Number of columns = row number

👉 Think: **Growing triangle**

---

### 🔹 Pattern 3: Left Triangle Including Diagonal (`j <= i`)

```js
for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
```

🧠 **Condition Trick:**

* Same as triangle
* Includes diagonal element

👉 Think: **Triangle with diagonal included**

---

### 🔹 Pattern 4: Reverse Triangle (Inner loop decreases)

```js
for (let i = 0; i < n; i++) {
    for (let j = i; j > 0; j--) {
```

🧠 **Condition Trick:**

* Inner loop starts from `i`
* Counts backward

👉 Think: **Reverse growing pattern**

---

### 🔹 Pattern 5: Reverse Rows (Outer loop decreases)

```js
for (let i = n; i > 0; i--) {
    for (let j = 0; j < i; j++) {
```

🧠 **Condition Trick:**

* Rows decrease
* Columns depend on `i`

👉 Think: **Inverted triangle**

---

## 🧠 Interview Tip ⭐

If asked how you decide conditions, say:

> "I first decide the number of rows using the outer loop, then control the number of columns using the inner loop condition based on the pattern."

---

## 🧾 Final Summary

* Nested loops are logical, not scary
* Conditions decide the pattern shape
* `j < n` → full row
* `j < i` → triangle
* Reverse conditions → inverted patterns
* Practice with small `n`

---

🚀 **Once you understand loop conditions, you can build ANY pattern.****

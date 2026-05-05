# 🔰 Binary Number Pattern (0–1 Toggle) – Beginner Friendly README

This README is written **only for beginners in DSA**.
No shortcuts. No hard words. Just clear logic.

---

## 📌 Problem Statement

Given a number `n = 5`, print this pattern:

```
1
10
101
1010
10101
```

---

## 🧠 What Are We Trying To Learn?

From this pattern, you will learn:

* How a **for loop** works
* How **nested loops** work
* How **if–else** works
* What a **toggle variable** is
* How **dry run** helps understand logic

---

## 🧩 Big Idea (Very Important)

> **Print numbers row by row.**
> **Inside each row, switch between 1 and 0.**

Switching again and again is called **alternating**.

---

## 🔁 What is a Toggle Variable?

A **toggle** is a variable that switches between two values.

Here, it switches like this:

```
1 → 0 → 1 → 0 → 1 ...
```

We use it to print alternating numbers.

---

## 🧑‍💻 Complete Code (Simple Version)

```js
let n = 5; // number of rows

for (let i = 0; i < n; i++) {   // outer loop → rows

    let row = "";              // empty row
    let toggle = 1;             // start every row with 1

    for (let j = 0; j <= i; j++) {  // inner loop → columns
        row = row + toggle;         // print current value

        // flip toggle
        if (toggle == 1) {
            toggle = 0;
        } else {
            toggle = 1;
        }
    }

    console.log(row); // print one full row
}
```

---

## 🔍 How the `for` Loop Works

### Outer Loop (Rows)

```js
for (let i = 0; i < n; i++)
```

| i value | i < 5 | Row Printed |
| ------- | ----- | ----------- |
| 0       | true  | Row 1       |
| 1       | true  | Row 2       |
| 2       | true  | Row 3       |
| 3       | true  | Row 4       |
| 4       | true  | Row 5       |
| 5       | false | Stop        |

---

### Inner Loop (Columns)

```js
for (let j = 0; j <= i; j++)
```

| Row (i) | j values  | Numbers printed |
| ------- | --------- | --------------- |
| 0       | 0         | 1               |
| 1       | 0,1       | 2               |
| 2       | 0,1,2     | 3               |
| 3       | 0,1,2,3   | 4               |
| 4       | 0,1,2,3,4 | 5               |

👉 That is why rows grow like a triangle.

---

## 🔄 How `if–else` Works (Very Simple)

Code:

```js
if (toggle == 1) {
    toggle = 0;
} else {
    toggle = 1;
}
```

Meaning in plain English:

> If the value is **1**, change it to **0**
> Otherwise, change it to **1**

---

## 🧪 Dry Run (Step by Step)

### Row 2 (i = 2)

Start:

```
toggle = 1
row = ""
```

| j | toggle before | Printed | toggle after |
| - | ------------- | ------- | ------------ |
| 0 | 1             | 1       | 0            |
| 1 | 0             | 0       | 1            |
| 2 | 1             | 1       | 0            |

Final row:

```
101
```

---

## ❓ Why Reset `toggle = 1` Every Row?

Because **each row must start with 1**.

Correct:

```
1
10
101
```

If we don’t reset toggle, rows will break ❌

---

## 🧠 Beginner Memory Trick ⭐

> **Print the value → then flip it → repeat**

---

## ❌ Common Beginner Mistakes

❌ Not resetting toggle
❌ Using `j < i` instead of `j <= i`
❌ Not doing dry run

---

## ⏱ Time & Space Complexity

* Time: `O(n²)`
* Space: `O(1)` (ignoring output)

---

## ✅ Final Summary

* Outer loop → rows
* Inner loop → numbers in row
* Toggle controls 1 and 0
* `if–else` flips values
* Dry run makes logic clear

---

🎯 **If you understand this pattern, you have taken your first strong step in DSA.**

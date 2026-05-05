# 🔁 Reverse String (Two Pointer Technique) – Namaste DSA

## 📘 Overview

This README explains **LeetCode 344 – Reverse String** in a **beginner-friendly** way.

You will learn:

* What **in-place** means
* How **two pointers** work
* Why we loop only **half of the array**
* How to do a **dry run step by step**

---

## 🎯 Problem Statement

You are given a string as an **array of characters**.

Your task:

* Reverse the array **in-place**
* Do **NOT** use extra arrays
* Use only **O(1)** extra space

---

### Example

Input:

```
["H", "E", "L", "L", "O"]
```

Output:

```
["O", "L", "L", "E", "H"]
```

---

## 🧠 Key Concept: In-Place Reversal

> **In-place** means:
>
> * Modify the same array
> * Do NOT create a new array

We solve this using the **Two Pointer Technique**.

---

## 1️⃣ Complete JavaScript Code (With Comments)

```js
// Reverse the given array of characters

function reverseString(s) {

    let len = s.length;               // length of array
    let halfLen = Math.floor(len / 2); // loop till middle

    for (let i = 0; i < halfLen; i++) {

        // store current element
        let temp = s[i];

        // swap front with back
        s[i] = s[len - 1 - i];
        s[len - 1 - i] = temp;
    }

    // array is modified in-place
    return s;
}

// Example
let s = ["H", "E", "L", "L", "O"];
console.log(reverseString(s));
```

---

## 2️⃣ Output

```
["O", "L", "L", "E", "H"]
```

---

## 🧪 Dry Run (Step-by-Step 🔥)

Input Array:

```
[ H, E, L, L, O ]
```

Length = 5 → halfLen = 2

| i | s[i] | s[len-1-i] | Swap Result |
| - | ---- | ---------- | ----------- |
| 0 | H    | O          | O E L L H   |
| 1 | E    | L          | O L L E H   |

Loop stops because we reached the middle.

---

## 🧠 Why Only Half Length?

Each swap fixes **TWO positions**:

* One from the start
* One from the end

If we continue further, we would **swap back** ❌

So we stop at:

```
Math.floor(length / 2)
```

---

## 🎯 Two Pointer Explanation (Beginner Trick ⭐)

Think like this:

* Left pointer → start of array
* Right pointer → end of array
* Swap → move inward

Visual:

```
H  E  L  L  O
^           ^
```

After swap:

```
O  E  L  L  H
   ^     ^
```

---

## ❌ Common Beginner Mistakes

❌ Looping full array → swaps back
❌ Using extra array → space not allowed
❌ Forgetting mirrored index (`len - 1 - i`)

---

## ⏱ Time & Space Complexity

* **Time Complexity:** O(n)
* **Space Complexity:** O(1)

Why?

* Single loop
* No extra memory

---

## 💼 Interview Tip ⭐

If asked in interview, say:

> "I used two pointers and swapped symmetric elements. Since each swap fixes two positions, I looped only till half of the array to reverse it in-place."

---

## 🧠 One-Line Memory Trick

> **"Reverse = swap front & back, move inward"**

---

## 🧾 Final Summary (Beginner Friendly)

* Use two pointers
* Swap symmetric elements
* Loop till half length
* No extra array needed

---

🚀 **Master this → You’ll solve array reversal, palindrome, and two-pointer problems easily.**

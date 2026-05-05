# Single Number (LeetCode #136)

## 📌 Problem Overview

### 🔹 Problem Statement Explanation

You are given a **non-empty array of integers** `nums`.

* Every element appears **exactly twice**
* Except for **one element**, which appears **only once**

👉 Your task is to **find and return that single (unique) number**.

⚠️ Constraints from the problem:

* You must solve it in **linear time O(n)**
* You must use **constant extra space O(1)** (important for interviews)

---

## 📘 Example

```txt
Input:  [4, 1, 2, 1, 2]
Output: 4
```

Explanation:

* `1` appears twice → duplicate
* `2` appears twice → duplicate
* `4` appears once → ✅ answer

---

## ✅ Approach 1: Hash Map (Easy to Understand)

### 🧠 Idea

* Count how many times each number appears
* The number with frequency `1` is the answer

---

### 💡 Code Implementation (Hash Map)

```js
function singleNumber(nums) {
    let hash = {};

    // Count frequency
    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]]++;
        }
    }

    // Find the number that appears once
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] === 1) {
            return nums[i];
        }
    }
}
```

---

### 🔍 Dry Run (Hash Map – Code Oriented)

```js
nums = [4, 1, 2, 1, 2]
```

#### First loop (frequency count)

```txt
hash = {
  4: 1,
  1: 2,
  2: 2
}
```

#### Second loop

* `4 → count = 1` ✅ return `4`

---

### ⏱️ Complexity (Hash Map)

* **Time:** `O(n)`
* **Space:** `O(n)` ❌ (extra memory used)

---

## 🚀 Approach 2: XOR (Optimal & Interview Favorite)

### 🧠 XOR Properties (Very Important)

```txt
a ^ a = 0
a ^ 0 = a
XOR is commutative and associative
```

---

### 💡 Core Idea

* Duplicate numbers cancel each other
* The number that appears once remains

---

### 💡 Code Implementation (XOR)

```js
function singleNumber(nums) {
    let xor = 0;

    for (let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i];
    }

    return xor;
}
```

---

### 🔍 Dry Run (XOR – Code Oriented)

```js
nums = [4, 1, 2, 1, 2]
```

| Step | Operation | xor value |
| ---- | --------- | --------- |
| 1    | 0 ^ 4     | 4         |
| 2    | 4 ^ 1     | 5         |
| 3    | 5 ^ 2     | 7         |
| 4    | 7 ^ 1     | 6         |
| 5    | 6 ^ 2     | 4         |

```txt
Final xor = 4
```

✅ Answer: `4`

---

## 🧩 JavaScript Topics Covered

### 1️⃣ Arrays

**Definition:**
Stores multiple values in a single variable.

**Syntax:**

```js
let arr = [4, 1, 2, 1, 2];
```

**Example from this problem:**

```js
nums[i]
nums.length
```

---

### 2️⃣ Loops (`for` loop)

**Definition:**
Executes code repeatedly based on a condition.

**Syntax:**

```js
for (let i = 0; i < n; i++) { }
```

---

### 3️⃣ Objects (Hash Map)

**Definition:**
Stores data in key–value pairs.

**Syntax:**

```js
let hash = {};
```

**Example:**

```js
hash[nums[i]] = 1;
```

---

### 🔍 Why `hash[nums[i]]` and NOT `hash.nums[i]`?

#### Short Answer

👉 Because the **key name is stored in a variable**, not fixed text.

---

### 🧠 Objects in JavaScript: 2 Ways to Access Properties

#### 1️⃣ Dot Notation (FIXED key name)

```js
hash.a
```

✔ Use this **only when the key name is known in advance**

❌ This does **NOT** work for dynamic keys:

```js
hash.nums[i] // ❌ wrong
```

JavaScript looks for a key literally named `"nums"`, which does not exist.

---

#### 2️⃣ Bracket Notation (DYNAMIC key name)

```js
hash[a]
hash[nums[i]]
```

✔ Correct when:

* Key comes from a variable
* Key is computed using an expression

### ✅ Real Example from this problem

```js
nums = [4, 1, 2, 1, 2]
```

```js
hash[nums[i]]
```

What JavaScript actually sees:

```txt
hash[4]
hash[1]
hash[2]
```

This is why **bracket notation is mandatory** for hash maps in DSA problems.

---

### 🧠 Interview Tip

> "If the key is dynamic → always use bracket notation"

---

### 4️⃣ Bitwise XOR (`^`)

**Definition:**
Performs XOR operation on binary representations.

**Syntax:**

```js
a ^ b
```

**Example:**

```js
xor = xor ^ nums[i];
```

---

### 2️⃣ Loops (`for` loop)

**Definition:**
Executes code repeatedly based on a condition.

**Syntax:**

```js
for (let i = 0; i < n; i++) { }
```

---

### 3️⃣ Objects (Hash Map)

**Definition:**
Stores key-value pairs.

**Syntax:**

```js
let obj = {};
```

**Example:**

```js
hash[nums[i]] = 1;
```

---

### 4️⃣ Bitwise XOR (`^`)

**Definition:**
Performs XOR operation on binary representations.

**Syntax:**

```js
a ^ b
```

**Example:**

```js
xor = xor ^ nums[i];
```

---

## 🏆 Which Approach Should You Use?

| Approach | Space | Interview Use    |
| -------- | ----- | ---------------- |
| Hash Map | O(n)  | Easy to explain  |
| XOR      | O(1)  | ⭐ Best / Optimal |

---

## 📝 Final Summary

* Problem is about **finding the unique element**
* Hash Map approach is intuitive but uses extra space
* XOR approach is **optimal and elegant**

### 🧠 Interview Memory Trick

> "Same cancels, unique survives"

Mastering XOR-based problems boosts confidence in:

* Bit manipulation
* Optimal space solutions
* Interview problem solving 🚀

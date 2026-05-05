# 📘 JavaScript Concepts – README

This README contains clear explanations, syntax, and examples for commonly used JavaScript concepts. It is suitable for **Canva**, **GitHub README**, and **study notes**.

---

## 1. Math.floor()

### ✅ Definition

Math.floor() rounds a number down to the nearest integer (toward negative infinity).

### ✅ Syntax

```js
Math.floor(number)
```

### ✅ Examples

```js
Math.floor(4.9);   // 4
Math.floor(4.1);   // 4
Math.floor(-2.3);  // -3
```

👉 **Common use:** removing decimals, pagination, indexing.

---

## 2. slice(0, m)

### ✅ Definition

slice() extracts a portion of an array or string without changing the original one.

### ✅ Syntax

```js
array.slice(startIndex, endIndex)
string.slice(startIndex, endIndex)
```

* startIndex → included
* endIndex → excluded

### ✅ Examples (Array)

```js
let arr = [10, 20, 30, 40, 50];

arr.slice(0, 3);   // [10, 20, 30]
arr.slice(1, 4);   // [20, 30, 40]
```

### ✅ Examples (String)

```js
let text = "JavaScript";

text.slice(0, 4);  // "Java"
text.slice(4, 10); // "Script"
```

👉 **Common use:** subarrays, substrings, trimming data.

---

## 3. Math.max(currCount, maxCount)

### ✅ Definition

Math.max() returns the largest value among the given numbers.

### ✅ Syntax

```js
Math.max(value1, value2, ..., valueN)
```

### ✅ Example

```js
let currCount = 5;
let maxCount = 10;

Math.max(currCount, maxCount); // 10
```

### ✅ Real Use Case

```js
let maxScore = 0;
let scores = [10, 40, 25];

for (let score of scores) {
  maxScore = Math.max(score, maxScore);
}

console.log(maxScore); // 40
```

---

## 4. hash = {} (Object / Hash Map)

### ✅ Definition

{} creates a JavaScript object, often used as a hash map (key-value storage).

### ✅ Syntax

```js
let hash = {};
```

### ✅ Example

```js
let hash = {};

hash["a"] = 1;
hash["b"] = 2;

console.log(hash["a"]); // 1
```

### ✅ Common Use (Counting Frequency)

```js
let word = "hello";
let hash = {};

for (let char of word) {
  hash[char] = (hash[char] || 0) + 1;
}

console.log(hash);
// { h: 1, e: 1, l: 2, o: 1 }
```

---

## 5. XOR Method (^)

### ✅ Definition

XOR (Exclusive OR) is a bitwise operator.
It returns 1 when bits are different, 0 when they are the same.

### ✅ Syntax

```js
a ^ b
```

### ✅ Truth Table

| A | B | A ^ B |
| - | - | ----- |
| 0 | 0 | 0     |
| 1 | 0 | 1     |
| 0 | 1 | 1     |
| 1 | 1 | 0     |

### ✅ Example

```js
5 ^ 3;
```

**Binary Representation**

```
5 = 101
3 = 011
---------
    110  → 6
```

**Result:**

```js
6
```

### ✅ Common Interview Use (Find Unique Number)

```js
let nums = [2, 1, 2, 1, 4];
let result = 0;

for (let num of nums) {
  result ^= num;
}

console.log(result); // 4
```

👉 **Why it works:**

* a ^ a = 0
* a ^ 0 = a

---

✨ Happy Coding!

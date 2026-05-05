# 🧮 Recursion: Sum of First n Natural Numbers

---

## 🎯 Problem Statement

Find the sum of the first **n natural numbers** using recursion.

### Example

```
n = 5
5 + 4 + 3 + 2 + 1 = 15
```

---

## 🧠 Recursive Thinking (Core Idea)

Ask yourself:

> **If I already know the sum till (n − 1), can I find the sum till n?**

Yes:

```
sum(n) = n + sum(n - 1)
```

This single line defines the recursion.

---

## ✅ Base Case (Stopping Condition)

We must stop recursion at some point.

```
sum(0) = 0
```

### Why?

* No numbers left to add
* Prevents infinite recursion
* Avoids stack overflow

---

## ✅ Recursive Code (Clean & Safe)

```js
function sum(n) {
  if (n === 0) return 0;      // base case
  return n + sum(n - 1);     // recursive case
}

console.log(sum(5)); // 15
```

---

## 🪜 Call Stack Walkthrough (VERY IMPORTANT)

### Function Call

```
sum(5)
```

---

### 📥 Stack Building Diagram (Going Down)

```
| sum(5) |  ← first call
| sum(4) |
| sum(3) |
| sum(2) |
| sum(1) |
| sum(0) |  ← base case reached
------------------------------
(Call Stack)
```

Each call waits for the result of the next call.

---

### 🧮 Expression Formation (What JS Remembers)

```
5 + sum(4)
4 + sum(3)
3 + sum(2)
2 + sum(1)
1 + sum(0)
```

---

### 📤 Stack Unwinding Diagram (Coming Back Up)

```
| sum(1) = 1 |
| sum(2) = 3 |
| sum(3) = 6 |
| sum(4) = 10|
| sum(5) = 15|
------------------------------
(Stack Clears)
```

---

📌 **Final Answer Returned:** `15`

---

## 🧪 Simple Dry Run (Beginner Friendly)

Let’s go **line by line**, very slowly.

### Code

```js
function sum(n) {
  if (n === 0) return 0;
  return n + sum(n - 1);
}

sum(5);
```

---

### 🔍 Dry Run Step-by-Step

#### Step 1

```
sum(5)
→ 5 + sum(4)
```

(JS pauses here and waits for `sum(4)`)

---

#### Step 2

```
sum(4)
→ 4 + sum(3)
```

(JS pauses again)

---

#### Step 3

```
sum(3)
→ 3 + sum(2)
```

---

#### Step 4

```
sum(2)
→ 2 + sum(1)
```

---

#### Step 5

```
sum(1)
→ 1 + sum(0)
```

---

#### Step 6 (Base Case)

```
sum(0)
→ return 0
```

Recursion **stops here** ✅

---

### 🔁 Returning Values (Very Important)

Now JavaScript starts **going back**:

```
sum(1) = 1 + 0 = 1
sum(2) = 2 + 1 = 3
sum(3) = 3 + 3 = 6
sum(4) = 4 + 6 = 10
sum(5) = 5 + 10 = 15
```

---

## 🧠 Beginner Mental Model

* Function goes **down** until base case
* Nothing is calculated immediately
* Values are calculated **while returning**

Think of it like climbing down stairs 🪜 and then climbing back up.

---

## ⭐ One-Sentence Dry Run Rule

> **In recursion, the answer is built while coming back, not while going down.**

---

## 🔑 One-Line Intuition

> **Recursion postpones work until the base case, then completes everything while returning.**

---

## ⚠️ Common Mistakes

❌ Forgetting the base case → stack overflow

❌ Wrong base case

```js
if (n === 1) return 1; // but still calling sum(0)
```

❌ Input not reducing

```js
return n + sum(n); // infinite recursion
```

---

## ⏱️ Time & Space Complexity

* **Time Complexity:** `O(n)`
* **Space Complexity:** `O(n)` (call stack)

---

## 💡 Bonus (Interview Tip ⭐)

Without recursion:

```js
let n = 5;
let sum = (n * (n + 1)) / 2; // O(1)
```

📌 Recursion is used here to test **problem-solving thinking**, not optimization.

---

### 🎨 Canva / Notes Tip

* One section = one slide
* Stack walkthrough = visual diagram
* Code block = monospace text

✅ Standalone recursion example file (beginner → interview ready)

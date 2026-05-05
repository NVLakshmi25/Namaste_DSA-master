# 🔁 Recursion in JavaScript — Clean Notes & Examples (Canva Ready)

This README organizes your code into **clear concepts + safe patterns**, removes confusion, and highlights **interview‑level best practices**.

---

## 1️⃣ Basic Recursion (❌ No Base Condition)

```js
function fun() {
  console.log("Namaste");
  fun(); // recursive call
}

fun();
```

### What Happens?

* The function keeps calling itself forever
* Each call is pushed onto the **call stack**
* Nothing ever returns

### ❌ Result

```
RangeError: Maximum call stack size exceeded
```

### Takeaway

> **Recursion without a base condition is broken recursion.**

---

## 2️⃣ Recursion With Numbers (❌ Still No Base Case)

```js
function fun(num) {
  console.log(num);
  num = num - 1;
  fun(num);
}

fun(5);
```

### Output (until crash)

```
5
4
3
2
1
0
-1
-2
...
```

### Why It Fails

* `num` keeps decreasing
* There is **no stopping condition**
* Stack grows infinitely

---

## 3️⃣ Recursion With Base Condition (✅ Correct)

```js
function fun(num) {
  if (num === 0) return; // base case

  console.log(num);
  fun(num - 1);
}

fun(5);
```

### Output

```
5
4
3
2
1
```

### Call Flow

```
fun(5)
fun(4)
fun(3)
fun(2)
fun(1)
→ stop → unwind
```

✅ Safe recursion
✅ No stack overflow

---

## 4️⃣ Print `n → 1` Using Recursion

```js
function print(n) {
  if (n < 1) return; // base case

  console.log(n);
  print(n - 1); // preferred
}

print(10);
```

### Output

```
10
9
8
7
6
5
4
3
2
1
```

### ⚠️ Interview Tip

Avoid this:

```js
print(--n);
```

✔ Use `n - 1` for clarity and safety

---

## 5️⃣ Print `1 → n` Using Recursion

```js
let n = 10;

function print(x) {
  if (x > n) return; // base case

  console.log(x);
  print(x + 1);
}

print(1);
```

### Output

```
1
2
3
4
5
6
7
8
9
10
```

### Key Concept 💡

* Stack grows first
* Printing happens **while unwinding**

---

## 6️⃣ Core Differences (Interview Gold ⭐)

| Pattern | Print Timing          |
| ------- | --------------------- |
| `n → 1` | Before recursive call |
| `1 → n` | During return phase   |

Always think in terms of **call stack behavior**, not line order.

---

## 7️⃣ Common Recursion Mistakes

❌ Missing base case

❌ Input not moving toward base case

❌ Using `--n` / `++n` carelessly

❌ Deep recursion for large inputs (`10^5+`)

---

## 8️⃣ One‑Line Mental Model 🧠

> **Recursion = push calls onto stack → base case stops growth → returns unwind the stack**

---

### Canva Tip 🎨

* Each numbered section = **one slide**
* Code blocks = monospace text box
* Stack flow = vertical text or arrows

You now have **safe, interview‑ready recursion notes** ✅

---

# 📘 Additional Concepts: Definition, Syntax & Comparisons

## 9️⃣ Recursion — Definition

**Recursion** is a programming technique where a **function calls itself** to solve a problem by breaking it into **smaller subproblems** of the same type.

### Key Requirements

* A **base condition** (to stop)
* A **recursive call** (to reduce the problem)

Without a base condition → ❌ infinite recursion.

---

## 🔹 Recursion — Syntax (General Pattern)

```js
function functionName(parameters) {
  // Base condition
  if (condition) return;

  // Work / logic

  // Recursive call
  functionName(modifiedParameters);
}
```

---

## 🔟 Callback Function — Definition

A **callback function** is a function that is **passed as an argument to another function** and is **executed later**, usually after an operation completes.

📌 Callbacks are commonly used for:

* Asynchronous operations
* Event handling
* Timers

---

## 🔹 Callback Function — Syntax

```js
function mainFunction(callback) {
  // Some operation
  callback(); // function is called later
}

function myCallback() {
  console.log("I am a callback");
}

mainFunction(myCallback);
```

---

## 1️⃣1️⃣ Simple Callback Example (Real Life)

```js
setTimeout(function () {
  console.log("Hello after 2 seconds");
}, 2000);
```

* `setTimeout` runs first
* Callback runs **after delay**

---

## 1️⃣2️⃣ Recursion vs Callback Function (🔥 Interview Question)

| Feature        | Recursion                    | Callback Function           |
| -------------- | ---------------------------- | --------------------------- |
| Definition     | Function calls itself        | Function passed as argument |
| Purpose        | Solve repetitive subproblems | Execute code later          |
| Base Condition | Mandatory                    | Not required                |
| Execution      | Synchronous (usually)        | Often asynchronous          |
| Call Stack     | Grows deeply                 | Usually shallow             |
| Common Use     | Trees, DFS, math problems    | Events, async tasks         |
| Risk           | Stack overflow               | Callback hell               |

---

## 1️⃣3️⃣ Key Differences Explained (Plain English)

### 🔁 Recursion

* Same function keeps calling itself
* Stops only when base condition is met
* Uses **call stack heavily**

### 🔔 Callback

* One function calls **another function**
* Execution depends on time/event
* Used heavily in **JavaScript async code**

---

## 1️⃣4️⃣ Related Topics You Should Know

### ✅ Higher-Order Functions

Functions that **accept other functions** as arguments or return them.

Examples:

* `map()`
* `filter()`
* `forEach()`

---

### ✅ Anonymous Functions

Functions **without a name**, often used as callbacks.

```js
setTimeout(() => {
  console.log("Anonymous callback");
}, 1000);
```

---

### ✅ Arrow Functions

Shorter syntax for writing functions.

```js
const add = (a, b) => a + b;
```

---

### ✅ Synchronous vs Asynchronous

| Type         | Description                           |
| ------------ | ------------------------------------- |
| Synchronous  | Blocks execution                      |
| Asynchronous | Non-blocking, uses callbacks/promises |

---

## 1️⃣5️⃣ Final Interview One-Liners ⭐

* **Recursion needs a base condition; callbacks don’t**
* **Recursion solves problems; callbacks manage execution flow**
* **Too much recursion → stack overflow**
* **Too many callbacks → callback hell**

---

🎯 This section completes your recursion + callback notes and makes them **interview-complete**.

---

# 🧑‍💻 Beginner-Friendly Examples (Step-by-Step)

## 1️⃣ Very Simple Recursion Example (Beginner)

### Problem: Print "Hello" 3 times

```js
function sayHello(count) {
  if (count === 0) return;   // base condition

  console.log("Hello");
  sayHello(count - 1);       // recursive call
}

sayHello(3);
```

### Output

```
Hello
Hello
Hello
```

### Explanation

* Function prints once
* Calls itself with smaller value
* Stops when count becomes 0

---

## 2️⃣ Recursion Example: Sum of Numbers (Beginner)

### Problem: Find sum of numbers from 1 to n

```js
function sum(n) {
  if (n === 1) return 1;   // base case

  return n + sum(n - 1);  // recursive call
}

console.log(sum(5));
```

### Output

```
15
```

### How It Works

```
sum(5) = 5 + sum(4)
sum(4) = 4 + sum(3)
...
sum(1) = 1
```

---

## 3️⃣ Very Simple Callback Example (Beginner)

### Problem: Call another function

```js
function greet(callback) {
  console.log("Hello");
  callback();
}

function bye() {
  console.log("Goodbye");
}

greet(bye);
```

### Output

```
Hello
Goodbye
```

### Explanation

* `bye` is passed as argument
* `greet` calls it later

---

## 4️⃣ Callback Example with User Action (Beginner)

```js
function buttonClick(callback) {
  console.log("Button clicked");
  callback();
}

buttonClick(function () {
  console.log("Action performed");
});
```

### Output

```
Button clicked
Action performed
```

---

## 5️⃣ Recursion vs Callback — Beginner Comparison

### Recursion (Same function calls itself)

```js
function countDown(n) {
  if (n === 0) return;
  console.log(n);
  countDown(n - 1);
}

countDown(3);
```

### Callback (One function calls another)

```js
function first(cb) {
  console.log("First");
  cb();
}

function second() {
  console.log("Second");
}

first(second);
```

---

## 6️⃣ Beginner Memory Trick 🧠

* **Recursion** → function talks to *itself*
* **Callback** → function talks to *another function*

---

## 7️⃣ When Beginners Should Use What

### ✅ Use Recursion When

* Repeating the *same logic*
* Working with numbers, trees, patterns

### ✅ Use Callback When

* Waiting for something (time, click, data)
* Handling events or async tasks

---

## ⭐ Beginner Interview One-Liners

* "Recursion needs a base condition"
* "Callbacks are functions passed as arguments"
* "Recursion can cause stack overflow"
* "Callbacks can be synchronous or asynchronous"

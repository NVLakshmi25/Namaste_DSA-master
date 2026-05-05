# 🧠 JavaScript Closures — Full Explanation (Interview Ready)

A **step-by-step, beginner → advanced guide** to understanding **Closures in JavaScript**, written for **Canva slides, GitHub README, and interview prep**.

---

## 🧠 What Is a Closure?

A **closure** is created when a function **remembers variables from its outer (lexical) scope**, even **after the outer function has finished execution**.

### 📌 In Simple Words

> **Closure = Function + its surrounding variables (lexical scope)**

---

## 🔹 Step 1: Basic Function (No Closure Yet)

```js
function outer() {
  let x = 10;
  console.log(x);
}

outer(); // 10
```

✔ `x` is used inside the same function
✔ No inner function → **no closure yet**

---

## 🔹 Step 2: Inner Function (Still Not a Closure)

```js
function outer() {
  let x = 10;

  function inner() {
    console.log(x);
  }

  inner();
}

outer(); // 10
```

👉 `inner()` can access `x`
👉 This is **lexical scope**, not a closure

⚠️ Closure happens **only when the inner function survives outside** the outer function

---

## 🔹 Step 3: Real Closure (IMPORTANT 🔥)

```js
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner; // returning inner function
}

let fn = outer(); // outer() finishes execution

fn(); // 1
fn(); // 2
fn(); // 3
```

### 🔍 What’s Happening?

1️⃣ `outer()` runs
2️⃣ `count` is created
3️⃣ `inner()` is returned
4️⃣ `outer()` finishes execution
5️⃣ `inner()` **still remembers `count`**

👉 This remembered memory is called a **closure**

---

## 🔹 Step 4: Visualizing a Closure

* ❌ `outer()` execution finished
* ✅ `count` still exists in memory
* ✅ `inner()` keeps reference to `count`

Every call to `fn()`:

* Uses the **same `count`**
* Does **not reset** it

---

## 🔹 Step 5: Multiple Closures

```js
function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

let c1 = counter();
let c2 = counter();

console.log(c1()); // 1
console.log(c1()); // 2

console.log(c2()); // 1
console.log(c2()); // 2
```

👉 Each function call creates a **new closure**
👉 Closures do **not share memory** unless explicitly designed

---

## 🔹 Step 6: Common Interview Example

```js
function greet(name) {
  return function () {
    console.log("Hello " + name);
  };
}

let greetAkshay = greet("Akshay");
let greetVirat = greet("Virat");

greetAkshay(); // Hello Akshay
greetVirat();  // Hello Virat
```

✔ `name` is remembered by the inner function
✔ That memory is a **closure**

---

## 🔹 Step 7: Closures in Loops (INTERVIEW FAVORITE 🔥)

### ❌ Problem with `var`

```js
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```

**Output:**

```txt
3
3
3
```

🔍 Why?

* `var` is **function-scoped**
* All callbacks share the **same `i`**

---

### ✅ Solution Using `let`

```js
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```

**Output:**

```txt
0
1
2
```

👉 `let` creates a **new block scope** per iteration
👉 Each iteration gets its **own closure**

---

## 🔹 Step 8: Real-World Use Case (Data Privacy)

```js
function bankAccount() {
  let balance = 1000;

  return {
    deposit(amount) {
      balance += amount;
      console.log(balance);
    },
    withdraw(amount) {
      balance -= amount;
      console.log(balance);
    }
  };
}

let account = bankAccount();
account.deposit(500);  // 1500
account.withdraw(300); // 1200
```

✔ `balance` is **private**
✔ Accessible only via closure

---

## ⚛️ Closures in React (VERY IMPORTANT 🔥)

Closures are **used heavily in React**, even if you don’t realize it.

In React, **functions remember variables from the render in which they were created** — that is a closure.

---

### 🔹 1️⃣ Closures in Event Handlers

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    console.log(count);
  }

  return <button onClick={handleClick}>Click</button>;
}
```

✔ `handleClick` **remembers `count`**
✔ Even after render finishes

👉 This memory is a **closure**

---

### 🔹 2️⃣ Closures in setTimeout / setInterval (Stale Closure)

```jsx
function Timer() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setInterval(() => {
      console.log(count);
    }, 1000);
  }, []);
}
```

⚠️ **Problem:** Always logs `0`

🔍 Why?

* Effect runs once
* Callback closes over **initial `count`**
* This is called a **stale closure**

---

### ✅ Fix Using Functional Update

```jsx
setInterval(() => {
  setCount(prev => prev + 1);
}, 1000);
```

✔ Uses latest state
✔ Avoids stale closure

---

### 🔹 3️⃣ Closures in useEffect Dependencies

```jsx
React.useEffect(() => {
  console.log(count);
}, [count]);
```

✔ Effect re-runs
✔ Closure updated with latest `count`

---

### 🔹 4️⃣ Closures in useCallback

```jsx
const handleClick = React.useCallback(() => {
  console.log(count);
}, [count]);
```

✔ Memoized function
✔ Still a closure
✔ Updates when dependencies change

---

### 🔹 5️⃣ Closures for Data Privacy (Custom Hooks)

```jsx
function useCounter() {
  let secret = 0;

  return function () {
    secret++;
    return secret;
  };
}
```

✔ `secret` is hidden
✔ Persisted via closure

---

## 🧠 React Interview Golden Rules 🏆

* Every render creates **new closures**
* Functions remember values from **that render only**
* Missing dependencies = **stale closure bugs**

---

## 🧠 Master Summary

```txt
==================== CLOSURE SUMMARY ====================

What is a Closure?
- A function that remembers variables from its outer scope
- Even after the outer function has finished execution

Closure = Function + Lexical Scope

--------------------------------
When does a closure happen?

- When a function is returned
- When a function is passed as a callback
- When inner function uses outer variables

--------------------------------
Key Properties:

- Closure keeps variables alive
- Variables are NOT garbage collected
- Each closure has its own copy

--------------------------------
Common Uses:

- Data hiding / encapsulation
- Counters
- Callbacks
- Event handlers
- Memoization

--------------------------------
Loop Closure Rule (🔥 IMPORTANT):

var → shared closure → same value
let → new closure per iteration

--------------------------------
Interview Golden Rule 🏆

"If a function remembers outer variables → it is a closure"

--------------------------------
One-line Memory Trick 🧠

"Function returns, but memory stays"
================================================
```

---

## 🎯 Common Interview Questions

❓ What is a closure?
✔ A function that remembers its lexical scope

❓ Why are closures useful?
✔ Data privacy, callbacks, state maintenance

❓ Do closures increase memory usage?
✔ Yes, if not handled properly

---

📌 **Use this README for Canva, GitHub, or interview prep notes.**

Happy Coding 🚀

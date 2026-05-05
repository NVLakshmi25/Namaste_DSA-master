# 🔁 Event Loop — Call Stack & Microtasks (Deep Dive)

A **complete, interview‑ready explanation** of the **JavaScript Event Loop**, written with **commented code, execution flow, and common traps**. Perfect as a **standalone Canva / GitHub file**.

---

## 🧠 What Is the Event Loop?

The **Event Loop** is JavaScript’s mechanism that allows it to handle **asynchronous operations** even though JavaScript is **single‑threaded**.

📌 JavaScript can do **one thing at a time**, but it can **schedule tasks**.

---

## 🧠 Main Components (VERY IMPORTANT)

1️⃣ **Call Stack**
2️⃣ **Web APIs**
3️⃣ **Callback Queue (Macrotask Queue)**
4️⃣ **Microtask Queue**
5️⃣ **Event Loop**

---

## 1️⃣ Call Stack (Execution Engine)

The **Call Stack** executes functions **one by one** using **LIFO** (Last In, First Out).

```js
function one() {
  console.log("One");
}

function two() {
  one();
  console.log("Two");
}

two();
```

### 🔍 Call Stack Flow

```
two()
 └─ one()
```

**Output:**

```
One
Two
```

---

## 2️⃣ Synchronous Code (Blocking)

```js
console.log("Start");

for (let i = 0; i < 3; i++) {
  // blocking loop
}

console.log("End");
```

**Output:**

```
Start
End
```

📌 Async tasks **wait until the stack is empty**

---

## 3️⃣ Asynchronous Code — `setTimeout` (Macrotask)

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");
```

### 🧠 Execution Order

```
Start
End
Timeout
```

### 🔍 Why?

```
1️⃣ Start → Call Stack
2️⃣ setTimeout → Web API
3️⃣ End → Call Stack
4️⃣ Stack empty
5️⃣ Event Loop pushes macrotask
```

---

## 4️⃣ Microtask Queue (HIGH PRIORITY 🔥)

### Microtasks Include:

* `Promise.then / catch / finally`
* `queueMicrotask`
* `MutationObserver`

---

### 🔹 Promise vs setTimeout

```js
console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

### ✅ Output

```
Start
End
Promise
setTimeout
```

📌 **Microtasks always run before macrotasks**

---

## 5️⃣ Multiple Microtasks

```js
Promise.resolve().then(() => console.log("M1"));
Promise.resolve().then(() => console.log("M2"));
console.log("Sync");
```

**Output:**

```
Sync
M1
M2
```

✔ All microtasks finish **before any macrotask**

---

## 6️⃣ Microtask Starvation (INTERVIEW TRAP 🔥)

```js
function repeat() {
  Promise.resolve().then(repeat);
}

repeat();
```

❌ Macrotasks (like `setTimeout`) may **never execute**

📌 Too many microtasks can **block the UI**

---

## 7️⃣ Event Loop Visual Flow 🧠

```
Call Stack
   ↓ (empty)
Microtask Queue
   ↓ (empty)
Macrotask Queue
   ↓
Repeat
```

---

## 8️⃣ Real Interview Question (VERY COMMON)

```js
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");
```

### ✅ Output

```
A
D
C
B
```

---

## 9️⃣ `async / await` & Event Loop

```js
async function test() {
  console.log("1");

  await Promise.resolve();

  console.log("2");
}

console.log("Start");
test();
console.log("End");
```

### ✅ Output

```
Start
1
End
2
```

📌 `await` pauses execution and **resumes in microtask queue**

---

## 🧠 Master Summary

```txt
==================== EVENT LOOP SUMMARY ====================

JavaScript:
- Single-threaded
- Executes one task at a time

--------------------------------
Main Components:

1️⃣ Call Stack → sync code
2️⃣ Web APIs → async handling
3️⃣ Microtask Queue → promises (highest priority)
4️⃣ Macrotask Queue → setTimeout / setInterval
5️⃣ Event Loop → coordinator

--------------------------------
Execution Priority:

1️⃣ Call Stack
2️⃣ Microtask Queue
3️⃣ Macrotask Queue

--------------------------------
Key Rules 🔥

- Async waits for empty stack
- Microtasks run BEFORE macrotasks
- Promises beat setTimeout
- await resumes as microtask

--------------------------------
Interview Golden Rule 🏆

"Microtasks first, Macrotasks later"

--------------------------------
One-line Memory Trick 🧠

"Stack → Microtasks → Macrotasks"
================================================
```

---

📌 **Use this as a standalone Event Loop reference for interviews or Canva slides.**

Happy Coding 🚀


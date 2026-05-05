# ⏱️ Debounce vs Throttle — Deep Dive (🔥 Interview Ready)

A **performance-focused, interview-level explanation** of **Debounce vs Throttle** with **commented implementations, execution flow, and real-world use cases**. Designed as a **standalone Canva / GitHub file**.

---

## 🧠 Why Do We Need Debounce & Throttle?

Browser events like:

* `scroll`
* `resize`
* `keyup`
* `mousemove`

🔥 can fire **hundreds of times per second**, causing:

* Performance issues
* UI lag
* Unnecessary API calls

👉 **Debounce & Throttle control how often a function runs**.

---

## 🔹 Debounce

### 🧠 What Is Debounce?

**Debounce delays function execution** until the event **stops firing** for a specified time.

📌 Think:

> **“Run only AFTER the user stops doing something.”**

---

### ✅ Real-World Use Cases (Debounce)

* Search input (API call after typing stops)
* Window resize handling
* Auto-save drafts

---

### ✅ Debounce Implementation (Commented)

```js
function debounce(fn, delay) {

  // Timer reference stored in closure
  let timerId;

  return function (...args) {

    // Clear previous timer
    clearTimeout(timerId);

    // Set new timer
    timerId = setTimeout(() => {

      // Execute original function
      fn.apply(this, args);

    }, delay);
  };
}
```

---

### ▶ Using Debounce

```js
function searchQuery(text) {
  console.log("Searching for:", text);
}

const debouncedSearch = debounce(searchQuery, 500);

// Simulating fast typing
debouncedSearch("a");
debouncedSearch("ak");
debouncedSearch("aks");
debouncedSearch("aksh");
debouncedSearch("akshay");
```

**Output:**

```
Searching for: akshay
```

📌 Executes **once**, after 500ms of inactivity

---

### 🧠 Debounce Execution Flow

```
Event fires → timer reset → event fires → timer reset
(no execution)

Event stops → timer completes → function executes
```

---

## 🔹 Throttle

### 🧠 What Is Throttle?

**Throttle ensures a function runs at most once** in a given time interval.

📌 Think:

> **“Run at regular intervals, no matter how many events fire.”**

---

### ✅ Real-World Use Cases (Throttle)

* Scroll position tracking
* Infinite scrolling
* Button click prevention
* Window resize tracking

---

### ✅ Throttle Implementation (Commented)

```js
function throttle(fn, limit) {

  // Flag to track execution
  let isThrottled = false;

  return function (...args) {

    // Ignore calls during throttle period
    if (isThrottled) return;

    // Execute function
    fn.apply(this, args);

    // Activate throttle
    isThrottled = true;

    // Reset throttle after limit
    setTimeout(() => {
      isThrottled = false;
    }, limit);
  };
}
```

---

### ▶ Using Throttle

```js
function handleScroll() {
  console.log("Scroll event fired");
}

const throttledScroll = throttle(handleScroll, 1000);

// Simulating rapid scrolling
throttledScroll();
throttledScroll();
throttledScroll();
```

**Output:**

```
Scroll event fired
```

📌 Executes **once per interval**

---

### 🧠 Throttle Execution Flow

```
Event fires → function runs
Event fires again → ignored
After time → function allowed again
```

---

## 🔥 Debounce vs Throttle (Side-by-Side)

| Feature     | Debounce          | Throttle             |
| ----------- | ----------------- | -------------------- |
| Execution   | After event stops | At regular intervals |
| Frequency   | Once              | Multiple             |
| Best for    | Search, resize    | Scroll, mousemove    |
| Control     | Delay execution   | Limit execution      |
| User waits? | Yes               | No                   |

---

## ❌ Common Interview Traps

```txt
Debounce = slow throttle ❌
Throttle = fast debounce ❌
```

✔ They solve **different problems**

---

## 🧠 Master Summary

```txt
==================== DEBOUNCE vs THROTTLE SUMMARY ====================

Debounce:
- Delays execution
- Runs after event stops
- Best for search input, resize
- Reduces API calls

Throttle:
- Limits execution rate
- Runs at fixed intervals
- Best for scroll, mousemove
- Prevents over-execution

--------------------------------
Key Difference 🔥

Debounce → "Wait"
Throttle → "Limit"

--------------------------------
Interview Golden Rule 🏆

"Debounce waits, Throttle regulates"

--------------------------------
One-line Memory Trick 🧠

"Debounce = STOP then RUN
Throttle = RUN but SLOW"
================================================
```

---

## 🎯 Interview Quick Questions

❓ Which is better for search input?
✔ Debounce

❓ Which is better for scroll event?
✔ Throttle

❓ Can debounce delay forever?
✔ Yes, if events keep firing

---

📌 **Use this file as a standalone reference for interviews, Canva, or GitHub.**

Happy Coding 🚀

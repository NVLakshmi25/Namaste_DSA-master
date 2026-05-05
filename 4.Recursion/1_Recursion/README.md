# 🧠 Recursion Explained (Beginner → Interview Level)

This README is **Canva‑ready**: clean sections, short bullets, and copy‑paste friendly blocks.

---

## 1️⃣ What Recursion Really Is

**Recursion = a function calling itself** to solve a **smaller version of the same problem**.

Every recursive function has **two mandatory parts**:

### ✅ Base Case

The **stop condition**.

If this is missing or wrong → 💥 *trouble*.

```js
if (num === 0) return;
```

### 🔁 Recursive Case

Where the function calls itself with a **smaller input**.

```js
fun(num - 1);
```

---

## 2️⃣ What’s Happening in This Example

```js
function fun(num) {
  console.log(num);
  num = num - 1;
  fun(num);
}

fun(5);
```

### Console Output

```
5
4
3
2
1
0
-1
-2
-3
...
∞
```

### ❌ Why?

There is **no base case**, so the function **never stops calling itself**.

---

## 3️⃣ Call Stack (The Most Important Concept)

Every function call is **pushed onto the call stack**.

When you run:

```js
fun(5);
```

### Stack Growth (Top → Bottom)

```
fun(5)
fun(4)
fun(3)
fun(2)
fun(1)
fun(0)
fun(-1)
fun(-2)
...
```

📌 Nothing gets popped because the function **never returns**.

---

## 4️⃣ Infinite Recursion ≠ Infinite Memory

The browser / JS engine has a **limited call stack size**.

Eventually you hit:

```
RangeError: Maximum call stack size exceeded
```

This is exactly what stack overflow means.

---

## 5️⃣ Stack Overflow (Plain English)

Stack Overflow happens when **recursive calls keep piling up** and **nothing returns**.

### One‑liner:

> **Infinite recursion ⇒ Stack Overflow**

---

## 6️⃣ Correct Version (With Base Case)

```js
function fun(num) {
  if (num === 0) return;

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

### Call Stack Behavior

* Stack grows until `num === 0`
* Base case hits → `return`
* Stack starts **unwinding**
* Program ends safely ✅

---

## 7️⃣ Golden Rule (Interview Favorite ⭐)

> **If you can’t clearly point out the base case, your recursion is broken.**

---

# 🔽 Printing Numbers with Recursion

## 8️⃣ Print `n → 1` (Top‑Down)

### Goal

```
5 4 3 2 1
```

### Rule

* **Do work first**
* Then call recursion

```js
function print(n) {
  if (n < 1) return;

  console.log(n);   // work
  print(n - 1);     // recursion
}

print(5);
```

---

## 9️⃣ Print `1 → n` (Bottom‑Up)

### Goal

```
1 2 3 4 5
```

### Key Idea 💡

👉 Call recursion first, **print while returning** (stack unwinding)

```js
let n = 5;

function print(x) {
  if (x > n) return;

  console.log(x);
  print(x + 1);
}

print(1);
```

---

## 🔟 The Big Difference (Interview Gold ⭐)

| Pattern | Print Happens          |
| ------- | ---------------------- |
| `n → 1` | Before recursive call  |
| `1 → n` | During stack unwinding |

📌 Always think in **stack frames**, not just code order.

---

## 1️⃣1️⃣ `--n` vs `n - 1` (Common Trap)

```js
print(--n);   // modifies n first
print(n - 1); // passes value, n unchanged
```

✔ Prefer `n - 1` for clarity
❌ Avoid `--n` in interviews

---

## 1️⃣2️⃣ Common Recursion Mistakes

❌ **Missing base case**
→ Infinite recursion → Stack Overflow

❌ **Input not moving toward base case**

```js
print(n); // n never changes
```

❌ **Very deep recursion**
Large `n` (e.g. `10^5`) → stack overflow
👉 Use loops

❌ **Ignoring time complexity**
Recursive ≠ efficient by default

---

## 1️⃣3️⃣ When Should You Use Recursion?

### ✅ Good Use Cases

* Tree & graph traversal (DFS)
* Backtracking (permutations, subsets)
* Divide & Conquer (merge sort, quick sort)
* Dynamic Programming + memoization

### ❌ Avoid When

* A simple loop works
* Input size is huge
* Tail recursion isn’t optimized (JS 👀)

---

## 🧠 Final Mental Model

> **Recursion = push work onto the stack → base case stops growth → returns unwind the stack**

---

✨ Tip for Canva:

* Use each numbered section as **one slide**
* Code blocks = monospace text box
* Stack diagrams = vertical text blocks

You’re interview‑ready 🚀

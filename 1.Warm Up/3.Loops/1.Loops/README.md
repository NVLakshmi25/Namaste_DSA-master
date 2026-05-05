# Loops (for & while) – Namaste DSA

## 📘 Overview

Loops are used to **repeat a block of code multiple times** without writing the same code again and again. This lesson explains **for-loops** and **while-loops**, which are fundamental for iteration, pattern problems, and almost every DSA algorithm.

---

## 🎯 Learning Objectives

By the end of this lesson, you will be able to:

* Understand why loops are needed
* Write `for` and `while` loops
* Control loop execution
* Avoid infinite loops
* Use loops with functions and arrays
* Solve basic iteration problems

---

## 🧠 Total Concepts Covered

**Total Concepts: 8**

1. Why Loops are Needed
2. for-loop Definition & Syntax
3. Loop Components (Initialization, Condition, Update)
4. Common for-loop Patterns
5. Infinite Loop (Wrong vs Right)
6. Loops with Functions
7. Loops with Arrays
8. while-loop Definition & Usage

---

## 1️⃣ Why Do We Need Loops?

### 📖 Definition

A **loop** allows us to execute the same code repeatedly based on a condition.

### ❌ Without Loop

```js
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
```

### ✅ With Loop

```js
for(let i = 0; i < 3; i++){
  console.log("Hello World");
}
```

📌 Loops make code **shorter, cleaner, and scalable**.

---

## 2️⃣ for-loop

### 📖 Definition

A `for` loop is used when we **know how many times** the loop should run.

### 🧱 Syntax

```js
for(initialization; condition; update) {
  // code block
}
```

### 🔍 Loop Components

* **Initialization** → starting point
* **Condition** → loop runs while true
* **Update** → change after each iteration

---

## 3️⃣ Basic for-loop Example

### 🧱 Code

```js
for(let i = 0; i <= 10; i++){
    console.log("Hello World " + i);
}
```

### 🧠 Code Logic Explanation

1. `i = 0` → loop starts
2. `i <= 10` → condition checked
3. Code runs
4. `i++` → increment
5. Loop repeats until condition fails

### 🧪 Dry Run (Step-by-Step)

| Step | i Value | Condition (i <= 10) | Print          | i++ After Loop |
| ---- | ------- | ------------------- | -------------- | -------------- |
| 1    | 0       | true                | Hello World 0  | 1              |
| 2    | 1       | true                | Hello World 1  | 2              |
| 3    | 2       | true                | Hello World 2  | 3              |
| ...  | ...     | ...                 | ...            | ...            |
| 11   | 10      | true                | Hello World 10 | 11             |
| 12   | 11      | false               | ❌ Stop         | —              |

---

## 4️⃣ for-loop with Custom Range

### 🧱 Code

```js
for(let i = 3; i <= 5; i++){
    console.log("Namaste Dev " + i);
}
```

### 🧠 Explanation

* Loop starts from 3
* Ends at 5
* Executes 3 times

### 🧪 Dry Run

| Step | i Value | Condition (i <= 5) | Print         | i++ After Loop |
| ---- | ------- | ------------------ | ------------- | -------------- |
| 1    | 3       | true               | Namaste Dev 3 | 4              |
| 2    | 4       | true               | Namaste Dev 4 | 5              |
| 3    | 5       | true               | Namaste Dev 5 | 6              |
| 4    | 6       | false              | ❌ Stop        | —              |

---

## 5️⃣ Common Mistake: Infinite Loop

### ❌ Wrong Code

```js
for(let i = 0; i < 10; i+1){
  console.log(i);
}
```

### ❗ Why Wrong?

* `i+1` does not update `i`
* Condition always true

---

### ✅ Correct Code

```js
for(let i = 0; i < 10; i = i + 1){
  console.log(i + 1);
}
```

---

## 6️⃣ for-loop with Steps (Increment by 2)

### 🧱 Code

```js
for(let i = 2; i < 9; i = i + 2){
    console.log("HTML " + i);
}
```

### 🧠 Explanation

* Starts at 2
* Increases by 2
* Prints even numbers

### 🧪 Dry Run

| Step | i Value | Condition (i < 9) | Print  | i After Update |
| ---- | ------- | ----------------- | ------ | -------------- |
| 1    | 2       | true              | HTML 2 | 4              |
| 2    | 4       | true              | HTML 4 | 6              |
| 3    | 6       | true              | HTML 6 | 8              |
| 4    | 8       | true              | HTML 8 | 10             |
| 5    | 10      | false             | ❌ Stop | —              |

---

## 7️⃣ Reverse Loop (Decrement)

### 🧱 Code

```js
for(let i = 5; i > 0; i = i - 1){
    console.log("Apple " + i);
}
```

### 🧠 Explanation

* Loop runs backward
* Useful in many DSA problems

### 🧪 Dry Run

| Step | i Value | Condition (i > 0) | Print   | i After Update |
| ---- | ------- | ----------------- | ------- | -------------- |
| 1    | 5       | true              | Apple 5 | 4              |
| 2    | 4       | true              | Apple 4 | 3              |
| 3    | 3       | true              | Apple 3 | 2              |
| 4    | 2       | true              | Apple 2 | 1              |
| 5    | 1       | true              | Apple 1 | 0              |
| 6    | 0       | false             | ❌ Stop  | —              |

---

## 8️⃣ Loop with Function

### 🧱 Code

```js
function greet(i){
    console.log("Namaste! " + i);
}

for(let i = 0; i < 10; i++){
    greet(i);
}
```

### 🧠 Explanation

* Loop calls function multiple times
* Improves modularity

---

## 9️⃣ Looping Through an Array

### 🧱 Code

```js
let arr = [10, 6, 2, 4, 8, 12, 9, 6];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
```

### 🧠 Explanation

* `arr.length` gives total elements
* Loop accesses each index
* Prints element at index `i`

### 🧪 Dry Run

| Step | i Value | Condition (i < arr.length) | arr[i] | Print  | i++ After Loop |
| ---- | ------- | -------------------------- | ------ | ------ | -------------- |
| 1    | 0       | true                       | 10     | 10     | 1              |
| 2    | 1       | true                       | 6      | 6      | 2              |
| 3    | 2       | true                       | 2      | 2      | 3              |
| 4    | 3       | true                       | 4      | 4      | 4              |
| 5    | 4       | true                       | 8      | 8      | 5              |
| 6    | 5       | true                       | 12     | 12     | 6              |
| 7    | 6       | true                       | 9      | 9      | 7              |
| 8    | 7       | true                       | 6      | 6      | 8              |
| 9    | 8       | false                      | —      | ❌ Stop | —              |

---

## 🔟 Print Even Numbers from Array

### 🧱 Code

```js
let array = [10, 6, 2, 0, 8, 3, 80];

for(let i = 0; i < array.length; i++){
    if(array[i] % 2 == 0){
        console.log(array[i]);
    }
}
```

### 🧠 Explanation

* Loop traverses array
* `% 2 == 0` checks even numbers
* Prints only even elements

### 🧪 Dry Run

| Step | i Value | array[i] | array[i] % 2 | Condition | Print  | i++ |
| ---- | ------- | -------- | ------------ | --------- | ------ | --- |
| 1    | 0       | 10       | 0            | true      | 10     | 1   |
| 2    | 1       | 6        | 0            | true      | 6      | 2   |
| 3    | 2       | 2        | 0            | true      | 2      | 3   |
| 4    | 3       | 0        | 0            | true      | 0      | 4   |
| 5    | 4       | 8        | 0            | true      | 8      | 5   |
| 6    | 5       | 3        | 1            | false     | —      | 6   |
| 7    | 6       | 80       | 0            | true      | 80     | 7   |
| 8    | 7       | —        | —            | false     | ❌ Stop | —   |

---

## 1️⃣1️⃣ while-loop

### 📖 Definition

A `while` loop runs **as long as the condition is true**.

### 🧱 Syntax

```js
while(condition) {
  // code
}
```

---

## 1️⃣2️⃣ while-loop Example

### 🧱 Code

```js
let i = 0;

while(i < 5){
    console.log("Hello World");
    i++;
}
```

### 🧠 Code Logic Explanation

1. Condition checked first
2. Code runs
3. `i++` updates value
4. Loop stops when condition fails

### 🧪 Dry Run

| Step | i Value | Condition (i < 5) | Print       | i++ After Loop |
| ---- | ------- | ----------------- | ----------- | -------------- |
| 1    | 0       | true              | Hello World | 1              |
| 2    | 1       | true              | Hello World | 2              |
| 3    | 2       | true              | Hello World | 3              |
| 4    | 3       | true              | Hello World | 4              |
| 5    | 4       | true              | Hello World | 5              |
| 6    | 5       | false             | ❌ Stop      | —              |

---

## 🧩 Why Loops Matter in DSA

* Used in array traversal
* Required for searching & sorting
* Essential for pattern problems
* Backbone of algorithms

---

## 🔟➕ Print Odd Numbers from Array

### 🧱 Code

```js
let arrays = [10, 6, 2, 0, 8, 3, 80];

for(let i = 0; i < arrays.length; i++){
    if(arrays[i] % 2 == 1){
        console.log(arrays[i]);
    }
}
```

### 🧠 Explanation

* `% 2 == 1` checks odd numbers
* Only odd elements are printed

### 🧪 Dry Run

| Step | i Value | arrays[i] | arrays[i] % 2 | Condition | Print  | i++ |
| ---- | ------- | --------- | ------------- | --------- | ------ | --- |
| 1    | 0       | 10        | 0             | false     | —      | 1   |
| 2    | 1       | 6         | 0             | false     | —      | 2   |
| 3    | 2       | 2         | 0             | false     | —      | 3   |
| 4    | 3       | 0         | 0             | false     | —      | 4   |
| 5    | 4       | 8         | 0             | false     | —      | 5   |
| 6    | 5       | 3         | 1             | true      | 3      | 6   |
| 7    | 6       | 80        | 0             | false     | —      | 7   |
| 8    | 7       | —         | —             | false     | ❌ Stop | —   |

---

## 🧾 Final Summary

### Key Takeaways

* Loops repeat tasks efficiently
* `for` loop → known iterations
* `while` loop → condition-based
* Always update loop variable
* Avoid infinite loops

### Best Practices

* Use meaningful variable names
* Keep loop logic simple
* Always test boundary conditions

---

🚀 **Master loops to unlock the power of DSA problem solving**

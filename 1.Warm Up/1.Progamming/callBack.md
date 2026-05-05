# 7️⃣ Callbacks & Promises — Commented Code (Logic First)

A **logic-first, interview-ready explanation** of **Callbacks, Promises, and async/await** with fully commented code. Perfect for **Canva**, **GitHub**, and **JS interviews**.

---

## 🔹 PART 1: CALLBACKS (STEP-BY-STEP)

## ▶ What is a Callback?

A **callback** is a function **passed as an argument** to another function and **executed later**.

---

## ✅ Simple Callback Example

```js
// Function that accepts a name and a callback function
function greet(name, callback) {

  // Step 1: Print greeting message
  console.log("Hello " + name);

  // Step 2: Call the callback function
  // This runs AFTER the greeting
  callback();
}

// Callback function definition
function sayBye() {
  console.log("Bye!");
}

// Function call
// sayBye is PASSED, not executed here
greet("Akshay", sayBye);
```

### 🔍 Execution Flow

```
1️⃣ greet("Akshay", sayBye) is called
2️⃣ "Hello Akshay" is printed
3️⃣ callback() → sayBye() runs
4️⃣ "Bye!" is printed
```

---

## ✅ Async Callback Example (`setTimeout`)

```js
function fetchData(callback) {

  // setTimeout simulates async operation (like API call)
  setTimeout(() => {

    // After 1 second, callback is executed
    callback("Data received");

  }, 1000);
}

// Passing callback function
fetchData(function (data) {

  // This runs AFTER async task completes
  console.log(data);
});
```

### 🔍 Execution Flow

```
1️⃣ fetchData() is called
2️⃣ setTimeout waits 1 second
3️⃣ callback("Data received") runs
4️⃣ Data is logged
```

---

## ❌ Callback Hell (WHY CALLBACKS ARE BAD)

```js
setTimeout(() => {
  console.log("Task 1");

  setTimeout(() => {
    console.log("Task 2");

    setTimeout(() => {
      console.log("Task 3");
    }, 1000);

  }, 1000);

}, 1000);
```

### 🚫 Problems

* Deep nesting
* Poor readability
* Hard debugging
* Messy error handling

---

## 🔹 PART 2: PROMISES (THE SOLUTION)

## 🧠 What is a Promise?

A **Promise** represents a value that will be available **in the future**.

### Promise States

* `pending`
* `fulfilled`
* `rejected`

---

## ✅ Creating a Promise

```js
// Function that returns a Promise
function fetchData(){

    // Creating a new Promise object
    return new Promise((resolve, reject)=>{

        // Simulating API delay (asynchronous operation)
        setTimeout(()=>{

            const success = true   // condition to simulate success or failure

            if(success){
                // ✅ If success → send data back
                resolve("data received")
            }
            else{
                // ❌ If failure → send error
                reject("ERROR OCCURED")
            }

        }, 1000) // wait for 1 second
    })
}
```
“The .json() method is only available on Response objects returned by the fetch API. Since our Promise returns a string, calling .json() will cause an error.”
🔄 Full Execution Flow
getData() called
await fetchData() → waits 1 second
resolve("data received")
res = "data received"
console.log(res)

🚀 Key Takeaways
Promise can return anything (string/object/array)
.json() is only for fetch API responses
await pauses execution
try-catch handles errors.

✅ 1. Promise

A Promise represents a future value

✅ 2. async/await

Makes asynchronous code look like synchronous

✅ 3. resolve vs reject
resolve() → success
reject() → error

---

## ✅ Consuming a Promise

```js
fetchData()
  .then(data => {
    console.log(data); // success
  })
  .catch(error => {
    console.log(error); // error
  });
```

### 🔍 Execution Flow

```
1️⃣ fetchData() returns a Promise
2️⃣ Promise is pending
3️⃣ resolve() runs after 1 second
4️⃣ .then() receives the data
```

---

## ✅ Promise Rejection Example

```js
function checkValue(value) {
  return new Promise((resolve, reject) => {

    if (value > 10) {
      resolve("Valid value");
    } else {
      reject("Invalid value");
    }
  });
}

checkValue(5)
  .then(msg => console.log(msg))
  .catch(err => console.log(err));
```

---

## 🌟 PART 3: ASYNC / AWAIT (BEST PRACTICE)

## ✅ Async / Await Version

```js
async function getData() {
  try {
    // await pauses execution until promise resolves
    const data = await fetchData();
    console.log(data);

  } catch (error) {
    // Handles promise rejection
    console.log(error);
  }
}

// Function call
getData();
```

### 🔍 Execution Flow

```
1️⃣ getData() is called
2️⃣ await waits for fetchData()
3️⃣ Promise resolves
4️⃣ Data is printed
```

---

## 🧠 Master Summary

```txt
================ CALLBACKS & PROMISES SUMMARY =================

Callback:
- Function passed as argument
- Executed later
- Used in async tasks
- Leads to callback hell

Promise:
- Represents future value
- States: pending, fulfilled, rejected
- Cleaner chaining with then/catch

Async/Await:
- Built on promises
- Looks synchronous
- Uses try/catch
- BEST practice

--------------------------------
Why Promises are better than Callbacks?

✔ No deep nesting
✔ Better error handling
✔ More readable
✔ Easier debugging

--------------------------------
Interview Golden Rule 🏆

"Callback → Promise → async/await"

--------------------------------
One-line Memory Trick 🧠

"Callbacks wait, Promises manage, async/await simplifies"
================================================
```

---

📌 **Use this file as a standalone reference for Canva, GitHub, or interviews.**

Happy Coding 🚀

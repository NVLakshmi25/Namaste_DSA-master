🔁 call, apply, bind — Deep Dive (Commented Code)
A clear, interview-focused deep dive into call, apply, and bind with fully commented examples, execution flow, and common traps. Perfect as a standalone Canva / GitHub file.

🧠 Why call, apply, bind Exist?
They are used to explicitly control the value of this.

📌 Remember:

this = who calls the function With call / apply / bind → YOU decide this

🔹 Basic Setup (Common Function)
function greet(city, country) {
  console.log(
    "Hello " + this.name +
    " from " + city + ", " + country
  );
}

const user = {
  name: "Akshay"
};
1️⃣ call() — Immediate Execution
// call(thisArg, arg1, arg2, ...)
greet.call(user, "Delhi", "India");
🔍 Execution Flow
1️⃣ greet.call(...) is invoked
2️⃣ this → user
3️⃣ Arguments passed individually
4️⃣ Function executes immediately
Output

Hello Akshay from Delhi, India
2️⃣ apply() — Immediate Execution (Array Arguments)
// apply(thisArg, [arg1, arg2])
greet.apply(user, ["Mumbai", "India"]);
🔍 Execution Flow
1️⃣ greet.apply(...) is invoked
2️⃣ this → user
3️⃣ Arguments passed as ARRAY
4️⃣ Function executes immediately
Output

Hello Akshay from Mumbai, India
🔍 call vs apply
Feature	call	apply
Execution	Immediate	Immediate
Arguments	Individual	Array
Use case	Known args	Dynamic args
3️⃣ bind() — Returns a New Function 🔥
// bind(thisArg, arg1, arg2)
const boundGreet = greet.bind(user, "Pune", "India");
🔍 Execution Flow
1️⃣ greet.bind(...) does NOT execute
2️⃣ Returns a NEW function
3️⃣ this is permanently bound
boundGreet();
Output

Hello Akshay from Pune, India
🔹 Partial Arguments (Currying)
const greetIndia = greet.bind(user, "Bangalore");

greetIndia("India");
📌 bind supports partial application

🔥 Interview Favorite: Fixing Lost this
❌ Problem
const user = {
  name: "Virat",
  greet() {
    console.log(this.name);
  }
};

const sayHello = user.greet;
sayHello(); // undefined
✅ Fix Using bind
const fixedGreet = user.greet.bind(user);
fixedGreet(); // Virat
📌 bind permanently locks this

🔹 call vs bind (IMPORTANT DIFFERENCE)
greet.call(user, "Delhi", "India"); // runs now

const fn = greet.bind(user, "Delhi", "India");
fn(); // runs later
🔹 apply Real Use Case — Math.max
const numbers = [5, 9, 2, 15, 3];

const maxValue = Math.max.apply(null, numbers);
console.log(maxValue); // 15
✅ Modern Alternative
Math.max(...numbers);
🔹 this Inside Arrow Function (TRAP ❌)
function show() {
  const arrow = () => {
    console.log(this);
  };
  arrow();
}

show.call({ x: 10 });
Output

{ x: 10 }
📌 call / apply / bind do NOT affect arrow functions 📌 Arrow functions use lexical this

🧠 Master Summary
==================== call / apply / bind SUMMARY ====================

Purpose:
- Manually control the value of this

--------------------------------
call():
- Executes immediately
- Arguments passed individually

apply():
- Executes immediately
- Arguments passed as array

bind():
- Does NOT execute immediately
- Returns new function
- this is permanently bound

--------------------------------
Execution Difference:

call  → run now
apply→ run now
bind → run later

--------------------------------
Common Use Cases:

✔ Borrow methods
✔ Fix lost this
✔ Function reuse
✔ Partial arguments

--------------------------------
Arrow Function Rule 🔥

- call/apply/bind do NOT affect arrow functions
- Arrow uses lexical this

--------------------------------
Interview Golden Rule 🏆

"call & apply invoke, bind returns"

--------------------------------
One-line Memory Trick 🧠

"call = comma, apply = array, bind = backup"
================================================
📌 Use this file as a standalone reference for interviews, Canva, or GitHub.

Happy Coding 🚀

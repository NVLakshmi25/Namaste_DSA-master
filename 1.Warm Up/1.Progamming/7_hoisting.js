// 🔹 EXAMPLE 1: var HOISTING

// Example with var
// console.log(a); // undefined (NOT error)

// var a = 10;

// ====================================

// 🔍 What actually happens (behind the scenes):

// JavaScript interprets it like this:
var a;           // declaration hoisted
console.log(a);  // undefined
a = 10;          // assignment happens later

// 👉 var is hoisted and initialized as undefined

// ******************************************************************************

// 🔹 EXAMPLE 2: let & const HOISTING

// console.log(b); // ❌ ReferenceError
// let b = 20;

// console.log(c); // ❌ ReferenceError
// const c = 30;


/*
==================== HOISTING + TDZ SUMMARY ====================

HOISTING:
- JavaScript moves declarations to the top
- Happens during memory creation phase

--------------------------------
var:
- Hoisted
- Initialized as undefined
- Can be accessed before declaration (BAD PRACTICE)

let / const:
- Hoisted
- NOT initialized
- Access before declaration → ReferenceError

--------------------------------
TEMPORAL DEAD ZONE (TDZ):

- Time between variable hoisting and initialization
- Applies to let and const
- Accessing variable in TDZ → ERROR

--------------------------------
FUNCTION HOISTING:

Function Declaration:
- Fully hoisted
- Can be called before definition

Function Expression:
- NOT hoisted
- Behaves like variable

--------------------------------
WHY TDZ EXISTS?

- Prevents usage of variables before declaration
- Makes code safer
- Avoids bugs caused by undefined values

--------------------------------
INTERVIEW GOLDEN RULE 🏆

"var → undefined, let/const → TDZ error"

--------------------------------
ONE-LINE MEMORY TRICK 🧠

"var hoists with undefined,
 let & const hoist with TDZ"

--------------------------------
BEST PRACTICE 💼

✔ Use let / const
❌ Avoid var
✔ Declare variables at the top

================================================
*/

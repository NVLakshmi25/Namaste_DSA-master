// **************** var VARIABLE ****************

// var is function-scoped (NOT block-scoped)
var a = 10;
console.log(a); // Output: 10

// var allows re-declaration
var a = 20;
console.log(a); // Output: 20

// var allows reassignment
a = 30;
console.log(a); // Output: 30


// **************** let VARIABLE ****************

// let is block-scoped
let b = 40;
console.log(b); // Output: 40

// let allows reassignment
b = 50;
console.log(b); // Output: 50

// ❌ let does NOT allow redeclaration in same scope
// let b = 60; // Error


// **************** const VARIABLE ****************

// const is block-scoped
const c = 100;
console.log(c); // Output: 100

// ❌ const does NOT allow reassignment
// c = 200; // Error

// ❌ const does NOT allow redeclaration
// const c = 300; // Error


// **************** BLOCK SCOPE EXAMPLE ****************

if (true) {
    var x = 1;
    let y = 2;
    const z = 3;
}

console.log(x); // ✅ Works (var is NOT block-scoped)
// console.log(y); // ❌ Error (let is block-scoped)
// console.log(z); // ❌ Error (const is block-scoped)


/*
==================== MASTER SUMMARY ====================

VARIABLE KEYWORDS IN JAVASCRIPT:

1️⃣ var
2️⃣ let
3️⃣ const

------------------------------------------------
SCOPE DIFFERENCE (🔥 VERY IMPORTANT 🔥)

var:
- Function-scoped
- NOT block-scoped
- Accessible outside blocks

let / const:
- Block-scoped
- Accessible ONLY inside { }

------------------------------------------------
REASSIGNMENT RULES:

var   → allowed
let   → allowed
const → ❌ NOT allowed

------------------------------------------------
REDECLARATION RULES:

var   → allowed
let   → ❌ NOT allowed
const → ❌ NOT allowed

------------------------------------------------
HOISTING DIFFERENCE:

var:
- Hoisted and initialized as undefined
- Can be used before declaration (bad practice)

let / const:
- Hoisted but NOT initialized
- Access before declaration → ReferenceError
- This zone is called "Temporal Dead Zone (TDZ)"

------------------------------------------------
WHEN TO USE WHAT? 🎯

- Use const → DEFAULT choice
- Use let   → when value must change
- Avoid var → legacy code only

------------------------------------------------
REAL INTERVIEW RULE 🏆

"Always prefer const, then let, never var"

------------------------------------------------
COMMON MISTAKES:

❌ Using var inside loops
❌ Expecting block-scope behavior from var
❌ Reassigning const
❌ Redeclaring let / const

------------------------------------------------
ONE-LINE GOLDEN RULE 🏆

"var is old, let is flexible, const is safe"

================================================
*/


/*
==================== BLOCK SCOPE SUMMARY ====================

What is Block Scope?
- A block is code inside { }
- Variables declared with let / const
  exist ONLY inside that block

------------------------------------------------
BLOCKS THAT CREATE SCOPE:

- if { }
- else { }
- for { }
- while { }
- { } (standalone block)

------------------------------------------------
SCOPE BEHAVIOR:

var:
- NOT block-scoped
- Escapes blocks
- Can overwrite variables accidentally

let / const:
- Block-scoped
- Safer
- Predictable behavior

------------------------------------------------
WHY var IS DANGEROUS ❌

- Leaks variables outside blocks
- Causes unexpected overwrites
- Hard to debug in large codebases

------------------------------------------------
WHY let / const ARE SAFE ✅

- Limited visibility
- Prevent accidental access
- Cleaner logic
- Interview recommended

------------------------------------------------
INTERVIEW TRICK QUESTION 🎯

Q: Why does this print 50?

var x = 10;
if (true) {
  var x = 50;
}
console.log(x);

A: Because var ignores block scope

------------------------------------------------
GOLDEN RULE 🏆

"Block creates scope ONLY for let and const"

------------------------------------------------
ONE-LINE MEMORY TRICK 🧠

"var leaks, let protects, const locks"

================================================
*/

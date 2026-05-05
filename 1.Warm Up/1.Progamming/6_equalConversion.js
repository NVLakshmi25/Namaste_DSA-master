// =====================================================
// ==  (LOOSE EQUALITY)
// === (STRICT EQUALITY)
// =====================================================


// **************** BASIC EXAMPLES ****************

// == checks VALUE only (does type conversion)
console.log(5 == "5");     // true  → string "5" converted to number 5

// === checks VALUE + TYPE (no conversion)
console.log(5 === "5");    // false → number ≠ string


// **************** NUMBER & STRING ****************

console.log(10 == "10");   // true
console.log(10 === "10");  // false


// **************** BOOLEAN COMPARISON ****************

// true becomes 1, false becomes 0 in ==

console.log(true == 1);    // true
console.log(false == 0);   // true

console.log(true === 1);   // false
console.log(false === 0);  // false


// **************** NULL & UNDEFINED ****************

// Special case (VERY IMPORTANT)
console.log(null == undefined);   // true
console.log(null === undefined);  // false

// Other comparisons
console.log(null == 0);            // false
console.log(undefined == 0);       // false


// **************** EMPTY STRING ****************

console.log("" == 0);      // true  → "" becomes 0
console.log("" === 0);     // false


// **************** ARRAY COMPARISON ****************

console.log([] == 0);      // true  → [] becomes ""
// console.log([] === 0);     // false

// console.log([] == "");     // true
// console.log([] === "");    // false


// **************** OBJECT COMPARISON ****************

let obj1 = {};
let obj2 = {};

console.log(obj1 == obj2);   // false
console.log(obj1 === obj2);  // false
// Different memory locations


// **************** SAFE COMPARISON ****************

let a = 10;
let b = 10;

console.log(a === b); // true (same type + same value)


/*
==================== == vs === SUMMARY ====================

==  (LOOSE EQUALITY)
--------------------------------
- Compares ONLY values
- Performs TYPE CONVERSION
- Can lead to unexpected results
- NOT recommended in most cases

=== (STRICT EQUALITY)
--------------------------------
- Compares VALUE + TYPE
- NO type conversion
- Predictable and safe
- RECOMMENDED for real code

--------------------------------
TYPE CONVERSION RULES (==):

- "5" → 5
- true → 1
- false → 0
- "" → 0
- null == undefined → true

--------------------------------
WHY == IS DANGEROUS ❌

Examples:
"" == 0           → true
false == 0        → true
[] == ""          → true
null == undefined→ true

These confuse developers and cause bugs

--------------------------------
WHY === IS SAFE ✅

- No conversion
- Clear logic
- No surprises
- Interview preferred

--------------------------------
INTERVIEW GOLDEN RULE 🏆

"Always use === unless you REALLY know why you need =="

--------------------------------
ONE-LINE MEMORY TRICK 🧠

==  → compares VALUE
=== → compares VALUE + TYPE

--------------------------------
INTERVIEW TRICK QUESTION 🎯

Q: Why is [] == "" true?
A: Because [] converts to empty string ""

--------------------------------
REAL-WORLD BEST PRACTICE 💼

✔ Use === everywhere
❌ Avoid == in production code

================================================
*/

//1.  logic  

console.log(x);
var x=10 ; // undefined due to  hoisted

// variable declared with  var  got hoisted as  undefined, not the value.

let a = 10;
let a = 20;
console.log(a); // Syntax Error
// let cannot be redeclared in the same scope.

// 2.temporal dead  zone
console.log(a)
let a=5;   // reference error --- due to  temporal dead zone

//   let is block scoped it is the waiting period between the  hoisting and initialization. when we declare the variable   with let/const 
//   got in temporal deadzone until  initialized.   this error occur due to   access the variables  before  initialization.


// 3. shadowing 
var x=5;
function test(){
    console.log(x); // undefined  due to  shadowing (local variable memory), this is hoisted because declare with "var" got undefined  
    var x=10;
}
test(); 

// var is  function scope
// shadowing means   declare variable  with same name  both inner scope and outer scope , 
// it temperarily  hide the outer scope
// so   shadowing means  inner scope doesnot effect the outer scope that is legal (let with let )
// more over  shadowing let  variable (outer)  with var is illegal.// reason ::  var tries  to overwrite (old) the outer  let .
// vat to let shadowing  is allowed .
// ❌ let  to var  shadowing  is not allowed 


// The output is undefined because the local 
// variable x is hoisted inside the function and shadows the global x,
//  but it is not initialized at the time of logging.


// logic 4  

function a(){
  console.log("A");
}

a();

// 1️⃣ Function a is defined
// 2️⃣ Function a() is called
// 3️⃣ Inside it, console.log("A") prints A


// 5. lexical scope

var x=1;

function b(){
    //Inside b
    console.log(x)  // 1
}
function a(){
    var x=10; // local x becomes 10
    b();   // call function b
}
a();


// Now JS searches for variable x:

// 1️⃣ Inside function b → ❌ not found
// 2️⃣ Go to its lexical parent (Global scope) → ✔ found

// ⚠️ Important:
// b was defined in global scope,
// so it uses global x, not a’s local x.

// Global x = 1

// 🖨️ Output: 1

// 🎯 Why Not 10?

// Because:

// b() does NOT look inside a()

// It looks where it was defined (global scope)

// This is called:

// 🧠 Lexical Scoping

//The output is 1 because JavaScript uses lexical scoping. Function b accesses the variable from the scope where it was defined (global scope), not where it was called.

// 🧠 Key Concept: Lexical Scope

// A function remembers variables from  the scope where function  was created, not where it is called.

// Function "b"  was created in the global scope,
// so it looks for variables in the global scope.




// example 2 
// A function can access variables from:

// Its own scope

// Its parent scope

// Global scope

// Based on where it is written, not where it is called.


function a(){
 var x = 10
 function b(){
  console.log(x)
 }
 b()
}

a()

// Global Memory
//    |
//    └── a() Execution Context
//          x = 10
//          b → function

//               |
//               └── b() Execution Context
//                     needs x
//                     → goes to parent scope
//                     → gets x = 10

//This code demonstrates closure.
//Function b forms a closure with its lexical scope and accesses variable x from its parent function a.


// 7. aynchrounous operation 

for(let i=0; i<3; i++){
    setTimeout(()=>console.log(i), 100)
}

// 0
// 1
// 2

// (Order is same because all delays are equal)
//setTimeout is a function to  perform  asynchrous operations, it shedules  task  after a specific  delay. before  it execute this code  until it waits in callback queue.
//   we use let  keyword  so  let is block scope .  with let , javascript  creates a new block-scoped variable "i" for each loop iteration.
// so each timeout function  remembers  its own  variable  i (closure)
// so each setTimeout callback function  prints its own value: 0, 1, 2. after  100ms .
// Callbacks run after loop ends



// All callbacks reference SAME variable i

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// With var, the for  loop shares one variable i. When setTimeout callbacks run after the loop ends, i is 3, so All callbacks print same value.
// i = 0  → run
// i = 1  → run
// i = 2  → run
// i = 3  → stop
// It prints 3 times because the loop runs 3 iterations and schedules 3 callbacks.


//  logic  9
console.log(typeof null) ; // object

//typeof null returns "object" due to a legacy bug in JavaScript, 
// even though null represents an intentional absence( empty value) of value.
// This is a JavaScript historical bug.
// This is a historical bug in JavaScript.

// null means → empty value / no value

// But typeof null returns → "object"
// null is:
// A special value

// Represents intentional absence of value

// Not an object

// Not undefined

// | Feature     | null                         | undefined                          |
// | ----------- | ---------------------------- | ---------------------------------- |
// | Meaning     | Empty value set by developer | Variable declared but not assigned |
// | Typeof      | "object" ❌ bug              | "undefined"                        |
// | Assigned by | Developer                    | JavaScript                         |

 
//  logic 10
 let a;
console.log(a);            // undefined
console.log(typeof a);     // "undefined" // "undefined"

// A variable is declared but JavaScript automatically assigns undefined.
// 🔍 Why typeof undefined → "undefined"?

// Because:

// undefined is a primitive data type

// typeof operator correctly identifies its type

// So:

// value = undefined
// type = "undefined"

// logic 
getName()

var getName = function(){
 console.log("JS")  // TypeError: getName is not a function
}

// Because of Hoisting behavior in JavaScript.
// During the memory creation phase, JavaScript moves:

// ✅ Variable declarations → top (initialized as undefined)

// ✅ Function declarations → top (with full function body)

// ❌ Function expressions → NOT hoisted as functions

// Function expressions are not hoisted like function declarations.
// Only the variable is hoisted as undefined, so calling it before assignment throws a TypeError.


// logic 11

console.log(typeof  undefined) // undefined

// logic 12
console.log(1 + "2")  // 12
// JavaScript converts numbers to string.
console.log(1 + "2" + 3);  // 123
console.log(1 + 2 + "3");  // 33

//logic 13
console.log("5" -2)  // 3   Because - converts string to number.


// logic 14
console.log([] + [])  // ""

// + operator in JavaScript

// If numbers → addition

// If strings → concatenation

// If objects/arrays → converted to primitive first

// ➤ Array to primitive

// When an array is converted to a string:

// [].toString()  // ""

// An empty array becomes an empty string.
  
// [] + []
// ↓
// "" + ""
// ↓
// ""

// Two empty arrays become empty strings.
// ✅ Output:

"" 

// logic  15
console.log([] + {})  //  "[object Object]"

// Again, JS converts both to primitives.
// ➤ Left side: []
// [].toString() → ""
// ➤ Right side: {}

// Plain object converts like this:

// ({}).toString() → "[object Object]"

// [] + {}
// ↓
// "" + "[object Object]"
// ↓
// "[object Object]"
// ✅ Output:
// "[object Object]"

console.log([] == ![]); // true    Very tricky coercion.

console.log(typeof function(){}); // function

console.log(!!"hello");  // true    Double !! converts value to boolean.

// logic 16
console.log({} + [])

// {} → object → converts to string

// [] → array → converts to string

// ({}).toString() → "[object Object]"
// [].toString()   → ""

// "[object Object]" + ""
// → "[object Object]"

// "[object Object]"


// logic  17
{} + []   // 0

// JS treats {} as an empty block, not an object.
// +[] → unary plus → number conversion
// [].toString() → ""
// Number("") → 0


// logic  18
[] == false  // true 
// == → loose equality → type coercion happens

//false → 0
//  Array → primitive → string → number

// [].toString() → ""
// Number("") → 0

0 == 0 → true  // true


// logic 19
//   === checks the type 
 [] === []
//== → loose equality → type coercion happens
// === → strict equality
// No type conversion.
// Objects compared by reference, not value.
// Each array is a different object in memory.

[] === [] → false


🧠 Memory Trick

Two objects are equal only if they point to same memory.

const a = []
const b = []
a === b // false

const c = a
a === c // true


// ✅ + operator

// If string present → concatenation

// Else → numeric addition

// ✅ ==

// Converts both sides to same type

// ✅ ===

// No conversion

// Checks value + type

// ✅ Objects

// Compared by reference


🔥 1️⃣ null == undefined → true

// They both mean:

// undefined → value not assigned

// null → value intentionally empty

// So JS treats them as “same absence of value”.

//null and undefined are treated as equal in loose comparison


🔥 2️⃣ null === undefined → false

// === means strict equality

// No type conversion
// Type + value both must be same.

// Value	Type
// null	object (special case bug)
// undefined	undefined

// Types different ❌

// So:

// null === undefined → false

Loose equality lo:

❌ Direct value check kaadu
✅ First type conversion → then value check

So [] == false → true

// == operator rule:

// If types are different → make them same type → then compare values.Direct

// Here:

// [] == false
// Value	   Type
// []	       Object (Array)
// false      	Boolean

// Types different ❌
// So JS says:

// “Same type lo compare cheddam.”


[] === []

// Both are Arrays (Objects) ✅
// But…

// Objects compare by reference, not content.

// Two arrays = two different memory boxes 📦📦

// ➡ Result: false


let a = [];
let b = a;
a === b

// Both point to same memory 📦
// ➡ Result: true


=== → “Same type + Same value = True”
Otherwise → False


| Expression           | Result              |
| -------------------- | ------------------- |
| `[] + []`            | `""`                |
| `[] + {}`            | `"[object Object]"` |
| `{}` + `[]`          | `0`                 |
| `true + true`        | `2`                 |
| `true + false`       | `1`                 |
| `false + false`      | `0`                 |
| `[] == false`        | `true`              |
| `"" == false`        | `true`              |
| `null == undefined`  | `true`              |
| `null === undefined` | `false`             |
| `"5" - 2`            | `3`                 |
| `"5" + 2`            | `"52"`              |


// logic 20
console.log(NaN === NaN) // false
console.log("hello" * 2); // NaN

// ❓ Why false?
// ✅ What is NaN?

// NaN = Not a Number

// It represents an invalid numeric result.
// NaN is the only value in JavaScript that is NOT equal to itself

NaN === NaN   // false
NaN == NaN    // false

Number.isNaN(value)

Number.isNaN(NaN) // true

// logic 21
console.log(typeof NaN) // number

// ❓ Why is NaN a number?

// Because:

// NaN comes from numeric operations

// It is a special numeric error value

// JavaScript has only one number type:

// IEEE 754 floating-point number

// NaN belongs to that number system.

// So:

typeof NaN === "number"  // true

// logic  22
console.log(0.1 + 0.2)  //  0.30000000000000004

// ❓ Why extra digits?
// 🧮 Reason: Binary Floating Point Precision

// Computers store decimals in binary (base 2)
// Some decimal numbers cannot be represented exactly.
 console.log(0.1 + 0.2 === 0.3); // false      Reason → floating point precision.

// Just like:

// 1/3 = 0.333333…

// In binary:

// 0.1 and 0.2 become repeating fractions

// So rounding errors happen.

// What actually happens:
// 0.1 → 0.0001100110011...
// 0.2 → 0.001100110011...
// Add → slight precision error
// ✅ Fix (when displaying money etc.)
// (0.1 + 0.2).toFixed(2)  // "0.30"


// logic  23
// Automatic Semicolon Insertion (ASI)
function test(){
    return
    {
        name:"js"
    }
}
console.log(test())  // undefined 
//JavaScript automatically inserts semicolon after return
// So function returns nothing → undefined
// Never put a newline immediately after return
 examples :::
function test(){
    return;   // semicolon inserted
    {
        name:"js"
    }
}
// ✔️ Option 1 — Same line 
return {
    name:"js"
}
// ✔️ Option 2 — Parentheses
return (
    {
        name:"js"
    }
)


// scope chain logic 
let a = 10;

function outer(){
  let a = 20;

  function inner(){
    console.log(a);
  }

  inner();
}

outer(); // 20


//  Object reference
let obj1 = {a:1};
let obj2 = obj1;

obj2.a = 10;

console.log(obj1.a); // 10


//  Array reference

let arr1 = [1,2];
let arr2 = arr1;

arr2.push(3);

console.log(arr1); // [1,2,3]

// Function inside loop (closure fix)

for (var i = 0; i < 3; i++) {
  (function(i){
    setTimeout(() => console.log(i), 100);
  })(i);
}
// 0
// 1
// 2

// Explanation:

// IIFE creates new scope

=================================

const user={
    name:"lakshmi",
    age:22
};
// obj to json ====> stringify jsonj
const jsonData =JSON.stringify(user);
console.log(jsonData);
// json to obj =====> parse json
const obj =JSON.parse(jsonData);
console.log(obj);





//  shallow copy means copying  object  but keeping the reference of nested object . 
const obj1 = {a:1};

const obj2 = {...obj1};

obj2.a = 10;

console.log(obj1.a);  // 1
console.log(obj2.a) ; // 10 
const obj2 = JSON.parse(JSON.stringify(obj1));  // deep copy means   its completely create the independent object 
console.log(obj2); // { a: 1 }

------------------------------------

function outer(){
let count = 0;
return function inner(){
   count++;
   console.log(count);
 }
}
const counter = outer();
counter();
counter();


=====================================
// this keyword

function sayMyName(name){
// Here, we define a function named sayMyName that takes one parameter called name. This function will be used to print a message that includes the name passed to it.
    console.log(`My name is  ${name}`);
// Inside the function, we use console.log to print a message to the console. The message is a template literal (enclosed in backticks ``) that includes the value of the name parameter. The ${name} syntax is used to insert the value of name into the string.
}
// This closes the sayMyName function.
sayMyName("Walter White")
//We call the sayMyName function and pass the string "Walter White" as an argument. The function executes and prints My name is Walter White to the console.
sayMyName("venkat")
// We call the sayMyName function again, this time passing the string "Venkat" as an argument. The function executes and prints My name is Venkat to the console.


// PS C:\Users\VENKY\Desktop\Advanced JS course> node "c:\Users\VENKY\Desktop\Advanced JS course\This.js"
// My name is  Walter White
// My name is  venkat

const person = {
    name: "Walter White",
    sayMyName: function() {
        console.log(`My name is ${this.name}`);
    }
};

person.sayMyName(); // This would print "My name is Walter White"






















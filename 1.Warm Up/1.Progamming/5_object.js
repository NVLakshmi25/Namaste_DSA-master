// ****** BASIC OBJECT ******

// Creating an object using key-value pairs
let obj = {
    a: 7,                    // number property
    firstName: "Akshay",     // string property
    lastName: "Saini",       // string property
    bool: true,              // boolean property
    arr: [6, 7, 8]           // array as a property
};

// Access object properties using dot notation
console.log(obj.a);          // Output: 7

// Access array stored inside object
console.log(obj.arr);        // Output: [6, 7, 8]

// Access specific element from nested array
console.log(obj.arr[1]);     // Output: 7

// Combine object properties
console.log(obj.firstName + " " + obj.lastName); // Output: Akshay Saini


/*
==================== SUMMARY ====================

WHAT IS AN OBJECT?
- An object is a collection of related data
- Data is stored in "key : value" pairs
- Keys are always strings (implicitly)
- Values can be ANY data type

Example:
{
  name: "Akshay",
  age: 25,
  isStudent: true,
  marks: [80, 90],
  address: { city: "Delhi" }
}

---------------------------------------------------------
WHY USE OBJECTS?

- To group related data together
- To represent real-world entities
- Makes code readable and structured

Examples of real-world objects:
- user
- product
- employee
- car

---------------------------------------------------------
OBJECT PROPERTY ACCESS:

1️⃣ Dot Notation (MOST COMMON)
- obj.name
- obj.age

2️⃣ Bracket Notation
- obj["name"]
- obj[keyVariable]

IMPORTANT:
- Use bracket notation when key is dynamic
- Dot notation does NOT work with variables

---------------------------------------------------------
OBJECT CAN CONTAIN:

- Numbers
- Strings
- Booleans
- Arrays
- Other objects
- Functions (methods)

Example:
let user = {
  name: "Akshay",
  greet: function () {
    console.log("Hello");
  }
};

---------------------------------------------------------
OBJECT METHODS:

- Object.keys(obj)    → returns array of keys
- Object.values(obj)  → returns array of values
- Object.entries(obj) → returns key-value pairs

---------------------------------------------------------
LOOPING THROUGH OBJECTS:

for (let key in obj) {
  console.log(key, obj[key]);
}

---------------------------------------------------------
COMMON OBJECT OPERATIONS:

- Add property:
  obj.age = 25;

- Update property:
  obj.age = 26;

- Delete property:
  delete obj.age;

---------------------------------------------------------
COMMON OBJECT MISTAKES (VERY IMPORTANT):

❌ Using dot notation with dynamic keys
❌ Forgetting object keys are case-sensitive
❌ Confusing arrays and objects
❌ Trying to loop objects like arrays

---------------------------------------------------------
OBJECT vs ARRAY (QUICK DIFFERENCE):

ARRAY:
- Ordered collection
- Index-based access
- Best for lists

OBJECT:
- Unordered collection
- Key-based access
- Best for structured data

---------------------------------------------------------
OBJECT vs JSON (🔥 VERY IMPORTANT 🔥)

OBJECT:
- JavaScript data structure
- Can store functions
- Keys do NOT need quotes
- Can use comments
- Used inside JavaScript code

Example:
let obj = {
  name: "Akshay",
  greet: function () {}
};

---------------------------------------------------------
JSON (JavaScript Object Notation):

- Data format (not a JS object)
- Used to send/receive data
- Keys MUST be in double quotes
- Cannot contain functions
- No comments allowed

Example JSON:
{
  "name": "Akshay",
  "age": 25,
  "isStudent": true
}

---------------------------------------------------------
OBJECT vs JSON — SIDE BY SIDE

OBJECT:
- Used in JS code
- Allows functions
- Keys may be unquoted
- Supports comments

JSON:
- Used for data exchange
- No functions allowed
- Keys must be in double quotes
- No comments allowed

---------------------------------------------------------
CONVERT OBJECT ↔ JSON:

Object → JSON string:
JSON.stringify(obj)

JSON string → Object:
JSON.parse(jsonData)

---------------------------------------------------------
INTERVIEW THINKING STEPS 🎯

1️⃣ Do I need structured data? → Object
2️⃣ Do I need to send data to server? → JSON
3️⃣ Do I need behavior (functions)? → Object
4️⃣ Do I need data only? → JSON

---------------------------------------------------------
GOLDEN RULE 🏆

"Objects are for logic, JSON is for data transfer"

================================================
*/

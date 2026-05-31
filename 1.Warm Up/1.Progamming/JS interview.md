arrays, objects, this keyword
===========================================================================================


   loosly typed(coupled) language means  we can assign  any value like string,  bolean  to the variable.
ex:a=10 ;
a=true ;
a="abc" ;

primitive data types  which are given  by  javascript by  default.  non-primitive data types  which are not given by the  js.
 when we don't have any value   then we will  define  it as a null.
 we don't set any value  tot he variable that is  undefined.

parseInt("abc") --->NaN
console.log(Number("ABC")) ----->NAN
console.log(Number(false)) ----- 0
console.log(Number(true)) ----- 1

a=null;
typeOf  a  // object    it's a bug in javascript

typeof Infinity  // number

typeOf NaN  ---->number

bitwise  shift operator ----- >> (right shift) ---> , <<  (left shift) ,  >>> --->(unsigned right shift), <<< (left rotate/shift), ~ -->

type coercion -----(+ , ==, ===)

A_O ---->+,-*/%  ++ --
A_O ---->  +=, -= , *=
C_O ---> == , <= , >= ,  === ,
L _O  ---->  && , || , !
B-O  ====>    << , >> , ~

>>> toString() --->   doesnot convert  the   null and undefined to string 

ex:: console.log((123).tostring()) ---->123
ex:: cososole.log(null.tostrig()) ----->type Error ::: connot read the properties of null
>>> but string() --- > convert the null and undefined to string

>>> unary operator ----> (+) 
>>> console.log(parseInt("12345f") ------->12345
>>> console.log(parseInt("123.45") ======> 123
>>>> console.log(parseFloat("123.45f") ====>123.45
>>> >>>> console.log(parseFloat("123.45") ====>123.45

>>> // convert to Boolean
console.log(Boolean (0));   === >false
console.log (Boolean (110));  ===>true
Onsole.log(Boolean(""));  ====> false
console.log(Boolean("abc");  ==== > true
console.log(Boolean (undefined));  === >false
console.log(Boolean(null));  ====>false


 arrays methods :::
indexOf ------   it  will returns the   position of the element based on the  index.
includes -----  it will  returns   the bolean value  --- it tells about the element is  present or not .
slice ------> it doesnot  mutate the original array  (index)
splice ----> we can  insert  new  element, or  remeove,   inbetween he given array. its change(mutate) the  original  array(splice [startIndex , index1(delete count), index2(insertingelements)])
sort ------>  it mutate the original array (arrange the array elements ) by default  arrange   elements in strings.  we can correctly sort numbers, objects, and dates. It modifies the original array.”

concat() --->
arr.length ---->eleement of the array

>>   iterate  over the each  element of an array
 var arr=[3,45,6,7,8];

for(let i=0 , i<=arr.length ; i++){
console.log(arr[i]);
}

>>> I use for...in when I need to iterate over object properties dynamically.
🧠 Why we use it?
👉 To access object properties
 👉 Useful for dynamic objects
⚙️ Syntax
for (let key in object) {
 // code
}

👉 for...of → best for arrays. When working with   arrays, strings, sets, and maps.(values)
🧠 Why we use it?
👉 To get direct values
 👉 No need for index
 👉 Cleaner and readable code
 👉 Supports break and continue
⚙️ Syntax :::
for (let element of iterable) {
 // code
}
✔ Gives values directly
✔ Works on iterable objects
✔ Supports break and continue

// break and contunue  ------->
const inputs = [11, 32, 12, 45, 65, 94, 7, 78, 10, 106, 131, 67, 81, 92, 531];
const evenNumbers =[];
for (let ele of inputs)
{
If (ele %2!==0){
continue;  // odd
}
evenNumbers.push(ele);
if (everNumbers.length === 5) {
break;
}
console.log(evenNumbers);
} /// [32, 12, 94, 78, 10]

>>> access the keys  inside the objects using the  .notion
>>> but  we cannot access the   special characters of the keys  its throw an error  like syntax error ---- unexpected  number    we  use the  array notation instead of dot notation.

===>>  var count = 10;
function timer() {
    if (count == 0) {
        console.log("Time up!!");
        clearInterval(id); // Stops the repeated execution
        return;
    }
    console.log(count);
    count -= 1; // Decrements the counter
}
var id=setInterval(timer, 1000)

-----------------------------------
Variable Initialization: var count = 10 sets the starting point.Condition: The if (count == 0) block acts as the "stop" condition.Action: If the count isn't zero, it logs the current number and subtracts 1 (count -= 1).Interval: For this to work as a real-time countdown, it would typically be called using var id = setInterval(timer, 1000); (which isn't shown in the snippet but is implied by the clearInterval(id) line).
------------------------------------------------
 execution context ::::

var username = "Tom"; // Fixed typo: 'usemame' to 'username'
var userAge = 10;

console.log(`UserName: ${username}`); // Fixed template literal syntax
console.log(`UserAge: ${userAge}`);   // Fixed template literal syntax

function greetUser(name) {
  var greet = "I hope you are doing fine.";
  console.log(`hello ${name}, ${greet}`);
 
  var currentYear = 2030;
  const year = currentYear - userAge;
  return `Your Birth year is: ${year}`; // Fixed typo: 'retum' to 'return'
}

const birthYear = greetUser(username);
console.log(birthYear);
------------------------------------------------------------------------------------------
function hoisting ::::
greet();
function greet(){
console.log(a)
var a=10 ;
-------------------------------------------------------------------------------------

A pure function always returns the same output for the same input and does not modify external state, while an impure function can change external data or produce different outputs. ❌ Changes external variables/data
❌ Has side effects
Why is it pure?
Same inputs → same output
Does not change anything outside the function.
Why is it impure?
Output changes even with same input
Modifies external variable total.
Things like:

Changing global variables
API calls
Database updates
DOM manipulation
Console logs
Timers

These usually make a function impure.
pure functions :::::

function calculatePrice(price, tax) {
    return price + tax;
}
calculatePrice(20,10)

Impure :::

let cartTotal = 0;

function updateCart(price) {
    cartTotal += price;
}

updateCart (50);
updateCart(20);


------------------------------------------------------------------------------------------

Callback Function

function greet(wish) {
console.log(`${wish)}, Welcome to the Javascript course`);

function sayHi() (
return "hi" ;
function sayHello()
return "Hello";
Codelam Refactor | Explain | Coneras Spor
function goodMorning() {
return "Good Morning;
}
Greet (sayHi);
greet(sayHello);
greet(goodMorning);

--------------------------------------------------------------------------
A Higher Order Function is a function that takes another function as an argument or returns another function.

const inputs = [2, 5, 7, 8, 9, 12, 20];

// Higher Order Function
function calculate(input, operation) {
    const output = [];
    for (let num of input) {
        output.push(operation(num));
    }
    return output;
}

const square = (num) => num * num;
const cubic = (num) => num * num * num;

console.log(calculate(inputs, square));
console.log(calculate(inputs, cubic));

-------------------------------------------------------------------------------------------
function greet(name) {
    return "Hello " + name;
}

function processUser(fn, user) {
    return fn(user);
}

console.log(processUser(greet, "Lakshmi"));  // Hello Lakshmi

processUser() is a Higher Order Function
because it accepts another function (greet) as parameter.
----------------------------------------------------------------------------
const numbers = [1, 2, 3];

const doubled = numbers.map(function(num) {
    return num * 2;
});

console.log(doubled); // [2, 4, 6]

>>>> map() is a Higher Order Function because:
--------------------------------------------------------------------------------------

it takes a function as argument

const users = [
    { name: "Lakshmi", active: true },
    { name: "Ram", active: false }
];

const activeUsers = users.filter(user => user.active);

console.log(activeUsers);   // filter() is Higher Order Function.

-------------------------------------------------------------------------------------------
Higher Order Function = Takes function
Callback Function = Given function

A Higher Order Function is a function that accepts another function or returns a function, while a Callback Function is the function passed into the Higher Order Function for execution.

| Higher Order Function                                                    | Callback Function                                    |
| ------------------------------------------------------------------------ | ---------------------------------------------------- |
| A function that takes another function as argument OR returns a function | A function passed as an argument to another function |
| Controls or uses another function                                        | Gets executed inside another function                |
| Example: `map()`, `filter()`, `setTimeout()`                             | Example: function passed into `map()`                |
| It “receives” the function                                               | It “is received”                                     |


Currying is a technique in JavaScript where a function with multiple arguments is transformed into a sequence of functions that take one argument at a time.

Why Use Currying?
Benefits

✅ Reusable functions
✅ Better code readability
✅ Function specialization
✅ Used in functional programming.
>>>   normal function  ::::
function add(a, b, c) {
    return a + b + c;
}

console.log(add(1, 2, 3));
>>>  currying function 
function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(add(1)(2)(3));
>>>>  arraow function :::
const add = a => b => c => a + b + c;

console.log(add(1)(2)(3));

----------------------------------------------------------------
//currying function
function power(b){
return function(a){
return a**b;
}}
const square=power(2);  // square
const cube=power(3);  // cube
console.log(cube(4));
console.log(cube(2));

--------------------------------------------------------------
reduce function  :::
const inputs = [2, 3, 4, 5, 6, 7];

const sum = inputs.reduce((total, num, index) => {
  console.log(total, index);
  return total + num;
}, 0);

console.log(`total value:${sum}`);

-----------------------------------------------------------

filter() is used to select  elements  and return the values based on a condition and returns a new filtered array. Filtering active users from user list.
>>>  reduce() is used to reduce array elements into a single value. forEach() is used only for iteration and does not return a new array.” forEach() is used to loop through array elements but it does not return a new array.
  Mostly used for:

printing
DOM updates
side effects

Examples:

sum
total price
object grouping
const numbers = [1, 2, 3, 4];

const total = numbers.reduce((acc, current) => {
   return acc + current;
}, 0);

console.log(total);   //  Calculating shopping cart total.

------------------------------------------------------------------------------------------

A for loop is used when we want to repeat a block of code multiple times.
How would you print all student names from an array?

Answer
const students = ["Ram", "Lakshmi", "John"];

for(let i = 0; i < students.length; i++){

   console.log(students[i]);
}

2. if condition ::

if condition is used to execute code only when a condition is true. Login authentication.

How would you check whether user entered correct password?

Answer
const password = "12345";

if(password === "12345"){

   console.log("Login Success");
}else{

   console.log("Wrong Password");
}

3. function :::

A function is a reusable block of code that performs a specific task.

How would you create a reusable function to calculate total price?

Answer
function totalPrice(price, quantity){

   return price * quantity;
}

console.log(totalPrice(500, 2));
Output
1000

---------------------------------------
function checkNumbers(){

   for(let i = 1; i <= 5; i++){

      if(i % 2 === 0){

         console.log(i + " is even");
      }
   }
}

checkNumbers();
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Difference Between find() and findIndex()

Both methods:

search array, condition check
return first matching value


“find() returns the first matching element from an array(actual value/object), whereas findIndex() returns the index position of the first matching element. If no match is found, find() returns undefined and findIndex() returns -1.(position number)”

Finding a user object from users list.

const users = [
   {id:1, name:"Ram"},
   {id:2, name:"Lakshmi"}
];

const user = users.find((u) => u.id === 2);

console.log(user);   // {id:2, name:"Lakshmi"}

const index = users.findIndex((u) => u.id === 2);

console.log(index);  // 1
----------------------------------------------------------------------
const numbers = [1,2,3];

console.log(
   numbers.find((n) => n > 10)    // undefined
);
console.log(
   numbers.findIndex((n) => n > 10)   // -1
);

 

-------------------------------------------------------------------------------------------
fill, every, findLast
------------------------------------------------------------------------------------
In JavaScript, this refers to the object that is currently calling the method. this refers to current calling object

Inside an object method:

this points to that object
used to access object properties and methods
>>>>>    Function inside object is called method.
“In JavaScript objects, this refers to the current object that is calling the method. It is mainly used to access object properties and methods dynamically. Normal functions have their own this, but arrow functions inherit this from the parent scope.”

Arrow Function
const user = {

   name: "Lakshmi",

   greet: () => {
      console.log(this.name);
   }
};

user.greet();
Output
undefined
Why?

Arrow functions do NOT have their own this.

They inherit this from parent scope.

So in objects:

>>>  normal methods preferred
>>>>  avoid arrow functions for object methods
-------------------------------------------------------------------------------------
“A constructor function in JavaScript is a special function used to create multiple objects with the same properties and methods(structure). It is called using the new keyword, which creates a new object and binds this to that object.”
It acts like a blueprint for creating objects.

Usually constructor function names start with a capital letter.

Before ES6 classes:

constructor functions were used heavily

Now:

class
hooks
functional programming
are more common.

Instead of creating objects manually again and again: We can use constructor function.

Creates blueprint.
Stores passed value inside object.
new does 4 things:

Creates empty object
Sets this to new object
Adds properties
Returns object automatically

--------------------------------
function Employee(name, salary){

   this.name = name;
   this.salary = salary;
}
 this.introduce = function(){

      console.log(
         `Hi, I am ${this.name}`
      );
   };
}

const emp1 = new Employee("Ram", 30000);

const emp2 = new Employee("John", 40000);

console.log(emp1);
console.log(emp2);
// output
{
   name: "Ram",
   age: 30000
}

{
   name: "John",
   age: 40000
}

emp1.introduce();  //  Hi, I am ram
-------------------------------------------------------------------------------------------
--proto--    ---> return the obj

--proto----proto--   ---> prototype chaining
2. Prototype :::

Every JavaScript function automatically has a prototype object.

We use it to share methods between all objects created by constructor function.

This improves memory efficiency.

>>>  Without Prototype :::;

every object gets separate copy of greet()

More memory usage.

>>>>  function User(name){

   this.name = name;
}

User.prototype.greet = function(){

   console.log(
      `Hello ${this.name}`
   );
};

const user1 = new User("Lakshmi");

user1.greet();   // Hello Lakshmi

shared among all objects.

Only one copy created.

3. __proto__
Interview Answer

__proto__ is the hidden reference that connects an object to its prototype.

It is used internally for inheritance lookup.

Important Relation
user1.__proto__ === User.prototype   // Searching through prototype hierarchy
Output
true

4.  4. Prototype Chaining ::

Prototype chaining is the mechanism where JavaScript searches properties and methods through the prototype chain until it finds them.

Prototype Chain Flow
user1
   ↓
User.prototype
   ↓
Object.prototype
   ↓
null

--------------------------------------------------------------------------------

“A constructor function is used to create objects. Every constructor function has a prototype object where shared methods are stored. Each object created using new has a hidden __proto__ reference pointing to that prototype. Prototype chaining is the process where JavaScript searches properties and methods through the prototype hierarchy until it finds them.”

function Employee(name){

   this.name = name;
}

Employee.prototype.work = function(){

   console.log(
      `${this.name} is working`
   );
};

const emp1 = new Employee("Lakshmi");

console.log(emp1.name);

emp1.work();

console.log(emp1.__proto__); // Reference to prototype
console.log(Employee.prototype); // Searching through prototype hierarchy
 
-------------------------------------------------------------------------------------------
Output
Lakshmi
Lakshmi is working
{}   //    proto type  object

-----
Difference Between prototype and __proto__

| `prototype`               | `\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\_\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\_proto\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\_\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\_`                   |
| ------------------------- | ----------------------------- |
| Exists on functions       | Exists on objects             |
| Used to build inheritance | Refers to inherited prototype |
| Constructor property      | Internal reference            |

>>>        
--------------------------------------------------------------------------------
>>>  array prototype ::
const input=[1,2,3,4];
input.__proto__

“In JavaScript, arrays inherit methods from Array.prototype. Methods like map(), filter(), and push() are stored inside Array.prototype, and arrays access them through prototype chaining.”
all arrays inherit methods from Array.prototype through prototype chaining.

const arr = [1,2,3];

Internally similar to:

arr.__proto__ = Array.prototype;

| Array              | Array.prototype          |
| ------------------ | ------------------------ |
| Actual data        | Shared methods           |
| Example: `\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\[1,2,3]` | Contains `map`, `filter` |
| Object instance    | Prototype object         |

>>  Array.prototype.sayHello

adds method to all arrays.

Now every array can use:

>>>   sayHello().

----------------------------------------------------------------------------
Checking Relationship
const arr = [];

console.log(arr.__proto__ === Array.prototype);
Output
true.

In JavaScript, arrays inherit properties and methods from Array.prototype.

That is why arrays can use methods like:

map()
filter()
reduce()
push()
pop()

These methods are not directly inside the array.
They come from the prototype chain.
--------------------------------------------------------------------------------
we create a new  object from existing object that is called  object.create(). belongs directly to user. comes from prototype object.

“Object.create() creates a new object using another object as its prototype. It is mainly used for prototype-based inheritance and sharing common methods efficiently between objects.”

Object.create(prototypeObject)

Internally:

user.__proto__ = employeeMethods

const employeeMethods = {

   work() {
      console.log(
         `${this.name} is working`
      );
   }
};

const emp1 = Object.create(employeeMethods);

emp1.name = "Lakshmi";

emp1.work();   // Lakshmi is working

Why Use Object.create()?
Advantages
prototype inheritance
memory efficient
shared methods
avoids duplicate methods.
Object.create() vs Constructor Function :::

| Object.create            | Constructor Function  |
| ------------------------ | --------------------- |
| Direct prototype linking | Uses `new` keyword    |
| Simpler inheritance      | Traditional OOP style |
| No constructor needed    | Constructor required  |

How would you share common methods across multiple objects without duplicating code?

Interview Answer

I would use Object.create() so all objects inherit shared methods from a common prototype object.

Important Interview Point
Object.create(null)
const obj = Object.create(null);

console.log(obj.__proto__);
Output
undefined

This creates completely empty object with no prototype.

Used in:

optimized dictionaries
hash maps.

“In JavaScript, objects follow a prototype chain. When a property or method is accessed, JavaScript first checks the object itself. If not found, it searches the object's prototype, then Object.prototype, and finally stops at null. This mechanism is called prototype chaining.”

Because JavaScript uses inheritance through prototypes.

This allows:

method sharing
memory optimization
reusable behavior

------------------------------------------------------------------------------------------

“call(), apply(), and bind() are used to control the this keyword in JavaScript functions. call() and apply() execute functions immediately, but bind() returns a new function. The difference is that call() passes arguments individually, while apply() passes arguments as an array.”
--------------------------------------------------------------------------
Syntax
functionName.call(thisValue, arg1, arg2);

Syntax
functionName.apply(thisValue, [args]);

Syntax
const newFunction = fn.bind(thisValue);

----------------------------------------------------------------------

const person = {

   name: "Lakshmi"
};

function greet(city, country){

   console.log(
      `Hello ${this.name} from ${city}, ${country}`  // Hello Lakshmi from Hyderabad, India
   );
}

greet.call(person, "Hyderabad", "India");
greet.apply(person, ["Delhi", "India"]);       // Hello Ram from Delhi, India
const newGreet = greet.bind(person);

newGreet();

-----------------------------------------------------------------------------------------
Difference Between Array Destructuring and Object Destructuring in JavaScript
Interview Answer

Destructuring is a feature in JavaScript used to extract values from arrays or objects into variables.  Property names matter in object destructuring.

Order does NOT matter.

Array destructuring → extracts values based on position/index. Order matters in array destructuring.
Object destructuring → extracts values based on property names. Array destructuring uses square brackets [], and object destructuring uses curly braces {}.”

const numbers = [10, 20, 30];

const [first, , third] = numbers;

console.log(third);  // 30


const user = {

   name: "Lakshmi"
};

const { name: userName } = user;

console.log(userName);   // Lakshmi.
---------------------------------------------------------------------------

const student = {

   name: "Lakshmi",
   marks: [90, 95]
};

const {
   name,
   marks: [math, science]
} = student;

console.log(name);
console.log(math);


Lakshmi
90

--------------------------------------------------------------------------------------

“DOM manipulation  uses the browser that means dynamically accessing and updating HTML elements using JavaScript.

<h1 id="title">Hello</h1>

<button id="btn">
   Change Text
</button>

const heading =
   document.getElementById("title");

const button =
   document.getElementById("btn");

button.addEventListener("click", () => {

   heading.textContent =
      "Welcome Lakshmi";
});

Output

When button clicked:

Hello
   ↓
Welcome Lakshmi

“DOM manipulation means dynamically accessing and updating HTML elements using JavaScript. Web APIs are browser-provided functionalities like DOM API, Fetch API, and LocalStorage API. Browser APIs are built into browsers, while 3rd party APIs are external services like Google Maps API or Weather APIs.”

Example: Create Element
const p = document.createElement("p");

p.textContent = "New Paragraph";

document.body.appendChild(p);
Output
creates paragraph element , adds content, shows element on webpage.
Without appendChild(),
element will NOT appear in UI.
Adds paragraph dynamically.
Common DOM Manipulation Methods :::

| Method               | Purpose              |
| -------------------- | -------------------- |
| `getElementById()`   | Select by id         |
| `querySelector()`    | Select first element |
| `querySelectorAll()` | Select multiple      |
| `createElement()`    | Create element       |
| `appendChild()`      | Add element          |
| `remove()`           | Remove element       |
| `innerHTML`          | Change HTML          |
| `textContent`        | Change text          |
| `classList.add()`    | Add class            |


Important Interview Difference

| Web API             | 3rd Party API                |
| ------------------- | ---------------------------- |
| Provided by browser | Provided by external company |
| Built-in            | Need internet/service        |
| Example: DOM API    | Example: Google Maps API     |

3rd party APIs are external APIs provided by companies/services.

Used to fetch external data.
>>  Web API in JavaScript :::

Web APIs are browser-provided features that help JavaScript interact with the browser and external systems.

JavaScript alone cannot:

access DOM
fetch data
use timers

Browser provides APIs for these.
Common Web APIs :::

| API              | Purpose                 |
| ---------------- | ----------------------- |
| DOM API          | Manipulate HTML         |
| Fetch API        | API calls               |
| LocalStorage API | Store data              |
| Geolocation API  | Get location            |
| Timer API        | setTimeout/setInterval  |
| WebSocket API    | Real-time communication |

Used in React for: fetch api

backend communication
fetching users/products/posts .
2. LocalStorage API

Stores data in browser.

Example
localStorage.setItem("name", "Lakshmi");

console.log(
   localStorage.getItem("name")
);
Output
Lakshmi

3. Geolocation API

Gets user location.

Example
navigator.geolocation.getCurrentPosition(
   (position) => {

      console.log(position.coords.latitude);
   }
);
>>>  Browser APIs

Browser APIs are APIs built into browsers to provide extra functionalities.
Notification API
Notification.requestPermission()
   .then(permission => {

      console.log(permission);
   });

They are part of Web APIs.

| Browser API      | Purpose               |
| ---------------- | --------------------- |
| DOM API          | HTML access           |
| Fetch API        | HTTP requests         |
| Storage API      | Browser storage       |
| Canvas API       | Drawing graphics      |
| Notification API | Browser notifications |

-------------------------------------------------------------------------------------------
query selector selects  first match element based(that matches) css selector

const changeItemsBtn = document.getElementById('change-items-btn');
const items = document.querySelectorAll('.item');

changeItemsBtn.addEventListener('click', () => {
    items.forEach((item, index) => {
        item.style.color = 'red';
    });
});

 querry selectorall  selects  all elements  that match a css  selector. it returns a static  NodeList(array), which is an array like object.


| Concept           | Purpose           |
| ----------------- | ----------------- |
| `createElement()` | Create node       |
| `appendChild()`   | Insert node       |
| Events            | User interaction  |
| Dynamic rendering | Real-time updates |

const ul = document.createElement("ul");

const li = document.createElement("li");

li.textContent = "Apple";

ul.appendChild(li);

document.body.appendChild(ul);

<ul>
   <li>Apple</li>
</ul>

“document.createElement() is used to dynamically create HTML elements in JavaScript. After creating the element, we can add content, styles, or classes, and then insert it into the DOM using methods like appendChild().”
------------------------------------------------------------------------------------------

dom selector :::


const itemList = document.getElementById('item-list');
const addItemBtn = document.getElementById('add-item-btn');

function removeItem(event) {
    const item = event.target;
    item.removeEventListener('click', removeItem);
    itemList.removeChild(item);
}

function addItem() {
    const newItem = document.createElement('li');
 
    newItem.textContent = `Item ${itemList.children.length + 1}`;
    newItem.classList.add('item');
 
    newItem.addEventListener('click', removeItem);
    itemList.appendChild(newItem);
}

addItemBtn.addEventListener('click', addItem);



--------------------------------------------------

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Item List App</title>
</head>
<body>

    <!-- The button used to add new items -->
    <button id="add-item-btn">Add Item</button>

    <!-- The container where list items (li) will be appended -->
    <ul id="item-list"></ul>

    <!-- Link your JavaScript file here or place the code in <script> tags -->
    <script src="script.js"></script>

</body>
</html>

---------------------------------- html code.

async  operations in javascript  :::

“Asynchronous operations in JavaScript allow time-consuming tasks like API calls, timers, and file handling to run without blocking the main thread. JavaScript handles async operations using callbacks, promises, and async/await with the help of the event loop and Web APIs.”

Asynchronous operations are tasks that take time to complete, but JavaScript does NOT wait for them.

Instead:

JavaScript continues executing other code
result comes later

This helps make applications:

faster
non-blocking
responsive.

How Async Works Internally

JavaScript uses:

Call Stack
Web APIs
Callback Queue
Event Loop.

example :::
console.log("Start");

setTimeout(() => {

   console.log("Async Task");

}, 2000);

console.log("End");

>>>>>>>>>>>   setTimeout() goes to Web API.  Timer runs separately. After 1 second:
callback moves to queue. Event loop pushes callback to call stack and execute  the code .

| Method      | Modern Usage |
| ----------- | ------------ |
| Callbacks   | Old          |
| Promises    | Better       |
| async/await | Best/modern  |

Problem with Callbacks

Too many nested callbacks:

callback hell.
--------------------------------------------------------------------------------------
function fetchData(callback){

   setTimeout(() => {

      callback("Data Received");

   }, 2000);
}

fetchData((data) => {

   console.log(data);
});
---------------------------------------------------------------------------------------
Promise represents:
future success or failure of async operation.

Promise States
| State    | Meaning |
| -------- | ------- |
| Pending  | Waiting |
| Resolved | Success |
| Rejected | Failed  |

const promise = new Promise((resolve, reject) => {

   setTimeout(() => {

      resolve("Success");

   }, 2000);
});

promise.then((data) => {

   console.log(data);
});

Error Handling
promise
   .then(data => console.log(data))
   .catch(error => console.log(error));

3. Async/Await (Modern)
Interview Answer

async/await makes asynchronous code look synchronous and easier to read.
async  --- always returns promise.
await ----- waits until promise resolves.
useEffect(() => {

   async function fetchUsers(){

      const res = await fetch("/api");

      const data = await res.json();

      setUsers(data);
   }

   fetchUsers();

}, []);

JavaScript is:

Single-threaded

But async operations make it appear multi-threaded using:

Web APIs
Event Loop.
------------------------------------------------------------------
Promise.all Example

Runs multiple async tasks together.(Parallel execution)

Promise.all([
   fetch("/users"),
   fetch("/posts")
])
.then(res => console.log(res));

----------------------------------------------------------
setInterval --- clearInterval .

Both setTimeout() and setInterval() are asynchronous timer functions provided by browser Web APIs.

Main difference:

setTimeout() runs(executes a function) code only once after a delay.

Syntax :::

setTimeout(function, delay)
setInterval() runs code repeatedly at fixed intervals. setInterval() repeatedly executes a function after every specified interval. Function keeps repeating until stopped.

setInterval(function, delay)

Used for: setInterval

digital clocks
live timers
auto sliders
polling APIs

setInterval(() => {

   console.log(new Date());

}, 1000);  // Updates every second.

Used for:  setTimeout :::

showing popup after delay
redirecting page
debounce functionality .

Clock :::
setInterval(() => {

   console.log(new Date());

}, 1000);

Updates every second.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Simple Timer</title>
</head>
<body>

    <!-- This matches document.getElementById("timer") -->
    <h1 id="timer">Timer Elapsed: 0 seconds</h1>

    <!-- This matches document.getElementById("start-btn") -->
    <button id="start-btn">Start</button>

    <!-- This matches document.getElementById("stop-btn") -->
    <button id="stop-btn">Stop</button>

    <!-- Remember to link your JS file -->
    <script src="script.js"></script>
</body>
</html>
--------------------------------------

const timerElement = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

let timeElapsed = 0;
let itervalId;

function startTimer() {
  if (!itervalId) {
    itervalId = setInterval(() => {
      timeElapsed++;
      timerElement.textContent = `Timer Elapsed: ${timeElapsed} seconds`;
    }, 1000); // Set 1 second delay
  }
}

function stopTimer() {
  clearInterval(itervalId);
  itervalId = null;
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);

--------------------------------------------------------------------------------------
Stop setTimeout()
const timer = setTimeout(() => {

   console.log("Hello");

}, 3000);

clearTimeout(timer);
Stop setInterval()
const interval = setInterval(() => {

   console.log("Running");

}, 1000);

clearInterval(interval);

Why?

Because:
setTimeout()

is asynchronous.

Even 0ms delay goes through:

Web APIs
Callback Queue
Event Loop
-------------------------------------------------------------------------------
| `setTimeout()`      | `setInterval()`      |
| ------------------- | -------------------- |
| Runs once           | Runs repeatedly      |
| Single execution    | Continuous execution |
| Used for delay      | Used for repetition  |
| Stops automatically | Must stop manually   |

--------------------------------------------------------------------------------------

Why Cleanup Important?

Without cleanup:

memory leaks
duplicate intervals.


“setTimeout() executes a function once after a delay, whereas setInterval() repeatedly executes a function at fixed intervals until it is cleared using clearInterval().”

--------------------------------------------------------------------------------------
>>>  promises in js ::

“A Promise in JavaScript is an object that represents the future result or failure of an asynchronous operation. It has three states: pending, resolved, and rejected. Promises help avoid callback hell(Hard to read.) and are handled using .then(), .catch(), and modern async/await syntax.”

Why Promises Are Needed

Async operations take time.

Example:

fetching users from server
payment processing
uploading files

JavaScript should not block the page while waiting.

Promises solve this cleanly.

It helps handle:

API calls
database requests
timers
async tasks

without callback hell. Hard to read.
---------------------------------------------
Imagine ordering food online.

Promise = Food Order Receipt

States:

Pending   → Food preparing
Resolved  → Food delivered
Rejected  → Order failed

const promise = new Promise((resolve, reject) => {

});


--------------------
const promise = new Promise((resolve, reject) => {

   let success = true;

   if(success){

      resolve("Data Loaded");

   } else {

      reject("Error Occurred");
   }
});

promise
   .then((data) => {

      console.log(data);
   })
   .catch((error) => {

      console.log(error);
   });


// then block runs when the promise is resolved


| Method       | Purpose          |
| ------------ | ---------------- |
| `.then()`    | Success handling |
| `.catch()`   | Error handling   |
| `.finally()` | Always runs      |

Promise.all()

Runs multiple promises together.
Real-time Usage

Used for:

loading multiple APIs together
dashboard data
ecommerce product loading.

2. Promise.race()

Returns first completed promise.

Async/Await (Modern Promise Handling) ::

easier to read
looks synchronous
cleaner error handling

>>>>  Promise Chaining

Used for sequential async operations. Each .then() passes result to next.


JavaScript is:

Single-threaded

Promises make async operations non-blocking using:

Web APIs
Event Loop
Microtask Queue.

----------------------------------------------------
console.log("Start");

setTimeout(() => {

   console.log("Timeout");

}, 0);

Promise.resolve().then(() => {

   console.log("Promise");
});

console.log("End");

-----------------------------------------
<body>

  <div class="container">
    <h2>User Profile</h2>
    <button id="fetch-data">Fetch Data</button>
    <div id="output">No data fetched yet.</div>
  </div>
</body>

-------------------------------------------------------------------------------------


function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({
          name: "John",
          age: 30,
          occupation: "Developer",
        });
      } else {
        reject("Error: Unable to fetch data.");
      }
    }, 2000);
  });
}

const fetchDataBtn = document.getElementById('fetch-data');
const outputDiv = document.getElementById('output');

fetchDataBtn.addEventListener('click', () => {
  outputDiv.textContent = "Fetching Data...";
 
  fetchData()
    .then((user) => {
      outputDiv.innerHTML = `
        `<strong>Name:</strong> ${user.name} <br>
        <strong>Age:</strong> ${user.age} <br>
        <strong>Occupation:</strong> ${user.occupation} <br>
      `;
    })
    .catch((error) => {
      outputDiv.textContent = error;
    })
    .finally(() => {
      console.log('Data fetch attempt completed');
    });
});

--------------------------------------------------------------------

console.log("Start");

setTimeout(() => {

   console.log("Timeout");

}, 0);

Promise.resolve().then(() => {

   console.log("Promise");
});

console.log("End");

Start
End
Promise
Timeout
-------------------------------------------------------------------------------------------
1. What is an event in JavaScript?

An event is an action that happens in the browser.

Examples:

button click
mouse hover
keyboard press
form submit.


2. “What are event handlers?”

Event handlers are functions that execute when a specific event occurs in the browser, such as click, submit, or keypress.
They help make web pages interactive.

onclick is an event attribute that runs when user clicks.

Example:

<button onclick="show()">Click</button>.
---------------------------------------------------------

3. >>>  What is addEventListener in JavaScript?

addEventListener() is a method used to attach an event handler to an HTML element.
It allows us to listen for events like click, submit, keydown, etc.

It is better than onclick because:

multiple events can be attached
it gives better control
supports event bubbling and capturing.

Example:

button.addEventListener("click", function() {
   console.log("Button clicked");
});
---------------------------------------------------------------------------

5. Difference between onclick and addEventListener()?

| onclick                     | addEventListener   |
| --------------------------- | ------------------ |
| Only one event              | Multiple events    |
| Old method                  | Modern method      |
| Overwrites previous handler | Does not overwrite |
button.addEventListener("click", hello);

6. What is Event Bubbling?
Event starts from child element(target element) and moves upward to parent.

Example:

button inside div
click button
button event runs first
then div event runs
<div id="parent">
   <button id="child">Click</button>
</div>

child.addEventListener("click", ()=>{
   console.log("Child");
});

parent.addEventListener("click", ()=>{
   console.log("Parent");
});

Event Capturing :::

Event capturing is the opposite of bubbling. In capturing:

event travels from parent to child.

7. What is event.preventDefault()?

preventDefault() is used to stop the browser’s default behavior.

For example:

stopping form submission
preventing page refresh
stopping link navigation

 event.preventDefault();

8. What is stopPropagation()?

stopPropagation() stops the event from moving to parent elements. It prevents event bubbling or capturing. It prevents event bubbling or capturing.

 event.stopPropagation();

9. What is event delegation?

Event delegation is a technique where we attach one event listener to the parent element instead of multiple child elements.

It works because of event bubbling.

Advantages:

better performance
useful for dynamically created elements

10. What is the event object?

The event object is automatically passed to the event handler function whenever an event occurs.

It contains information about the event such as:

target element
event type
key pressed
mouse position

Example:

button.addEventListener("click",(event)=>{
   console.log(event.type);
});

11. Difference between target and currentTarget?

target refers to the actual element that triggered the event.
currentTarget refers to the element on which the event listener is attached.

If button is inside div:

clicking button → target = button
listener attached on div → currentTarget = div

div.addEventListener("click",(event)=>{
   console.log(event.target);
   console.log(event.currentTarget);
});

| target                 | currentTarget        |
| ---------------------- | -------------------- |
| Actual clicked element | Element with handler |


These event concepts are very important in JavaScript because they help us build interactive and efficient web applications.

15. What is inline event handling?

Event directly inside HTML.

<button onclick="hello()">Click</button>

Not recommended for large projects.

13. What is DOMContentLoaded event?

Runs when HTML fully loads.

document.addEventListener("DOMContentLoaded", ()=>{
   console.log("DOM loaded");
});

15. What is inline event handling?

Event directly inside HTML.

<button onclick="hello()">Click</button>

Not recommended for large projects.

fetch() API in JavaScript ::

fetch() is a modern JavaScript Web API used to make HTTP requests to servers.

It is mainly used for:

API calls
fetching backend data
sending data to server

fetch() returns a Promise.

Basic Syntax:::
fetch(url)
Why We Use fetch() ::
Used to:

get users from database
load products
login/signup
call backend APIs.

Simple Example :::
fetch("https://jsonplaceholder.typicode.com/users")
   .then(response => response.json())
   .then(data => console.log(data))
   .catch(error => console.log(error));

>>>>  sends HTTP request. converts JSON response into JavaScript object. prints API data.
handles API/network errors.

Common Interview Questions on fetch() :::

| Question                         | Concept         |
| -------------------------------- | --------------- |
| fetch returns what?              | Promise         |
| Why use `.json()`?               | Parse JSON      |
| Difference between Axios & fetch | Features        |
| Error handling                   | catch/try-catch |
| GET vs POST                      | API methods     |

Difference Between fetch() and Axios ?
| fetch          | Axios            |
| -------------- | ---------------- |
| Built-in       | External library |
| Need `.json()` | Automatic JSON   |
| Less features  | More features    |
Real-time Applications

Used in:

ecommerce websites
weather apps
dashboards
authentication systems.
-----------------------------------------------------------------------------------------

Chaining Multiple Promises in JavaScript :::
Promise chaining means:
executing multiple asynchronous operations one after another using multiple .then() methods.

“Promise chaining means executing multiple asynchronous operations sequentially using multiple .then() methods. Each .then() receives the result from the previous promise, making async code cleaner and avoiding callback hell.”

Each .then() receives the result from the previous promise.

Why Promise Chaining Is Used

Used when:

one async task depends on previous task
sequential API calls needed
avoid callback hell.

Real-time Example
Login User
   ↓
Get Profile
   ↓
Get Orders

Each step depends on previous result.

Inside .then():

return

passes data to next promise.
---------------------------------------------------------------------------------------
 <script>
        function step1(){
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve("login success");

                },1000)
            })
        };

        function step2(message){
            return  new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve(`${message}  profile loaded`)
                },1000)
            })
        }
        step1()
        .then((data)=>{
            console.log(data);

    return step2(data);
        })
        .then((result)=>{
            console.log(result);
        })

    </script>

--------------------------------------------------------------------------------------
fetch("/user")

   .then(res => res.json())

   .then(user => {

      return fetch(`/orders/${user.id}`);
   })

   .then(res => res.json())

   .then(orders => {

      console.log(orders);
   })

   .catch(error => {

      console.log(error);
   });

Cleaner and maintainable. -----  Promise Chaining.

Error Handling in Promise Chaining

Single .catch() can handle all errors.

| Promise Chaining      | Async/Await           |
| --------------------- | --------------------- |
| Uses `.then()`        | Uses `await`          |
| More nesting          | Cleaner syntax        |
| Good for simple flows | Better for large apps |

| Question                  | Concept                |
| ------------------------- | ---------------------- |
| What is chaining?         | Sequential promises    |
| Why return needed?        | Pass data              |
| Difference from callbacks | Cleaner                |
| Promise.all vs chaining   | Parallel vs sequential |

| Chaining                   | Promise.all       |
| -------------------------- | ----------------- |
| Sequential                 | Parallel          |
| Depends on previous result | Independent tasks, Runs together. |

------------------------------------------------------------------------------------------

“async/await is a modern JavaScript feature used to handle asynchronous operations more cleanly. async makes a function return a Promise, and await pauses execution until the Promise resolves, making asynchronous code easier to read and maintain.”


JavaScript is still:

Single-threaded

Async/await does NOT make JS multi-threaded.

It works using:

Promises
Event Loop
Web APIs.

Sequential Execution ---- Runs one after another.

Why try/catch Important?

Handles:

API failures
network errors
rejected promises.

Why Async/Await Needed

Before async/await:

callbacks were messy
promise chaining became difficult in large apps

Async/await provides:

cleaner syntax
better readability
easy error handling.
----------------------------------------------------------------------------------------------

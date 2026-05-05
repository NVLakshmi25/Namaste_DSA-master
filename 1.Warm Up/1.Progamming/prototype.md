# 🧬 Prototype & Inheritance — Deep Dive (🔥 Interview Ready)

A **complete, logic-first explanation** of **JavaScript Prototypes & Prototypal Inheritance** with **commented code, mental models, and interview traps**. Designed as a **standalone Canva / GitHub file**.

---

## 🧠 What Is a Prototype?

Every JavaScript object has a hidden internal property called **`[[Prototype]]`**.

This property is used to **share properties and methods** between objects.

📌 JavaScript uses **prototypal inheritance** — objects inherit from **other objects**, not classes.

---

## 🔹 Basic Object & Prototype

```js
let obj = {
  name: "Akshay"
};

console.log(obj.name); // Akshay
console.log(obj.__proto__); // Object.prototype
```

📌 If JavaScript does not find a property on the object, it **looks up the prototype chain**.

---

## 🔹 Prototype Lookup (VERY IMPORTANT 🔥)

```js
let arr = [1, 2, 3];

arr.push(4);
console.log(arr); // [1, 2, 3, 4]
```

📌 `push`, `map`, `filter` come from **`Array.prototype`**

---

## 🔹 Prototype Chain (Mental Model)

```
arr → Array.prototype → Object.prototype → null
```

✔ JavaScript searches upward until `null`
✔ If not found → `undefined`

---

## 🔹 Constructor Function & Prototype

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log("Hello, my name is " + this.name);
};

let p1 = new Person("Akshay", 25);
let p2 = new Person("Virat", 30);

p1.greet();
p2.greet();
```

📌 `greet` exists **once** and is shared by all instances

---

## 🔹 Why Use Prototype?

### ❌ Bad (Memory Waste)

```js
function Person(name) {
  this.name = name;
  this.greet = function () {
    console.log(this.name);
  };
}
```

### ✅ Good (Efficient)

```js
Person.prototype.greet = function () {
  console.log(this.name);
};
```

✔ Methods are **shared**, not duplicated

---

## 🔹 Inheritance Using Prototype (IMPORTANT 🔥)

### Parent Constructor

```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(this.name + " makes a sound");
};
```

### Child Constructor

```js
function Dog(name, breed) {
  Animal.call(this, name); // inherit properties
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log(this.name + " barks");
};
```

### Usage

```js
let d1 = new Dog("Bruno", "Labrador");

d1.speak(); // Bruno makes a sound
d1.bark();  // Bruno barks
```

📌 This is **classical inheritance** implemented via prototypes

---

## 🔹 `Object.create()` (Clean & Direct)

```js
const parent = {
  greet() {
    console.log("Hello");
  }
};

const child = Object.create(parent);
child.name = "Akshay";

child.greet(); // Hello
```

📌 `child.__proto__ === parent`

---

## 🔹 ES6 `class` Syntax (Syntactic Sugar 🍬)

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hi " + this.name);
  }
}

class Student extends Person {
  constructor(name, roll) {
    super(name);
    this.roll = roll;
  }

  study() {
    console.log(this.name + " is studying");
  }
}

const s1 = new Student("Akshay", 101);

s1.greet();
s1.study();
```

📌 Under the hood → **still prototype-based**

---

## 🔥 Common Interview Traps ❌

### ❌ Wrong Prototype Assignment

```js
Dog.prototype = Animal.prototype; // ❌ WRONG
```

### ✅ Correct Way

```js
Dog.prototype = Object.create(Animal.prototype);
```

---

### ❌ Forgetting Constructor Reset

```js
Dog.prototype.constructor = Dog; // IMPORTANT
```

---

### 🔹 `prototype` vs `__proto__`

```js
Person.prototype   // used for inheritance
obj.__proto__      // actual internal link
```

---

## 🧠 Master Summary

```txt
==================== PROTOTYPE & INHERITANCE SUMMARY ====================

Prototype:
- Every object has [[Prototype]]
- Used to share properties & methods

--------------------------------
Prototype Chain:
obj → prototype → prototype → null

--------------------------------
Why Prototype?
- Memory efficient
- Shared behavior
- Delegation, not copying

--------------------------------
Inheritance:
- Objects inherit from objects
- Implemented via prototype chain

--------------------------------
Ways to Implement Inheritance:

1️⃣ Constructor + prototype
2️⃣ Object.create()
3️⃣ ES6 class (syntactic sugar)

--------------------------------
Interview Golden Rule 🏆

"JavaScript uses prototype-based inheritance, not class-based"

--------------------------------
One-line Memory Trick 🧠

"Objects delegate, they don’t copy"
================================================
```

---

## 🎯 Interview Quick Questions

❓ Where do array methods come from?
✔ `Array.prototype`

❓ Does JS copy methods during inheritance?
❌ No, it delegates via prototype

❓ Are classes real in JavaScript?
❌ No, syntactic sugar

---

📌 **Use this file as a standalone reference for interviews, Canva, or GitHub.**

Happy Coding 🚀

// ================= BASIC CONSOLE PRINT =================

// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");

// Printing the same statement multiple times using a loop

for(let i=0; i<=10; i++){
    // i goes from 0 to 10
    console.log("Hello World " + i)
}

// ================= RANGE LOOP =================

// Loop runs from 3 to 5

for(let i=3; i<=5; i++){
    console.log("Namaste Dev " + i);
}

// ================= WRONG LOOP EXAMPLE =================

// ❌ WRONG: i is never updated → infinite loop

// for(let i=0; i<10 ; i+1){
//     console.log(i+1)
// }

// ================= RIGHT LOOP =================

// ✅ CORRECT: i is updated properly
for(let i=0; i<10 ; i=i+1){
    console.log(i+1)
}

// ================= STEP LOOP =================

// Increment by 2 → prints even steps

for(let i=2; i<9; i=i+2){
    console.log("HTML " +i )
}

// ================= DECREASING LOOP =================

// Loop runs backwards from 5 to 1
for(i=5; i>0; i=i-1){
    console.log("Apple " + i);
}

// ================= LOOP THAT PRINTS NOTHING =================

// Condition fails immediately → no output
 for(i=5; i<4; i++){
    console.log("Nothing Print")
 }

// ================= INFINITE LOOP (COMMENTED) =================

// ❌ Infinite loop example
// for(i=1; i>0; i++){
//     console.log("Infinity Loop " + i)
// }

// ================= FUNCTION INSIDE LOOP =================

// Function definition
function greet(i){
    console.log("Namaste! "+i)
}

// Calling function inside a loop
for(let i=0; i<10; i++){
    greet(i)
}

// ================= ARRAY LOOP =================
let arr = [10, 6, 2, 4, 8, 12, 9, 6]

let length = arr.length
// console.log(length)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// console.log(arr[5])
// console.log(arr[6])
// console.log(arr[7])
// console.log(arr[8])

for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}



// ================= PRINT EVEN NUMBERS =================

let array = [10, 6, 2, 0, 8, 3, 80];

// Loop through array using index
for(let i=0; i<array.length; i++){
    // If number is divisible by 2 → even
    if(array[i]%2 == 0){
        console.log(array[i])
    }
}

// ================= PRINT ODD NUMBERS =================

let arrays = [10, 6, 2, 0, 8, 3, 80];

for(let i=0; i<arrays.length; i++){
    if(arrays[i]%2 == 1){
        console.log(arrays[i])
    }
}


/*
==================== SUMMARY ====================

LOOP BASICS:
- for(start; condition; update)
- Loop runs while condition is TRUE

COMMON LOOP TYPES:
- i++ / i = i + 1 → normal increment
- i = i + 2       → step loop
- i-- / i = i - 1 → reverse loop

IMPORTANT RULES:
- If i is NOT updated → infinite loop
- If condition fails initially → loop runs 0 times

FUNCTION IN LOOP:
- A function can be called inside a loop
- Loop controls HOW MANY times function runs

ARRAY LOOP LOGIC:
- Use arr.length to avoid index errors
- Access elements using arr[i]

EVEN / ODD LOGIC:
- Even → number % 2 == 0
- Odd  → number % 2 == 1

COMMON MISTAKE (VERY IMPORTANT):
- Always check the SAME array you are looping
- arrays[i] ❌ NOT array[i]

INTERVIEW THINKING STEPS:
1️⃣ What is the start value?
2️⃣ What is the stopping condition?
3️⃣ How does the loop move?
4️⃣ Is the variable updated correctly?

GOLDEN RULE 🏆:
- "If loop variable does not change → infinite loop"

================================================
*/

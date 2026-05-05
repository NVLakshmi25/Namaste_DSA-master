// Instead of writing console.log many times,
// we use loops to repeat tasks efficiently


// *************** FOR LOOP BASICS ****************

// Loop starts from 0 and runs till 10 (inclusive)
for (let i = 0; i <= 10; i++) {
    console.log("Hello World " + i);
}


// *******************

// Loop starts from 3 and ends at 5
for (let i = 3; i <= 5; i++) {
    console.log("Namaste Dev " + i);
}


// ******* WRONG LOOP (commented) ********
// i+1 does NOT update the value of i
// for(let i=0; i<10 ; i+1){
//     console.log(i+1)
// }


// ******* RIGHT LOOP ********

// i = i + 1 correctly increments i
for (let i = 0; i < 10; i = i + 1) {
    console.log(i + 1);
}


// **************** EVEN NUMBERS LOOP ****************

// Starts from 2 and increases by 2 (even numbers)
for (let i = 2; i < 9; i = i + 2) {
    console.log("HTML " + i);
}


// **************** REVERSE LOOP ****************

// Loop runs backward from 5 to 1
for (let i = 5; i > 0; i = i - 1) {
    console.log("Apple " + i);
}


// ************* CONDITION NEVER TRUE *************

// i starts at 5, but condition is i < 4 (false)
// So nothing will be printed
for (let i = 5; i < 4; i++) {
    console.log("Nothing Print");
}


// ***** INFINITE LOOP (commented for safety) *****
// Condition i > 0 is always true
// for(let i=1; i>0; i++){
//     console.log("Infinity Loop " + i)
// }


// ****** FUNCTION USED INSIDE LOOP ********

// Function that prints greeting
function greet(i) {
    console.log("Namaste! " + i);
}

// Loop calling the function 10 times
for (let i = 0; i < 10; i++) {
    greet(i);
}


// ********** ARRAY LOOP ******************

let arr = [10, 6, 2, 4, 8, 12, 9, 6];

// Length of array
let length = arr.length;

// Loop through array elements
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }


// ******** PRINT ALL EVEN NUMBERS IN ARRAY ********

let array = [10, 6, 2, 0, 8, 3, 80];

for (let i = 0; i < array.length; i++) {
    // Check if number is even
    if (array[i] % 2 == 0) {
        console.log(array[i]);
    }
}


// ******** PRINT ALL ODD NUMBERS IN ARRAY ********

let arrays = [10, 6, 2, 0, 8, 3, 80];

for (let i = 0; i < arrays.length; i++) {

    // ❌ BUG FIXED HERE:
    // You used `array[i]` instead of `arrays[i]`
    if (arrays[i] % 2 == 1) {
        console.log(arrays[i]);
    }
}

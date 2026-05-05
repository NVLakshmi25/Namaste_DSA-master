// ****** BASIC ARRAY ******

// Array of numbers
let arr = [2, 6, 0, 100, 9, 27];

// Accessing array elements using index (0-based indexing)
let sum = arr[0] + arr[4];
console.log(sum); // Output: 11

// Accessing element at index 5
console.log(arr[5]); // Output: 27

// Accessing index outside array range
// console.log(arr[6]); → undefined


// ****** ARRAY WITH MIXED DATA TYPES ******

let arrStr = ["akshay", "deepika", "sachin", "virat", 7, true, "apple", false, 12];

// Access element at index 5
console.log(arrStr[5]); // Output: true


// ****** NESTED ARRAY ******

let array = ["akshay", 7, [5, 10, [2, 10]]];

// Access the nested array
console.log(array[2]); // [5, 10, [2, 10]]

// Access deeper nested array
console.log(array[2][2]); // [2, 10]

// Access element inside deeply nested array
console.log(array[2][2][1]); // 10


/*
==================== EXTENDED SUMMARY ====================

WHAT IS AN ARRAY?
- A data structure that stores multiple values
- Values are stored in an ordered list
- Each value is accessed using an index

---------------------------------------------------------
ARRAY INDEXING RULES:

- Index starts from 0
- First element → index 0
- Last element → array.length - 1
- Accessing invalid index → undefined

Example:
arr.length = 6
Valid indexes → 0 to 5
arr[6] → undefined

---------------------------------------------------------
ARRAY CAN STORE:

- Numbers
- Strings
- Booleans
- Objects
- Other arrays (nested arrays)

JavaScript arrays are:
- Dynamic (size can change)
- Heterogeneous (mixed data types allowed)

---------------------------------------------------------
NESTED ARRAY LOGIC 🧠

- An array inside another array
- Each pair of [] goes ONE LEVEL deeper

Example:
array[2]           → [5, 10, [2, 10]]
array[2][2]        → [2, 10]
array[2][2][1]     → 10

Rule to remember:
"Count brackets to reach the value"

---------------------------------------------------------
COMMON ARRAY OPERATIONS:

- Read value        → arr[index]
- Length of array   → arr.length
- Last element      → arr[arr.length - 1]

---------------------------------------------------------
IMPORTANT ARRAY METHODS (🔥 VERY IMPORTANT 🔥)

1️⃣ push()  → Add element at the END
   arr.push(10)

2️⃣ pop()   → Remove element from the END
   arr.pop()

3️⃣ unshift() → Add element at the START
   arr.unshift(5)

4️⃣ shift() → Remove element from the START
   arr.shift()

---------------------------------------------------------
SEARCH & CHECK METHODS:

5️⃣ includes() → Check if value exists
   arr.includes(10) → true / false

6️⃣ indexOf() → Get index of value
   arr.indexOf(10) → index or -1

---------------------------------------------------------
ITERATION METHODS:

7️⃣ forEach() → Loop through array
   arr.forEach(el => console.log(el))

8️⃣ map() → Transform each element (returns NEW array)
   arr.map(x => x * 2)

9️⃣ filter() → Select elements based on condition
   arr.filter(x => x % 2 === 0)

🔟 reduce() → Reduce array to single value
   arr.reduce((sum, x) => sum + x, 0)

---------------------------------------------------------
SORTING & REVERSING:

11️⃣ sort() → Sort array
   arr.sort((a, b) => a - b)

12️⃣ reverse() → Reverse array order
   arr.reverse()

---------------------------------------------------------
MODIFYING ARRAY CONTENT:

13️⃣ splice() → Add / remove elements
   arr.splice(index, count)

14️⃣ slice() → Extract portion of array (NO change to original)
   arr.slice(start, end)

---------------------------------------------------------
COMMON MISTAKES (VERY IMPORTANT):

❌ Confusing map() and forEach()
❌ Forgetting map/filter return NEW arrays
❌ Using sort() without comparator for numbers
❌ Modifying array unintentionally

---------------------------------------------------------
INTERVIEW THINKING STEPS 🎯

1️⃣ Do I need a NEW array? → map / filter
2️⃣ Do I need ONE value? → reduce
3️⃣ Do I only need to loop? → for / forEach
4️⃣ Do I need to modify array? → push / pop / splice
5️⃣ Do I need to search? → includes / indexOf

---------------------------------------------------------
GOLDEN RULE 🏆

"Choose array method based on OUTPUT type"

- New array → map / filter
- Single value → reduce
- Side effects → forEach
- Modify array → push / pop / splice


=========================================================
*/

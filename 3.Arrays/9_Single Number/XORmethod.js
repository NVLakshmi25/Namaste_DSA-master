let nums = [4, 1, 2, 1, 2];

function singleNumber(nums) {

    // xor → will store XOR of all elements
    // Initialize with 0 because:
    // 0 ^ x = x
    let xor = 0;

    // Loop through all elements
    for (let i = 0; i < nums.length; i++) {

        /*
        XOR properties:
        - a ^ a = 0
        - a ^ 0 = a
        - XOR is commutative & associative
        */

        xor = xor ^ nums[i];
    }

    // Remaining value is the single (non-duplicate) number
    return xor;
}

// Function call
console.log(singleNumber(nums)); // 4

/*
==================== SIMPLE XOR SUMMARY ====================

XOR (^ ) basic rules:
- Same number XOR same number = 0
      a ^ a = 0
- Any number XOR 0 = the number
      a ^ 0 = a

Step-by-step idea:
nums = [4, 1, 2, 1, 2]

xor = 0
0 ^ 4 = 4
4 ^ 1 = 5
5 ^ 2 = 7
7 ^ 1 = 6
6 ^ 2 = 4

What really happens:
- 1 appears twice → 1 ^ 1 = 0 (cancels)
- 2 appears twice → 2 ^ 2 = 0 (cancels)
- Only 4 appears once → remains

So effectively:
4 ^ (1 ^ 1) ^ (2 ^ 2)
= 4 ^ 0 ^ 0
= 4

Why this works:
- XOR removes duplicates automatically
- Order does not matter

Interview Golden Rule 🏆:
"Duplicates cancel, unique survives"

One-line Memory Trick 🧠:
"Same cancels, different remains"

================================================
*/

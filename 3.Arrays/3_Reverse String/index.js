// Reverse the given array of characters

let s = ["H", "E", "L", "L", "O"];

function reverseString(s) {

    // Length of the array
    let len = s.length;

    // We only need to loop till half of the array
    // Because each swap fixes TWO positions
    let halfLen = Math.floor(len / 2);

    // Loop from start to the middle
    for (let i = 0; i < halfLen; i++) {

        // Temporary variable to store current element
        let temp = s[i];

        // Swap first with last
        s[i] = s[len - 1 - i];

        // Place stored value at the mirrored position
        s[len - 1 - i] = temp;
    }

    // Array is modified in-place
    return s;
}

// Function call
console.log(reverseString(s)); // ["O", "L", "L", "E", "H"]


/*
==================== COMMENTED SUMMARY ====================

Problem:
- Reverse the given array of characters
- Modify the array in-place
- Do NOT use extra array

Approach:
- Two Pointer Technique (Swap method)

Pointers:
- i → starts from beginning
- len - 1 - i → mirrored index from the end

Core Logic:
- Swap s[i] with s[len - 1 - i]
- Move i forward
- Stop at middle

Why only half length?
- Each swap handles TWO positions
- Avoids swapping back

Time Complexity:
- O(n) → single pass (n/2 swaps)

Space Complexity:
- O(1) → in-place, no extra space

Interview Golden Rule 🏆:
"Reverse = symmetric swapping"

One-line Memory Trick 🧠:
"Swap front with back, move inward"

================================================
*/

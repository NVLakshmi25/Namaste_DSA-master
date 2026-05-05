// MERGE SORTED ARRAYS — IN-PLACE (BACKWARD METHOD)

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];

let m = 3;              // valid elements in nums1
let n = nums2.length;  // elements in nums2

function merge(nums1, m, nums2, n) {

    // Pointer to last valid element in nums1
    let p1 = m - 1;

    // Pointer to last element in nums2
    let p2 = n - 1;

    /*
    Loop from the END of nums1
    i goes from last index → 0
    */
    for (let i = m + n - 1; i >= 0; i--) {

        /*
        If nums2 is exhausted,
        or nums1[p1] is greater,
        place nums1[p1]
        */
        if (p2 < 0 || (p1 >= 0 && nums1[p1] > nums2[p2])) {
            nums1[i] = nums1[p1];
            p1--;
        } 
        /*
        Otherwise place nums2[p2]
        */
        else {
            nums1[i] = nums2[p2];
            p2--;
        }
    }
}

// Function call
merge(nums1, m, nums2, n);

// Output
console.log(nums1); // [1, 2, 2, 3, 5, 6]


/*
==================== COMMENTED SUMMARY ====================

Problem:
- Merge two sorted arrays
- nums1 has extra space at the end
- Modify nums1 in-place

Approach:
- Three pointer technique (backward merge)
- Implemented using FOR LOOP

Pointers:
- p1 → last valid index of nums1
- p2 → last index of nums2
- i  → position to fill in nums1 (from back)

Core Logic:
1️⃣ Compare nums1[p1] and nums2[p2]
2️⃣ Place the larger value at nums1[i]
3️⃣ Move corresponding pointer backward
4️⃣ Continue until all elements are placed

Why this works:
- Writing from back avoids overwriting
- Largest elements are placed first

Time Complexity:
- O(m + n)

Space Complexity:
- O(1) → no extra space used

Interview Golden Rule 🏆:
"When merging in-place, always fill from the back"

One-line Memory Trick 🧠:
"Compare from back, place biggest last"

================================================
*/

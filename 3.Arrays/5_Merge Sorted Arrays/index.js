let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];

let m = 3;              // number of valid elements in nums1
let n = nums2.length;  // number of elements in nums2

function merge(nums1, m, nums2, n) {

    // Create a copy of the valid part of nums1
    let nums1Copy = nums1.slice(0, m);

    // Pointer for nums1Copy
    let p1 = 0;

    // Pointer for nums2
    let p2 = 0;

    // Loop through total length (m + n)
    for (let i = 0; i < m + n; i++) {

        /*
        Condition to pick from nums1Copy:
        - nums2 is exhausted OR
        - nums1Copy has smaller value
        */
        if (
            p2 >= n ||
            (p1 < m && nums1Copy[p1] < nums2[p2])
        ) {
            nums1[i] = nums1Copy[p1];
            p1++;
        } else {
            nums1[i] = nums2[p2];
            p2++;
        }
    }
}

// Function call
merge(nums1, m, nums2, n);

// Print merged array
console.log(nums1); // [1, 2, 2, 3, 5, 6]


/*
==================== COMMENTED SUMMARY ====================

Problem:
- Merge two sorted arrays nums1 and nums2
- nums1 has extra space at the end
- Modify nums1 in-place

Approach:
- Two Pointer Technique
- Use a temporary copy of nums1's valid elements

Pointers:
- p1 → traverses nums1Copy
- p2 → traverses nums2
- i  → fills nums1 from index 0

Core Logic:
1️⃣ Compare nums1Copy[p1] and nums2[p2]
2️⃣ Place the smaller value into nums1[i]
3️⃣ Move corresponding pointer forward
4️⃣ Continue until all elements are merged

Why this works:
- Both arrays are already sorted
- Two pointers ensure correct order

Time Complexity:
- O(m + n)

Space Complexity:
- O(m) → due to nums1Copy

Interview Golden Rule 🏆:
"When arrays are sorted → use two pointers"

One-line Memory Trick 🧠:
"Compare, place smaller, move pointer"

================================================
*/

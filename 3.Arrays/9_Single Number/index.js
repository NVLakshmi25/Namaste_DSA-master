let nums = [4, 1, 2, 1, 2];

function singleNumber(nums) {

    // Hash object to store frequency of each number
    let hash = {};

    // First loop: count frequency of each number
    for (let i = 0; i < nums.length; i++) {

        // If number not present in hash, initialize count = 1
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } 
        // If already present, increase count
        else {
            hash[nums[i]]++;
        }
    }

    // Second loop: find the number with frequency = 1
    for (let i = 0; i < nums.length; i++) {

        // The number that appears only once
        if (hash[nums[i]] === 1) {
            return nums[i];
        }
    }
}

// Function call
console.log(singleNumber(nums)); // 4


/*
==================== SIMPLE HASH MAP SUMMARY ====================

Problem:
- Every number appears twice except ONE
- Find the number that appears only once

Approach:
- Frequency counting using hash object

Steps:
1️⃣ First loop:
    - Count how many times each number appears
    Example:
    hash = {
        1: 2,
        2: 2,
        4: 1
    }

2️⃣ Second loop:
    - Check which number has count = 1
    - Return that number

Why it works:
- Duplicate numbers have count > 1
- Unique number has count = 1

Time Complexity:
- O(n) → two passes through array

Space Complexity:
- O(n) → extra space for hash map

Interview Note 🔥:
- This is easy to understand
- XOR solution is more optimal (O(1) space)

One-line Memory Trick 🧠:
"Count everything, return count = 1"

================================================
*/

let nums = [1, 1, 0, 1, 1, 1];

function findMaxConsecutiveOnes(nums) {

    // currCount → counts current streak of consecutive 1s
    let currCount = 0;

    // maxCount → stores the maximum streak found so far
    let maxCount = 0;

    // Loop through the array
    for (let i = 0; i < nums.length; i++) {

        // If current element is 1 → extend streak
        if (nums[i] === 1) {
            currCount++;
        } 
        // If current element is 0 → streak breaks
        else {
            // Update maxCount if current streak is larger
            maxCount = Math.max(currCount, maxCount);

            // Reset current streak
            currCount = 0;
        }
    }

    /*
    Final comparison is needed because:
    - Array may end with 1s
    - Loop only updates maxCount when 0 is found
    */
    return Math.max(maxCount, currCount);
}

// Function call
console.log(findMaxConsecutiveOnes(nums)); // 3


/*
==================== COMMENTED SUMMARY ====================

Problem:
- Find the maximum number of consecutive 1s in a binary array

Approach:
- Single pass (Linear Scan)

Variables:
- currCount → counts current consecutive 1s
- maxCount  → tracks maximum consecutive 1s

Core Logic:
1️⃣ If nums[i] == 1:
    → Increase current count
2️⃣ If nums[i] == 0:
    → Compare currCount with maxCount
    → Reset currCount

Why final Math.max is needed:
- Handles case where array ends with 1s
- Ensures last streak is counted

Time Complexity:
- O(n) → one pass through array

Space Complexity:
- O(1) → constant extra space

Interview Golden Rule 🏆:
"Count streaks, reset on break"

One-line Memory Trick 🧠:
"Increase on 1, reset on 0"

================================================
*/
// OUT PUT => 3

// 1 → curr=1, max=0
// 1 → curr=2, max=0
// 0 → max=2, curr=0
// 1 → curr=1
// 1 → curr=2
// 1 → curr=3
// END → max = max(2,3) = 3
let nums = [3, 0, 1];

function missingNumber(nums) {

    // n → length of the array
    // The numbers are from range [0, n]
    let n = nums.length;

    /*
    Calculate expected sum of numbers from 0 to n
    Formula: n * (n + 1) / 2
    */
    let totalSum = n * (n + 1) / 2;

    // Sum of elements present in the array
    let partialSum = 0;

    // Calculate actual sum of array elements
    for (let i = 0; i < n; i++) {
        partialSum = partialSum + nums[i];
    }

    /*
    Missing number = expected sum - actual sum
    */
    return totalSum - partialSum;
}

// Function call
console.log(missingNumber(nums)); // 2


/*
==================== COMMENTED SUMMARY ====================

Problem:
- Given an array containing n distinct numbers
- Numbers are in the range [0, n]
- Exactly ONE number is missing
- Find the missing number

Approach:
- Mathematical Sum Formula

Key Idea:
- Sum of numbers from 0 to n is known
- Subtract sum of given array elements
- The difference is the missing number

Variables:
- totalSum   → expected sum from 0 to n
- partialSum → sum of elements present in array

Why it works:
- All numbers except one are present
- Missing value creates a gap in the sum

Time Complexity:
- O(n) → single pass to calculate sum

Space Complexity:
- O(1) → constant extra space

Interview Golden Rule 🏆:
"Use math when sequence is complete except one"

One-line Memory Trick 🧠:
"Expected sum − actual sum = missing number"

================================================
*/

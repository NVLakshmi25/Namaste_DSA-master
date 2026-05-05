// Best Time to Buy and Sell Stock

let prices = [7, 1, 5, 3, 6, 4];

function maxProfit(prices) {

    // Track the minimum price seen so far (best buying price)
    let min = prices[0];

    // Track the maximum profit achievable
    let maxProfit = 0;

    // Start from index 1 (since min is initialized with index 0)
    for (let i = 1; i < prices.length; i++) {

        /*
        Calculate profit if we sell today:
        profit = current price - minimum buying price
        */
        if (prices[i] - min > maxProfit) {
            maxProfit = prices[i] - min;
        }

        /*
        Update minimum price if a lower price is found
        This represents a better day to buy
        */
        if (prices[i] < min) {
            min = prices[i];
        }
    }

    // Return the maximum profit found
    return maxProfit;
}

// Function call
console.log(maxProfit(prices)); // 5


/*
==================== COMMENTED SUMMARY ====================

Problem:
- Given stock prices where index = day
- Buy once and sell once
- Sell must happen AFTER buy
- Find maximum possible profit

Approach:
- Single pass with tracking variables

Key Variables:
- min → lowest price so far (best buy)
- maxProfit → highest profit so far

Core Logic:
1️⃣ Keep updating the minimum price
2️⃣ At each price, calculate profit:
      current price - min
3️⃣ Update maxProfit if profit is higher

Why this works:
- We always buy at the lowest price before selling
- We check profit for every possible selling day

Time Complexity:
- O(n) → single pass through array

Space Complexity:
- O(1) → no extra space

Interview Golden Rule 🏆:
"Track minimum buy price and maximum profit"

One-line Memory Trick 🧠:
"Buy low, sell high — but sell after buy"

================================================
*/

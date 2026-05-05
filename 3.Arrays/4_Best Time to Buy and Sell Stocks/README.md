# 📈 Best Time to Buy and Sell Stock (LeetCode 121)

## 🧠 Problem Overview

You are given an array `prices` where `prices[i]` represents the price of a stock on the **i-th day**.

You want to **maximize profit** by:

* Buying the stock on **one day**
* Selling it on a **future day**

⚠️ You may complete **only one transaction** (buy once, sell once).

If no profit is possible, return `0`.

---

## ✅ Example

```
Input:  [7, 1, 5, 3, 6, 4]
Output: 5
```

👉 Buy at price **1** (day 2) and sell at price **6** (day 5)

---

## 🚀 Approach (Greedy + One Pass)

The idea is simple and powerful:

> **Track the minimum price so far and calculate profit for each day.**

### Key Variables

* `minPrice` → lowest price seen so far (best day to buy)
* `maxProfit` → maximum profit achieved so far

---

## 💻 JavaScript Solution

```js
function maxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        // Calculate profit if sold today
        let profit = prices[i] - minPrice;
        maxProfit = Math.max(maxProfit, profit);

        // Update minimum buying price
        minPrice = Math.min(minPrice, prices[i]);
    }

    return maxProfit;
}
```

---

## 🧪 Dry Run (Step-by-Step)

### Input

```
prices = [7, 1, 5, 3, 6, 4]
```

| Day | Price | minPrice | Profit (price - minPrice) | maxProfit |
| --- | ----- | -------- | ------------------------- | --------- |
| 0   | 7     | 7        | -                         | 0         |
| 1   | 1     | 1        | 1 - 7 = -6                | 0         |
| 2   | 5     | 1        | 5 - 1 = 4                 | 4         |
| 3   | 3     | 1        | 3 - 1 = 2                 | 4         |
| 4   | 6     | 1        | 6 - 1 = 5                 | 5 ✅       |
| 5   | 4     | 1        | 4 - 1 = 3                 | 5         |

🎯 **Final Answer: `5`**

---

## ⏱️ Complexity Analysis

* **Time Complexity:** `O(n)` → single pass through the array
* **Space Complexity:** `O(1)` → constant extra space

---

## 🏆 Interview Takeaway

> "Always track the minimum buying price and compute profit for each selling day."

### 🧠 Memory Trick

**Buy low, sell high — but always sell after you buy!**

---

## 📌 Related Problems

* Best Time to Buy and Sell Stock II
* Best Time to Buy and Sell Stock III
* Best Time to Buy and Sell Stock with Cooldown

---

Happy Coding 🚀

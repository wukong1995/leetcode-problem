[question](https://leetcode.com/problems/coin-change)

换零钱，使用dp，保存0-amount每个数字的number
dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)

```js
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (amount === 0) return 0
  if (coins.length === 0) return -1

  const dp = new Array(amount + 1).fill(Infinity)
  coins.sort((a, b) => a - b)
  dp[0] = 0

  for (let i = 0; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
      } else {
        break
      }
    }
  }
  return dp[amount] >= (amount+1) ? -1 : dp[amount]
};
```

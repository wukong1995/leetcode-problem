[question](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

这是一个股票买进买入什么时候能得到最大收益的问题。想了一下，和之前那个“动态规划”的问题类似，于是使用同样的思路去解决： 记录最小价格和最大收益。

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const { length } = prices;
  if (prices.length === 0) return 0;

  let minPrice = prices[0];
  let maxPro = 0;

  for(let index = 1; index < length; index++) {
    const currentPrice = prices[index];

    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    } else if (currentPrice - minPrice > maxPro) {
      maxPro = currentPrice - minPrice;
    }
  }

  return maxPro;
};
```

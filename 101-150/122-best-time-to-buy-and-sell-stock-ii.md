[question](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii)

假设您有一个数组，其中第i个元素是第i天给定股票的价格。
设计算法以找到最大利润。 您可以根据需要完成尽可能多的交易（即，多次买入并卖出一股股票）。
注意：您不得同时进行多笔交易（即，您必须在再次购买之前卖出股票）。

思路：只要当天的价格比昨天的高就进行买入卖出的操作

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const { length } = prices;
  let sum = 0;

  for (let i = 1; i < length; i++) {
    if (prices[i - 1] < prices[i]) {
      sum += prices[i] - prices[i - 1];
    }
  }

  return sum;
};
```
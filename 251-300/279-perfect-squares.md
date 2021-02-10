[question](https://leetcode.com/problems/perfect-squares)

>Given an integer n, return the least number of perfect square numbers that sum to n.

>A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

解题：使用动态规划来生成序列，但要注意特殊的平方情况

```js
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
 const dp = [0, 1]

  for (let i = 2; i <= n; i++) {
    let count = Infinity

    for (let j = parseInt(Math.sqrt(i)); j >= 1; j--) {
      count = Math.min(count, dp[i - j*j])
    }

    dp[i] = count + 1
  }
  // console.log(dp[n])
  return dp[n]
};
```

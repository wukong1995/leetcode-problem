[question](https://leetcode.com/problems/unique-paths/)

机器从左上角走到右下角共多少种走法？我又想到了“走迷宫”了，但是搜索一下属于动态规划...

有一个公式，当前点的总路径数等于上面点和左边点的和，第一行和第一列的路径条数是1
递归公式：dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
节省空间，简化为dp[j] = dp[j] + dp[j - 1]

```js
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let arr = [1];

  for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
          arr[j] = (arr[j] || 1) + arr[j - 1];
      }
  }
  return arr[n - 1] || 1;
};

```

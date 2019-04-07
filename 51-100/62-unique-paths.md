[question](https://leetcode.com/problems/unique-paths/)

机器从左上角走到右下角共多少种走法？我又想到了“走迷宫”了，但是搜索一下属于动态规划...有一个公式，简化一下可以使用一维数组

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
[question](https://leetcode.com/problems/minimum-path-sum/)

最小路径和，参考62题目的走法，在当前路径点时，取左边和上面点的最小值进行相加即可，这里我选择改变自身数组。

```js
// [
//   [1,3,1],        [1, 4, 5]
//   [1,5,1],     => [2, 7, 6]
//   [4,2,1]         [6, 8, 7]
// ]
// min sum: 7
```

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const row = grid.length;
  const column = grid[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (i === 0 && j === 0) {
        continue;
      } else if (j === 0) {
        grid[i][j] += grid[i - 1][j];
      } else if (i === 0) {
        grid[i][j] += grid[i][j - 1];
      } else {
        grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
      }
    }
  }

  return grid[row - 1][column - 1];
};
```

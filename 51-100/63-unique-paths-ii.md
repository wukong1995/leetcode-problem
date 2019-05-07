[question](https://leetcode.com/problems/unique-paths-ii/)

这个题目相比于62来说增加障碍，在之前的基础上，只需要把障碍位的数字置0即可。

```js
var uniquePathsWithObstacles = function(obstacleGrid) {
  const row = obstacleGrid.length;
  const column = obstacleGrid[0].length;
  if (obstacleGrid[0][0] === 1 || obstacleGrid[row - 1][column - 1] === 1) return 0;

  let arr = new Array(column);
  arr.fill(0, 0, column);
  arr[0] = 1;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (obstacleGrid[i][j] === 1) {
        arr[j] = 0;
      } else if(j > 0) {
        arr[j] = arr[j] + arr[j - 1];
      }
    }
  }
  return arr[column - 1];
};

```

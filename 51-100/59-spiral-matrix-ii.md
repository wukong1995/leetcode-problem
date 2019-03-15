[question](https://leetcode.com/problems/spiral-matrix-ii/)

输出n*n的数字螺旋形排列的矩阵，是54题的后传。
我是54题反过来操作，但是效率不高，肯定是还有更好的答案。

```js
/**
 * @param {number} number
 * @return {number[][]}
 */
var generateMatrix = function (number) {
  if (number === 0) return [];

  let index = 0;
  let overRow = number;
  let overColumn = number;
  let currentNum = 1;
  const matrix = [];

  for (let i = 0; i < number; i++) {
    matrix.push([]);
  }

  while (index < overRow && index < overColumn) {
    for (let i = index; i < overColumn; i++) {
      matrix[index][i] = currentNum;
      currentNum++;
    }

    for (let i = index + 1; i < overRow - 1; i++) {
      matrix[i][overColumn - 1] = currentNum;
      currentNum++;
    }

    if (overRow - 1 !== index) {
      for (let i = overColumn - 1; i >= index; i--) {
        matrix[overRow - 1][i] = currentNum;
        currentNum++;
      }
    }

    if (overColumn - 1 !== index) {
      for (let i = overRow - 2; i > index; i--) {
        matrix[i][index] = currentNum;
        currentNum++;
      }
    }

    overRow -= 1;
    overColumn -= 1;
    index++;
  }

  return matrix;
};
```

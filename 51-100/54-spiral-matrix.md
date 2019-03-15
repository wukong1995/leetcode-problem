[question](https://leetcode.com/problems/spiral-matrix/)

将矩阵螺旋形转换成数组。
解答： 按照圈进行循环

```js
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const row = matrix.length;
  if (row === 0) return [];
  const column = matrix[0].length;

  const resArr = [];
  let index = 0;
  let overRow = row;
  let overColumn = column;

  while (index < overRow && index < overColumn) {
    for (let i = index; i < overColumn; i++) {
      resArr.push(matrix[index][i]);
      // console.log('top', resArr)
    }

    for (let i = index + 1; i < overRow - 1; i++) {
      resArr.push(matrix[i][overColumn - 1]);
      // console.log('right', resArr)
    }

    if (overRow - 1 !== index) {
      for (let i = overColumn - 1; i >= index; i--) {
        resArr.push(matrix[overRow - 1][i]);
        // console.log('bottom', resArr)
      }
    }

    if (overColumn - 1 !== index) {
      for (let i = overRow - 2; i > index; i--) {
        resArr.push(matrix[i][index]);
        // console.log('left', resArr)
      }
    }

    overRow -= 1;
    overColumn -= 1;
    index++;
  }

  return resArr;
};
```

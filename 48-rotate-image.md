[question](https://leetcode.com/problems/rotate-image/)

将矩阵反转九十度： 先对角交换，再上下交换

```js
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const lastIndex = matrix.length - 1;
  const halfIndex = Math.ceil(lastIndex / 2);
  let temp = null;

  for (let row = 0; row <= lastIndex; row++) {
    for (let column = 0; column < lastIndex - row; column++) {
      temp = matrix[row][column];
      matrix[row][column] = matrix[lastIndex - column][lastIndex - row];
      matrix[lastIndex - column][lastIndex - row] = temp;
    }
  }

  for (let i = 0; i < halfIndex; i++) {
    temp = matrix[i];
    matrix[i] = matrix[lastIndex - i];
    matrix[lastIndex - i] = temp;
  }

  return matrix;
};
```

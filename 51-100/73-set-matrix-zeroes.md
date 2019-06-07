[question](https://leetcode.com/problems/set-matrix-zeroes/)

给定m×n矩阵，如果元素为0，则将其整个行和列设置为0.就地执行(直接改变数组)。

使用第一行和第一列做是否置0的标志

```js
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const row = matrix.length;
    if (row === 0) return matrix;

    const col = matrix[0].length;
    let isSetFirstCol = false;
    let isSetFirstRow = false;

    for (let i = 0; i < col; i++) {
         isSetFirstRow = isSetFirstRow || (matrix[0][i] === 0);
    }

    for (let i = 0; i < row; i++) {
         isSetFirstCol = isSetFirstCol || (matrix[i][0] === 0);
    }


    for(let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for(let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    if(isSetFirstRow) {
        for (let i = 0; i < col; i++) {
          matrix[0][i] = 0;
     }
    }

    if(isSetFirstCol) {
        for (let i = 0; i < row; i++) {
          matrix[i][0] = 0;
     }
    }

    return matrix;
};
```
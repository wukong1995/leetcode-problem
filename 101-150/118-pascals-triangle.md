[question](https://leetcode.com/problems/pascals-triangle/)

给定非负整数numRows，生成Pascal三角形的第一个numRows。算法就根据图来。

```js
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if(numRows === 0) return [];

  const rowsArr = [[1]];
  for(let row = 1; row < numRows; row++) {
    const currentRow = rowsArr[row] = [1];
    const prevRow = rowsArr[row - 1];
    let column = 1;

    while(column < row) {
      currentRow.push(prevRow[column - 1] + prevRow[column]);
      column++;
    }

    currentRow.push(1);
  }

  return rowsArr;
};
```
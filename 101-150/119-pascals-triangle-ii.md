[question](https://leetcode.com/problems/pascals-triangle-ii/)

比118题更进一步，得到第n行的数组，下面的解答效率不高...

```js
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (numRows) {
  const rowsArr = [[1]];
  for(let row = 1; row <= numRows; row++) {
    const currentRow = rowsArr[row] = [1];
    const prevRow = rowsArr[row - 1];
    let column = 1;

    while(column < row) {
      currentRow.push(prevRow[column - 1] + prevRow[column]);
      column++;
    }

    currentRow.push(1);
  }

  return rowsArr[numRows];
};
```
[question](https://leetcode.com/problems/valid-sudoku/)

判断9*9的棋盘是否符合规则

一个一个的判断，我遇到的问题是：第一次将row的判断放在前面，数组被排序。于是将row的判断放在最后，不改变原始数组的排序放在前面。

```js
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const length = board.length;

  // column
  for (let i = 0; i < length; i++) {
    const columnArr = [];
    for (let c = 0; c < length; c++) {
      columnArr.push(board[c][i]);
    }

    if (isRepeatInArr(columnArr)) {
      return false;
    }
  }

  // sub-box
  for (let i = 0; i < length; i++) {
    const row = parseInt(i / 3);
    const column = i % 3;

    const columnArr = [];
    for (let c = 0; c < 3; c++) {
      columnArr.push(board[row * 3 + c][column * 3]);
      columnArr.push(board[row * 3 + c][column * 3 + 1]);
      columnArr.push(board[row * 3 + c][column * 3 + 2]);
    }
    if (isRepeatInArr(columnArr)) {
      return false;
    }
  }

  // row
  for (let i = 0; i < length; i++) {
    if (isRepeatInArr(board[i])) {
      return false;
    }
  }

  return true;
};

var isRepeatInArr = function(arr) {
  const sortArr = arr.sort();
  for (let i = 1; i < sortArr.length; i++) {
    if (sortArr[i] !== '.' && sortArr[i] === sortArr[i - 1]) {
      return true;
    }
  }

  return false;
};
```

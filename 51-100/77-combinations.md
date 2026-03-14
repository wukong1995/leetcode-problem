[question](https://leetcode.com/problems/combinations)

第一种：先找行，再找列

```js
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const row = searchRow(matrix, target)
  if (row === -1) {
    return false
  }
  return searchCol(matrix[row], target)
};

function searchRow(matrix, target) {
  let low = -1;
  let high = matrix.length -1
  while (low < high) {
    const mid = Math.ceil((low + high) / 2)

    if (matrix[mid][0] > target) {
      high = mid - 1
    } else {
      low += 1
    }
  }

  return low
}

function searchCol(arr, target) {
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (arr[mid] === target) {
      return true
    } else if (arr[mid] > target) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return false
}
```

看了评论区，还有一种方法，从左下角出发，判断向上/右走

```js
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let row = matrix.length -1
  let col = 0
  let maxCol = matrix[0].length - 1

  while(row >= 0 && col <= maxCol) {
    const cur = matrix[row][col];

    if (cur === target) {
        return true
    } else if (cur > target) {
        row--
    } else {
        col++
    }
  }

  return false
};

```

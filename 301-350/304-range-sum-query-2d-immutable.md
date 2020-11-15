[question](https://leetcode.com/problems/range-sum-query-2d-immutable/)

延续303，每个点上保存行+列的总和

```js
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
   const row = matrix.length
   if (!matrix[0]) return null
   const col = matrix[0].length
   this.matrix = []

   for(let i = 0; i < row; i++) {
    this.matrix.push([])
    for (let j = 0; j < col; j++) {
      let sum = matrix[i][j]
      if(i > 0) sum += this.matrix[i-1][j]
      if(j > 0) sum += this.matrix[i][j-1]
      if(i > 0 && j > 0) sum -= this.matrix[i-1][j-1]

      this.matrix[i][j] = sum
    }
   }
  // console.log(this.matrix)
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  let res = this.matrix[row2][col2]

  if (row1 > 0) res -= this.matrix[row1 - 1][col2]
  if (col1 > 0) res -= this.matrix[row2][col1 - 1]
  if (row1 > 0 && col1 > 0) res += this.matrix[row1 - 1][col1 - 1]

  return res
};


/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
```

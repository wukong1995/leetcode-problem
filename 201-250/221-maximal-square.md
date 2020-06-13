[question](https://leetcode.com/problems/maximal-square)

把每一个坐标当作正方形的右下角的那个点。第一行和第一列原样搬过来，其他节点需要对照左边、上边、斜角线上的值

```js
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {

  const row = matrix.length
  if (row === 0) return 0

  const col = matrix[0].length

  // 构造二维数组
  // const dp = new Array(row).fill(new Array(col).fill(0))
  const dp = [];
  for (let i = 0; i < row; i++) dp.push(new Array(col).fill(0));


  let res = 0;
  for (let j = 0; j < row; j++) {
    for (let i = 0; i < col; i++) {
      const cur = +matrix[j][i]

      if (j === 0 || i === 0) {
        dp[j][i] = cur
      } else if (cur === 1) {
        const prev = Math.min(dp[j -1 ][i], dp[j][i -1], dp[j-1][i-1])
        dp[j][i] = prev + 1
      }

      res = Math.max(res, dp[j][i])
    }
  }

  return res * res

  console.log('000', dp)
  return res * res
};
```

这里注意fill只适合填充基本类型，不适合填充引用类型，刚开始创建数组的时候用的`new Array(row).fill(new Array(col).fill(0))`，结果值有时候是对的，有时候是错的，调了1个多小时。。。



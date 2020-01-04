[question](https://leetcode.com/problems/number-of-islands)

找到连续的1的区域
遇到1的点，使用dfs将周围连续区域的值设为0

```js
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
   const row = grid.length
   if (row === 0) return 0
   const column = grid[0].length
   let count = 0

   for (var i = row - 1; i >= 0; i--) {
       for (var j = column - 1; j >=0; j--) {
           if (grid[i][j] === "1") {
               dfs(grid, i, j)
               count++
           }
       }
   }

    return count
};

var dfs = (grid, x, y) => {
    const row = grid.length
    const column = grid[0].length

    if (x < 0 || x >= row || y < 0 || y >= column) return
    if (grid[x][y] === "0") return

    grid[x][y] = "0"
    dfs(grid, x - 1, y)
    dfs(grid, x + 1, y)
    dfs(grid, x, y - 1)
    dfs(grid, x, y + 1)
}
```

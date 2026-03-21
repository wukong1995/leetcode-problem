[question](https://leetcode.com/problems/rotting-oranges)

腐烂的橘子，广度优先查找

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let fresh = 0
    let res = 0
    let rotten = []
    const row = grid.length
    const col = grid[0].length
    for (let i = 0; i< row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 2) {
                rotten.push([i, j])
            } else if (grid[i][j] === 1) {
                fresh++
            }
        }
    }

    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    while(rotten.length) {
        let nextRotten = []
        for (const item of rotten) {
            const [curi, curj] = item
            dirs.forEach((dir) => {
                const [i, j] = [dir[0] + curi, dir[1] + curj]
                if (i < 0|| j < 0 || i >= row || j >= col) {
                    return
                }

                if (grid[i][j] === 1) {
                    fresh--
                    grid[i][j] = 2
                    nextRotten.push([i, j])
                }
            })
        }
        if (!nextRotten.length) {
            break;
        }
        res++
        rotten = nextRotten
    }

    return fresh > 0 ? -1 : res;
};
```

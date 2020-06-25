[question](https://leetcode.com/problems/game-of-life)

关于题目的描述看这里：https://zh.wikipedia.org/wiki/%E5%BA%B7%E5%A8%81%E7%94%9F%E5%91%BD%E6%B8%B8%E6%88%8F

要求是在原来的数组上进行更改，同时二维数组的状态是一起变化，而不是一行一行的变。

使用状态机去记录将要变化的状态： // 0: 死->死，1: 活->活，2: 活->死，3: 死->活，最后%2即可

```js
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    // 0: 死->死，1: 活->活，2: 活->死，3: 死->活
  if (board.length === 0) return

  const row = board.length
  const col = board[0].length

  for (let i = 0; i < row; i++) {
    for (let j =0; j < col; j++) {
      // 扫描周围八个元素
      let count = 0
      for (let xx = i - 1; xx <= i + 1; xx ++) {
        for (let yy = j -1; yy <= j + 1; yy++) {
          if (xx < 0 || yy < 0 || xx >= row || yy >= col) {
            continue;
          }

          if (xx === i && yy === j) {
            continue
          }

          if (board[xx][yy] === 1 || board[xx][yy] === 2) {
            count++
          }
        }
      }

      const target = board[i][j]
      // 死亡：存活细胞>3 => 存活
      if (target === 0 && count === 3) {
        board[i][j] = 3
      }

      // 存活： 存活细胞<2 => 死亡；存活2活3 => 存活；>3 => 死亡
      if (target === 1 && (count < 2 || count > 3)) {
        board[i][j] = 2
      }
    }
  }

  console.log(board)

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      board[i][j] = board[i][j] % 2
    }
  }

  // console.log(board)
};
```

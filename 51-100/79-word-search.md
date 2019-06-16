[question](https://leetcode.com/problems/word-search)

#### 题目
给定一个2D板和一个单词，找出该单词是否存在于网格中。

该单词可以由顺序相邻的单元的字母构成，其中“相邻”单元是水平或垂直相邻的单元。 相同的字母单元格不得多次使用。

#### 解
这个题目和走迷宫的类似。刚开始我迷惑的点是我需要先找到第一个字母在的位置再继续，但是也没有一个很好的想法。去看了视频解答才有了方向。找到第一个单词的位置实质上就是找到匹配的过程，所以这个过程不应该独立出去。

还有一个问题是如何保证走的不重复，这里可以将曾经走过的路置0，这样就保证不会走重复的路了。

```js
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const row = board.length;
    if (row === 0) return false;
    const col = board[0].length;
    const wordLast = word.length - 1;

    const dfs = (x, y, i) => {
        if(x < 0 || x === row || y < 0 || y === col || word[i] !== board[x][y]) {
            return false;
        }

        if(i === wordLast) {
            return true
        }

        const char = board[x][y];
        board[x][y] = 0;
        const isFound = dfs(x - 1, y, i + 1)
                     || dfs(x + 1, y, i + 1)
                     || dfs(x, y + 1, i + 1)
                     || dfs(x, y - 1, i + 1);
        board[x][y] = char;
        return isFound;
 }

    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(dfs(i, j, 0)) return true
        }
    }

    return false;
};
```
[question](https://leetcode.com/problems/nim-game)

看题目的意思貌似不是4的倍数，你都可以赢

```js
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  return n % 4 !== 0
};
```

竟然可以，去讨论区看了下，貌似也是这样子做的，震惊！！！

[question](https://leetcode.com/problems/power-of-two)

这个题是跟着191来的，位运算是最好的办法。[链接在这里](https://leetcode.com/problems/power-of-two/discuss/63966/4-different-ways-to-solve-Iterative-Recursive-Bit-operation-Math)
，位运算不是我的强项，我还是先去看其他的题吧=。=

```js
var isPowerOfTwo = function(n) {
  return n > 0 && ((n & (n-1)) == 0);
};
```

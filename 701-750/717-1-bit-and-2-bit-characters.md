[question](https://leetcode.com/problems/1-bit-and-2-bit-characters)

我们有两个特殊字符。 第一个字符可由一位0表示。第二个字符可由两位（10或11）表示。

现在给出一个由几个位表示的字符串。 返回最后一个字符是否必须为一位字符。 给定的字符串将始终以零结尾。


解题：遇到1走两步，遇到0走一步，看是否停留在最后一位
```js
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    const { length } = bits
    let i = 0
    while(i < length - 1) {
      if(bits[i] === 1) {
        i += 2
      } else {
        i++
      }
    }
  return i === length - 1
};
```

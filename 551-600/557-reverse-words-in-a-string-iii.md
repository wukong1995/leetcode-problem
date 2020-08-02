[question](https://leetcode.com/problems/reverse-words-in-a-string-iii)

反转字符串中每个word中字母的顺序

```js
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').map(word => word.split('').reverse().join('')).join(' ')
};
```

[question](https://leetcode.com/problems/reverse-words-in-a-string/)

反转字符串中的单词，主要处理的问题就是多个连续空格的情况。

```js
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const wordList = s.trim().split(/\s+/);

  return wordList.reverse().join(' ');
}
```
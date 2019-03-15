[question](https://leetcode.com/problems/length-of-last-word/)

求字符串中最后一个单词的长度：先去掉首尾空格，在去掉连续的空格
```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const wordArr = s.trim().replace(/  +/g, ' ').split(' ');
  return wordArr[wordArr.length -1].length;
};
```
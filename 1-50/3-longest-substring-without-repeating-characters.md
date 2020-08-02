[question](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

求一个字符串中不相同字符的子串的最大长度
我的想法是：下一个字符与子串中的某一个字符相同的话，移除之前的字符，并在结尾加入下一个字符，递归进行，只需要记录此时子串的最大长度即可。

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  return getLongestSubstring(s);
};

var getLongestSubstring = function(str, sub = '', maxLength = 0) {
   maxLength = Math.max(maxLength, sub.length);
  if (str === '') return maxLength;

  const char = str.slice(0, 1);
  const includeIndex = sub.indexOf(char);
  if (includeIndex > -1) {
    sub = sub.slice(includeIndex + 1);
  }
  return getLongestSubstring(str.slice(1), sub + char, maxLength);
};
```

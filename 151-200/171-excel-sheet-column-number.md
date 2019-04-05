[question](https://leetcode.com/problems/excel-sheet-column-number/)

将字符串转化成excel中的数字，和之前题目是相反的，这么一想，之前的题目使用charcode是不是可以转化过去！！！

```js
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  return helper(s);
};

var helper = (s, sum = 0) => {
  if(s === '') return sum;

  return helper(s.slice(1), sum * 26 + s[0].charCodeAt() - 64);
}

```
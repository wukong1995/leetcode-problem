[question](https://leetcode.com/problems/generate-parentheses/)

给数字n，得到n对括号的不同排列。

递归即可。

```js
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];
  getStrBfs();
  return res;

  function getStrBfs(leftParenthesis = 0, rightParenthesis = 0, currentStr = '') {
    if (rightParenthesis === n) {
      return res.push(currentStr);
    }

    if (leftParenthesis < n) {
      getStrBfs(leftParenthesis + 1, rightParenthesis, currentStr + '(');
    }

    if(rightParenthesis < leftParenthesis) {
      getStrBfs(leftParenthesis, rightParenthesis + 1, currentStr + ')');
    }
  }
};

```

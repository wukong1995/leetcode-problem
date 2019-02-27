[question](https://leetcode.com/problems/valid-parentheses/)

考察：堆栈，先进先出

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const chars = s.split('');
  let flag = true;
  const beMatched = [];

  chars.forEach(char => {
    if (!flag) return;

    if (char === '(') {
      beMatched.unshift(')');
    } else if (char === '{') {
      beMatched.unshift('}');
    } else if (char === '[') {
      beMatched.unshift(']');
    } else if (char === beMatched[0]) {
      beMatched.shift();
    } else {
      flag = false;
    }
  });

  return flag && beMatched.length === 0;
};
```

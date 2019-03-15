[question](https://leetcode.com/problems/reverse-integer/)

反转数字，数字的大小有限制

```js
const MAX = Math.pow(2, 31) - 1;
const MIN = Math.pow(-2, 31);
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let res = x;
  let isNegative = false;

  if (x < 0) {
    isNegative = true;
    res = - x;
  }

  res = parseInt(res.toString().split('').reverse().join(''), 10);
  if (res === -Infinity || res === Infinity || isNaN(res)) return 0;

  if (isNegative) {
    res = -res;
  }

  if (res > MAX || res < MIN) return 0;

  return res;
};
```

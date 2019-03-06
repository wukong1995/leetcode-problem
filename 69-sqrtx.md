[question](https://leetcode.com/problems/sqrtx/)


求一个的数的开方的整数，开方不会大于数字的一半

```js
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 1) return 0;
  if(x < 3) return 1;

  const halfLength = Math.ceil(x / 2);
  for (let i = 0; i <= halfLength; i ++) {
    const power = i * i;
    if (power === x) {
      return i;
    } else if (power > x) {
      return i - 1;
    }
  }
};
```

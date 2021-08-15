[question](https://leetcode.com/problems/valid-perfect-square)

判断一个数是够可以完美开方：假如一个数是1 + 3 + 5 + ...的和，就是完美开放数

```js
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i = i + 2) {
    sum += i;
    if (sum === num) {
      return true;
    }

     if (sum > num) {
         return false;
     }
  }

  return false;
};
```

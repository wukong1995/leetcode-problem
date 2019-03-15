[question](https://leetcode.com/problems/divide-two-integers/)

不使用乘法、除法和模运算实现除法。

我的想法是循环判断，but最后是超时了，去网上看了一下，说是用位运算，这个我对位运算不了解== 暂时搁置

```js
const MAX = Math.pow(2, 31) - 1;
const MIN = Math.pow(-2, 31);
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const isSameSign = dividend > 0 === divisor > 0;
  let quotient = 0;
  let sum = 1;

  const positiveDividend = Math.abs(dividend);
  const positiveDivisor = Math.abs(divisor);


  for (let i = 0; i < positiveDividend; i++ ) {
    if (sum === positiveDivisor) {
      quotient += 1;
      sum = 0;
    }

    sum += 1;
  }

  quotient = isSameSign ? quotient : -quotient;
  if(quotient < MIN || quotient > MAX) {
    return MAX;
  }

  return quotient;
};
```
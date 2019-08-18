[question](https://leetcode.com/problems/add-digits)

```js
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  const nextNumber = num.toString().split('').reduce((acc, item) => acc + parseInt(item), 0)
  return nextNumber < 10 ? nextNumber : addDigits(nextNumber)
};
```
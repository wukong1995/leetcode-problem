[question](https://leetcode.com/problems/maximum-product-subarray/)

和卖股票相比，那次是减法，这次是乘法。

这，对于负数到底是乘还是不乘。。。。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  const { length } = nums;

  if (length === 0) {
    return 0;
  }

  const arr = [nums[0]];
  let i = 1;

  while(i < length) {
    const currentNum = nums[i];
    if (currentNum !== 0) {
      arr[i] = (arr[i - 1] || 1) * currentNum;
    } else {
      arr[i] = 0;
    }
    i++;
  }

  return Math.max(...arr);
};
```
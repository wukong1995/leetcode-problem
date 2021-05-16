[question](https://leetcode.com/problems/maximum-product-of-three-numbers)

从数组中取三个数，求最大乘积
降序排列，分别求前三个数字的乘积和最大正数和最后两位负数的乘积，取两者最大值

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
   nums.sort((a, b) => b - a)
  const length = nums.length

  const max1 = nums[0] * nums[1] * nums[2]
  const max2 = nums[0] * nums[length - 1] * nums[length - 2]
  return Math.max(max1, max2)
};
```

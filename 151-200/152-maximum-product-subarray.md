[question](https://leetcode.com/problems/maximum-product-subarray)

求连续元素最大的乘积，之前求最大和的时候，遇到负数的处理很简单，但是对于乘运算来说，负负相乘是整数，我要怎么办呢？本来我是计算出一个数组的连续子集积，从而找出最大的，结果显而易见：超时。这个时候看到讨论区的一个算法，每次保留最小和最大的数，对于一个正数来说，遇上正数会越大，负数则越小，对于负数，则反之。于是每次保留计算中的最大值和最小值，这么一想也是之前最大和的一个扩展。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let globalMax = nums[0];
  let currentMax = globalMax;
  let currentMin = globalMax;
  const { length } = nums;

  for (let i = 1; i < length; i++) {
    if (nums[i] < 0) {
      const temp = currentMax;
      currentMax = currentMin;
      currentMin = temp;
    }

    currentMax = Math.max(nums[i], nums[i] * currentMax);
    currentMin = Math.min(nums[i], nums[i] * currentMin);
    globalMax = Math.max(currentMax, globalMax);
  }

  return globalMax;
};
```

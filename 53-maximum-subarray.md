[question](https://leetcode.com/problems/maximum-subarray/)

求一个数组中连续几个相邻元素的和最大值，对于这一类问题没有太大的思路，看了视频讲解，这个问题是属于动态规划。思路也是很简单的。对于到当前元素要不要加到之前的和上，需要看之前和是否是大于零。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const length = nums.length;
  const sumArr = new Array(length);
  sumArr[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    sumArr[i] = sumArr[i -1] > 0 ? nums[i] + sumArr[i -1] : nums[i];
  }

  return Math.max(...sumArr);
};
```

[question](https://leetcode.com/problems/rotate-array/)

旋转数组即；将第k个以后的全部数组添加到数组的最前面。

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  nums.unshift(...(nums.splice(nums.length - k)));
};
```
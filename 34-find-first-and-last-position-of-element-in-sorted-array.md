
[question](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array//)

找一个数字在数组中的index和lastIndex：循环数组得到最大的index和最小的index返回，时间复杂度是O(n)

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
   const index = nums.indexOf(target);
    if (index === -1) return [-1, -1]
  return [index, nums.lastIndexOf(target)];
}
```

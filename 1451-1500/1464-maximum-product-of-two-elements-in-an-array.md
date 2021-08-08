[question](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array)

Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

小菜一碟

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
   nums.sort((a, b) => b - a)
   return (nums[0] - 1) * (nums[1] - 1)
};
```

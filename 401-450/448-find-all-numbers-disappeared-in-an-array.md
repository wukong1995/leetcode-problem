[question](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array)

Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const current = Math.abs(nums[i]) - 1;
    if (nums[current] > 0) {
      nums[current] = -nums[current];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i+1)
    }
  }
  return result;
};
```
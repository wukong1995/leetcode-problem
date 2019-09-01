[question](https://leetcode.com/problems/find-all-duplicates-in-an-array)

Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

答：还是采用一个萝卜一个坑的思想，这个方法真的使用广泛，我记得我已经用过好几次了

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const result = []

  for(let i = nums.length -  1; i >= 0; i--) {
    const targetIndex = Math.abs(nums[i]) - 1

    const target = nums[targetIndex]
    if (target < 0) {
      result.push(targetIndex + 1)
    } else {
      nums[targetIndex] = -target
    }
  }

  return result
};
```

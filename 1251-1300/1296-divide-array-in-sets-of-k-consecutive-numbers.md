[question](https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers)

Given an array of integers nums and a positive integer k, find whether it's possible to divide this array into sets of k consecutive numbers
Return True if its possible otherwise return False.

解题：数组先排序，每次取数组的第一个元素当作连续数字的start，没找到一个就从数组中划掉

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
   if (nums.length % k !== 0) return false

  nums = nums.sort((a, b) => a - b)

  while(nums.length > 0) {
    const start = nums.shift()
    for (let i = 1; i<k; i++) {
      const index = nums.findIndex(item => item === start + i)
      if (index < 0) {
        return false
      } else {
        nums.splice(index, 1)
      }
    }
  }

  return true
};
```

效率不理想，我看有人使用map取存，应该比数组强


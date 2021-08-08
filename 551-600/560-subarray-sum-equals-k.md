[question](https://leetcode.com/problems/subarray-sum-equals-k)

求一个数组中连续子数组的和为k的个数

看到这个题目依稀想起了滑动窗口这个词，但是比较遗憾的数组有正有负；滑动窗口只适合只有正数的情况；可能之前做过这个题目；有一个连续的前提，可以保存前缀和的方法解决，类似第一题 two sum

滑动窗口思路：（对于这个题不是正确的答案）
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let res = 0
  let start = 0
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]

    if (sum < k) {
      continue
    }

    while(sum > k) {
      sum -= nums[start]
      start++
    }

    if (sum === k && start <= i) {
      sum -= nums[start]
      res++
      start++
    }
  }


  console.log('res', res)

  return res
};
```

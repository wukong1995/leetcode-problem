[question](https://leetcode.com/problems/largest-divisible-subset)

最大整除子集

Given a set of distinct positive integers nums, return the largest subset answer such that every pair (answer[i], answer[j]) of elements in this subset satisfies:

answer[i] % answer[j] == 0, or
answer[j] % answer[i] == 0
If there are multiple solutions, return any of them.


第一种办法： 使用dp， 记住一定要先排序
```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  const { length } = nums
  const dp = new Array(length).fill(1)
  let max = 0

  nums = nums.sort((a, b) => a - b)

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }

    if (dp[max] < dp[i]) {
      max = i
    }
  }

  const res = [nums[max]]

  while(dp[max] > 1) {
    for (let i = max - 1; i >= 0; i--) {
      if (nums[max] % nums[i] === 0 && (dp[max] === dp[i] + 1)) {
        max = i
        res.unshift(nums[i])
      }
    }
  }

  return res
};

```

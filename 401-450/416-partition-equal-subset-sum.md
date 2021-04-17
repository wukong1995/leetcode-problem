[question](https://leetcode.com/problems/partition-equal-subset-sum)

将一个数组分成两半，使其和相等。

本来是想着先排序，然后左边一个leftSum，右边一个rightSum。但突然想到一个case，当leftSum大于rightSum的时候，rightSum到底是加小值还是加大值，想了好久无解。去了评论区发现是到动规的题目，我太难了=。=

直接去看了leetcode国内站的视频讲解，背包问题，还是有点晕乎😓

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
   const sum = nums.reduce((acc, item) => acc + item, 0)

   if (sum & 1) {
     return false
   }

  const targetSum = sum / 2
  const dp = new Array(targetSum + 1).fill(false)
  dp[0] = true

  for (let i = 0; i < nums.length; i++) {
    for (let j = sum / 2; j >= 0; j--) {
      if (nums[i] <= targetSum) {
         dp[j] = dp[j] || dp[j - nums[i]]
      }
    }

    if (dp[targetSum]) {
      return true
    }
  }

  return false
};
```

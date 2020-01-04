[question](https://leetcode.com/problems/house-robber)

能抢到最多的钱，不能连续抢
当前能抢到最多的钱是，前两天的钱+今天的钱和昨天的钱中的最大值

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) return 0
    const res = []
    for (let i = nums.length - 1; i>= 0; i--) {
      res[i] = Math.max((res[i + 2] || 0) + nums[i], res[i + 1] || 0)
    }

    return res[0]
};
```
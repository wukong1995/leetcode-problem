[question](https://leetcode.com/problems/house-robber-ii)

198题的升级版，房子变成了一个环
在198上进行改造，取去掉第一个房子后的得到的钱和去掉最后一个房子的得到的钱

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]

    return Math.max(getMax(nums.slice(1)), getMax(nums.slice(0, -1)))
};

var getMax = function(nums) {
    const res = []
    for (let i = nums.length - 1; i>= 0; i--) {
      res[i] = Math.max((res[i + 2] || 0) + nums[i], res[i + 1] || 0)
    }

    return res[0] || 0
};
```

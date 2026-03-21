[question](https://leetcode.com/problems/jump-game-ii)

跳格子，寻找跳到最后的最小次数

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let step = 0
    let maxPos = 0
    let end = 0
    for (let i = 0; i < nums.length - 1; i++) {
        if (maxPos >= i) {
            maxPos = Math.max(maxPos, i + nums[i])

            if (i ===end) {
                step++
                end = maxPos
            }
        }
    }

    return step
};
```

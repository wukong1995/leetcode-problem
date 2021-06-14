[question](https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii)

延续453，这次是随意挑选一个数字，然后进行加1或者减1的操作

本来想的是先排序，然后拿着第一个数和最后一个数取中间值，但是考虑到[1, 9, 10]这种情况，就换成了取最中间的数的值，长度为奇数，取最中间的值；长度为偶数，取中间的两个值的平均数

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums.sort((a, b) => a - b)
    let middle = 0

    if (nums.length % 2 === 0) {
      const target =  nums.length / 2
      middle = parseInt((nums[target] + nums[target - 1]) / 2)
    } else {
      middle = nums[parseInt(nums.length / 2)]
    }


    let res = 0
    for (let i = 0; i < nums.length; i++) {
      res += Math.abs(nums[i] - middle)
    }
    return res
};

```

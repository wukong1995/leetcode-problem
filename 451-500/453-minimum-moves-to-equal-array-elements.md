[question](https://leetcode.com/problems/minimum-moves-to-equal-array-elements)

给定一个长度为 n 的 非空 整数数组，每次操作将会使 n - 1 个元素增加1。找出让数组所有元素相等的最小操作次数。

简单的按照题意走当然回超时， 我觉得这个肯定有捷径：观察规律可发现，需要加的次数等于先找到最小的数，然后所有大于这个最小数的数减去此最小数之和，

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    const min = Math.min(...nums)
    let res = 0

    for (let i = nums.length - 1; i >= 0; i--) {
      res += nums[i] - min
    }

    return res
};

```

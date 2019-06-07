[question](https://leetcode.com/problems/missing-number/)

给定一个包含n个不同数字的数组，取自0,1,2，...，n，找到数组中缺少的数字。

我的思路是先排序，然后看相邻数字的差值是否是1，效率不太好，看了评论区中得到一个很神奇的方法
得到数组的中间不差值的和，再和实际得到的和比较

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const { length } = nums;
    const expectSum = length * (length + 1) / 2;

    let sum = nums.reduce((acc, item) => acc + item, 0);
    const result = expectSum - sum;

    return result < 0 ? 0 : result;
};
```
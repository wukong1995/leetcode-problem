[question](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

在数组中找到给定数字的firstIndex和lastIndex

我将找index这块扔给js了，只需要再反转数组求一次index

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const index = nums.indexOf(target);
    if (index === -1) return [-1, -1]
    const reverseIndex = nums.reverse().indexOf(target);
    const lastIndex = nums.length - 1 - reverseIndex;
    return [index, lastIndex];
};
```
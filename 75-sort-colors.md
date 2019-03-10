[question](https://leetcode.com/problems/sort-colors/)

可以看成排序只含有0， 1， 2的数组，问题的描述中说至少两种解题答案。

这是简单的方法，使用桶排序。
```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const totalArr = [0, 0, 0];
  nums.forEach(item => {
    totalArr[item] += 1;
  });

  let baseIndex = 0;
  totalArr.forEach((item, index) => {
    for(let i = 0; i < item; i++) {
      nums[baseIndex + i] = index;
    }
     baseIndex += item;
  });
};
```
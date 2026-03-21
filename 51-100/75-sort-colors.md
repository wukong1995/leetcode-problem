[question](https://leetcode.com/problems/sort-colors/)

可以看成排序只含有0， 1， 2的数组，问题的描述中说至少两种解题答案。

从左至右放2， 从右到左调整0
```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let left = 0
  let right = nums.length - 1
  while (left < nums.length && left < right) {
    if (nums[left] === 2) {
      nums[left] = nums[right]
      nums[right] = 2
      right--
    } else {
        left++
    }
  }
  // 再放0
  left = 0;
  while (right >= 0 && left < right) {
    if (nums[right] === 0) {
      while (nums[left] === 0) {
        left++
      }
     if (left < right) {
       nums[right] = nums[left]
       nums[left] = 0
       left++
     }
    } else {
      right--
    }
  }
  return nums
};
```

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

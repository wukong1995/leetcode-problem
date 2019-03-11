[question](https://leetcode.com/problems/jump-game/)

这个题目我一开始以回溯的思想去解决，but超时了。去找了答案，这个题使用贪心算法做是很简单的。

回溯：
```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const lastIndex = nums.length - 1;
  return jump(nums, lastIndex);
};

var jump = function (nums, last, currentIndex = 0, isFind = false) {
  const currentNum = nums[currentIndex];
  if (currentNum >= last) {
    return true;
  } else if (currentNum > last) {
    return false;
  }

  for (let step = 1; step <= currentNum; step++) {
    if (!isFind && last > step) {
      isFind = jump(nums, last - step, currentIndex + step);
    }
  }

  return isFind;
};
```

贪心：
```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let max = 0;
  for (let i= 0; i < nums.length; i++) {
    if (i > max) return false;
    max = Math.max(nums[i] + i, max);
  }
  return true;
};
```

[question](https://leetcode.com/problems/contains-duplicate/)

判断一个数组中是否有重复的元素

我的思路是：排序数组，查看当前数字和后一个数字是否相同
```js
var containsDuplicate = function(nums) {
  nums = nums.sort((a, b) => b - a)

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }

  return false;
};
```

讨论区的其他方法：set之后的length比较/桶
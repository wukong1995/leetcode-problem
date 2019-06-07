[question](https://leetcode.com/problems/minimum-size-subarray-sum/)

给定n个正整数和正整数s的数组，找到连续子序列的最小长度，其总和≥s。如果没有，则返回0。

这是一个滑动窗口的题目。
思路：保存一个窗口，如果窗口的和小于s，则扩大窗口，否则缩小窗口。

```js
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let windowArr = [];
  let res = 0;
  let minLength = Infinity;

  let i = nums.length - 1;

  while(i >= -1) {
    if (res < s) {
      windowArr.push(nums[i]);
      res += nums[i];
      i--;
    } else {
      minLength = Math.min(minLength, windowArr.length);
      res -= windowArr.shift();
    }
  }

  return minLength === Infinity ? 0 : minLength;
};
```

但是看提交后的效率应该不是最佳实践，看了评论区，我只需要保存star的指针，而不用保存一个数组...
稍稍修改：
```js
var minSubArrayLen = function(s, nums) {
  let res = 0;
  let minLength = Infinity;

  let i = nums.length - 1;
  let start = i;

  while(i >= -1) {
    if (res < s) {
      res += nums[i];
      i--;
    } else {
      minLength = Math.min(minLength, start - i);
      res -= nums[start];
      start--;
    }
  }

  return minLength === Infinity ? 0 : minLength;
};
```

再换一种思考方式(三种中的最佳)：
```js
var minSubArrayLen = function(s, nums) {
  let sum = 0;
  let minLength = Infinity;

  let i = nums.length - 1;
  let start = i;

  while(i > -1) {
    sum += nums[i];

    while (sum >= s){
      minLength = Math.min(minLength, start - i + 1);
      sum -= nums[start];
      start--;
    }

    i--;
  }

  return minLength === Infinity ? 0 : minLength;
};
```





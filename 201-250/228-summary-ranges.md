[question](https://leetcode.com/problems/summary-ranges)

我的思路是记录左边边界的坐标和右边坐标的，提交时候效率不是太好，尝试优化一下

```js
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  let start = 0;
  let end = 0;
  const res = [];
  const { length } = nums;

  for (let i = 0; i < length; i++) {
    if(nums[i + 1] - nums[i] === 1) {
      end++;
    } else {
      if (start === end) {
        res.push(nums[i].toString())
      } else {
        res.push(`${nums[start]}->${nums[end]}`);
      }

      start = i + 1;
      end = start;
    }
  }

  return res;
};
```

// 使用end去代替i
```js
var summaryRanges = function(nums) {
  let start = 0;
  let end = 0;
  const res = [];
  const { length } = nums;

  for (let end = 0; end < length; end++) {
    if(nums[end + 1] - nums[end] !== 1) {
      if (start === end) {
        res.push(nums[end].toString())
      } else {
        res.push(`${nums[start]}->${nums[end]}`);
      }

      start = end + 1;
    }
  }

  return res;
};
```
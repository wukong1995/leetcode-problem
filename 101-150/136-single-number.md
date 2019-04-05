[question](https://leetcode.com/problems/single-number/)

找只在数组中出现过一次的数，思路是排序后，检查一个数和它后面的数是否相同。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  nums = nums.sort((a, b) => a - b);
  const length = nums.length;
  for(let i = 0; i < length;) {
    if(nums[i] !== nums[i + 1]) {
      return nums[i];
    }

    i += 2;
  }
  return nums[length - 1];
};
```
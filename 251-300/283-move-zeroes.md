[question](https://leetcode.com/problems/move-zeroes)

题意：把数组中的的零放在数组的最后面

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let count = 0;
  let i = 0;

  while(i < nums.length) {
    if (nums[i] !== 0) {
      i++;
    } else {
      count++;
      nums.splice(i, 1)
    }
  }

  for(let i = 0; i < count; i++) {
    nums.push(0)
  }
}
```
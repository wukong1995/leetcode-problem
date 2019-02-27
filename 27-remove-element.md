[question](https://leetcode.com/problems/remove-element/)

```js
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let index = 0;
  while (index <= nums.length) {
    if(nums[index] === val) {
      nums.splice(index, 1);
    } else {
      index += 1;
    }
  }
  return nums.length;
};

```

[question](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)



```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = (nums) => {
  let index = 0;

  while (index < nums.length) {
    if (nums[index] === nums[index + 1]) {
      nums.splice(index, 1);
    } else {
      index += 1;
    }
  }

  return nums.length;
};
```

[question](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/)

移除有序数组中重复项中两个以上的值：判断当前元素和它后面后面的元素是否相等

```js
var removeDuplicates = function (nums) {
  let index = 0;
  while (index <= nums.length - 3) {
    if (nums[index] === nums[index + 2]) {
      nums.splice(index, 1);
    } else {
      index++;
    }
  }

  return nums.length;
};
```
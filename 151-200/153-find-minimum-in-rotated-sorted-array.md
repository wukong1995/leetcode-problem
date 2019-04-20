[question](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)

在旋转的数组中寻找最小值

刚开始看到这个问题，我本来想着是找到旋转指针，再在两段中直接搜索，但是感觉效率上不好，于是看了别人的思路。

使用二分法，如果数组的中的第一个值小于最后一个值，说明数组是有序的，直接返回第一个值即最小值；如果是无序的，则继续二分查找。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (nums.length === 1) return nums[0];
  return helper(nums, 0, nums.length - 1);
};

const helper = (nums, left, right) => {
  if (left + 1 === right) {
    return Math.min(nums[left], nums[right]);
  }

  if (nums[left] < nums[right]) {
    return nums[left];
  }

  const middle = parseInt((left + right) / 2);
  return Math.min(helper(nums, left, middle), helper(nums, middle, right));
}
```
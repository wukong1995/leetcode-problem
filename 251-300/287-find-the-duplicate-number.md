[question](https://leetcode.com/problems/find-the-duplicate-number)

给定包含n+1个整数的数组nums，其中每个整数在1和n之间（包括1和n），证明必须存在至少一个重复的数字。 假设只有一个重复的数字，找到重复的数字。

Note:
You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.

=。=这个我也不知道怎么描述思路，没想到好的解决办法，看了讨论区才看到这个做法，很棒！

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  for(let i = nums.length - 1; i >= 0; i--) {
    const target = Math.abs(nums[i])

    if(nums[target] > 0) {
      nums[target] = -nums[target]
    } else {
      return target;
    }
  }
};
```
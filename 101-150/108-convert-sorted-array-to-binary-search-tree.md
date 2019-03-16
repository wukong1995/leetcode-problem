[question](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/)

将一个有序数组转换成一个二叉搜索树：为了平衡起见，每次取数组中的中间的树，有点类似二分查找。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return helper(nums, 0, nums.length - 1);
};

var helper = (nums, leftIndex, rightIndex) => {
  if(leftIndex > rightIndex) return null;

  const middle = parseInt(leftIndex + (rightIndex - leftIndex) / 2);
  const root = new TreeNode(nums[middle]);
  root.left = helper(nums, leftIndex, middle - 1);
  root.right = helper(nums, middle + 1, rightIndex);
  return root;
};
```
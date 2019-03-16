[question](https://leetcode.com/problems/path-sum/)

判断一个树，是否从根到叶子的和等于给定的值

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if(root === null) return false;

  const { val, left, right } = root;
  if (left === null && right === null && val === sum) return true;

  const total = sum - val;
  return hasPathSum(root.left, total) || hasPathSum(root.right, total);
};
```
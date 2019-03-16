[question](https://leetcode.com/problems/balanced-binary-tree/)

判断一个树是否是平衡树（平级的相差深度不能超过1）

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
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (root === null) return true;
  if (Math.abs(getDepth(root.left) - getDepth(root.right)) > 1) return false;

  return isBalanced(root.left) && isBalanced(root.right);
};

var getDepth = function (root) {
  if (root === null) return 0;

  return 1 + Math.max(getDepth(root.left), getDepth(root.right));
};

```
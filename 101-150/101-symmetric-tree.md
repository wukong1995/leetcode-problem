[question](https://leetcode.com/problems/symmetric-tree/)

判断一个树是否是对称树：判断left.left === right.right && left.right === right.left

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
var isSymmetric = function (root) {
  if(root === null) return true;

  return isSameOfNode(root.left, root.right);
};

var isSameOfNode = (left, right) => {
  if (left === null && right === null) return true;

  if ((left === null && right !== null) || (right === null && left !== null) || left.val !== right.val) return false;

  return isSameOfNode(left.left, right.right) && isSameOfNode(left.right, right.left);
};
```
[question](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

得到树的最大深度

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
 * @return {number}
 */
var maxDepth = function (root) {
  if(root === null) return 0;

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
```
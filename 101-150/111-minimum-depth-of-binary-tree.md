[question](https://leetcode.com/problems/minimum-depth-of-binary-tree/)

得到一个树的最小深度，和最大深度相反。如果使用迭代法也可以，but我想着迭代中“剪枝”，去搜索相关的解决方案，但是发现没有进行“剪枝”的算法，是我想多了吗=。=

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
var minDepth = function (root) {
  if (root === null) return 0;

  if (root.left === null) return 1 + minDepth(root.right);
  if (root.right === null) return 1 + minDepth(root.left);

  return 1 + Math.min(minDepth(root.right), minDepth(root.left));
};
```
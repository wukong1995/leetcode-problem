[question](https://leetcode.com/problems/invert-binary-tree/)

颠倒树，左边的变右边，右边的变左边

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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const helper = (node) => {
    if (node === null) return node;

    const temp = node.right;
    node.right = node.left;
    node.left = temp;

    helper(node.left);
    helper(node.right);
  };

  helper(root);
  return root;
};
```
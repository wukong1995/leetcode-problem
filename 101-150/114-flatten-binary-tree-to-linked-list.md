[question](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/)

将一棵树压扁成一个“链表”，只有右边的树。

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (root === null) return;
  if (root.left) flatten(root.left);
  if (root.right) flatten(root.right);

  let temp = root.right;
  root.right = root.left;
  root.left = null;

  while(root.right) root = root.right;
  root.right = temp;
};
```

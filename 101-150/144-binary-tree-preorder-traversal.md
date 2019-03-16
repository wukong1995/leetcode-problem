[question](https://leetcode.com/problems/binary-tree-preorder-traversal/)

得到二叉树的前序遍历（根左右）

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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const resArr = [];
  const helper = (node) => {
    if(node === null) return;

    resArr.push(node.val);
    helper(node.left);
    helper(node.right);
  };

  helper(root);
  return resArr;
};
```
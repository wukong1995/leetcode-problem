[question](https://leetcode.com/problems/count-complete-tree-nodes/)

这个题目需要注意完整树的特征：在完整的二叉树中，除了可能的最后一个级别之外，每个级别都被完全填充，并且最后一级中的所有节点都尽可能地在左边。它可以具有1到2h节点，包括最后一级h。

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
var countNodes = function (root) {
  if (root === null) return 0;

  const leftHeight = getHeight(root.left);
  const rightHeight = getHeight(root.right);
  if(leftHeight === rightHeight) {
    return Math.pow(2, leftHeight) + countNodes(root.right);
  } else {
    return Math.pow(2, rightHeight) + countNodes(root.left);
  }
};

var getHeight = (root) => {
  let height = 0;

  while(root) {
    height++;
    root = root.left;
  }

  return height;
};
```

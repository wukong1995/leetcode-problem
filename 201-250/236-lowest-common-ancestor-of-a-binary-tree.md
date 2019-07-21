[question](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree)

寻找二叉树中的两个节点中最近的父节点

思路：判断p和q在当前节点左子树和右子树中的存在情况，如果存在在左右子树中，则当前节点是最近的父节点，否则递归判断左/右子树

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root === null) return null;
    if (root === p || root === q) return root

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    return left === null ? right : (right === null ? left : root);
};
```

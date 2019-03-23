[question](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)

计算节点的最小祖先，由于是在二叉树中，因此可以利用节点的范围进行计算。

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
var lowestCommonAncestor = function (root, p, q) {
  let min = p.val;
  let max = q.val;

  if(min > max) {
    let temp = max;
    max = min;
    min = temp;
  }

  return helper(root, min, max);
};

var helper = (root, min, max) => {
  if(root === null) return null;
    
  if(root.val > max) {
    return helper(root.left, min, max);
  } else if(root.val < min) {
    return helper(root.right, min, max);
  } else {
    return root;
  }
};
```
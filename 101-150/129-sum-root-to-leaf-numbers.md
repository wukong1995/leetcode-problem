[question](https://leetcode.com/problems/sum-root-to-leaf-numbers/)

得到“根-叶”的全部路径的和
写递归写晕了，要找不到出口了...

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
var sumNumbers = function (root) {
  return helper(root, 0, 0);
};

var helper = (root, sum, total) => {
  if(root === null) return 0;

  sum = sum * 10 + root.val;
  if (root.left === null && root.right === null) {
    return total + sum;
  }

  return helper(root.left, sum, total) + helper(root.right, sum, total);
};
```

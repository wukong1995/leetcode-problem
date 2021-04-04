[question](https://leetcode.com/problems/binary-tree-tilt)

每个节点的tail值为左子树的和减去右子树和的绝对值，求树中节点的tail值的和


```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
  let res = 0
  var dfs = (root) => {
    if (root === null) {
      return 0
    }

    const leftSum = dfs(root.left)
    const rightSum = dfs(root.right)
    const currentValue = Math.abs(leftSum - rightSum)
    res += currentValue

    return root.val + leftSum + rightSum
  }

  dfs(root)
  return res
};
```

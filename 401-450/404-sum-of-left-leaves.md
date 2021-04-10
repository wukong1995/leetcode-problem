[question](https://leetcode.com/problems/sum-of-left-leaves)

求树中左叶子节点的和

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
var sumOfLeftLeaves = function(root) {
    let res = 0

    var dfs = (root, isLeft) => {
      if (root === null) {
        return
      }

      if (root.left === null && root.right === null && isLeft) {
        res += root.val
      }

      dfs(root.left, true)
      dfs(root.right, false)
    }

    dfs(root, false)

    return res
};


```

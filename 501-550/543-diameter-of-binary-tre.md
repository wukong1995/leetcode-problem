[question](https://leetcode.com/problems/diameter-of-binary-tre)

求每个节点的左子树+右子树高度的最大值

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
var diameterOfBinaryTree = function(root) {
    let max = 0;

    function dfs(root) {
        if (root === null) {
            return 0
        }

        const left = dfs(root.left)
        const right = dfs(root.right)
        max = Math.max(max, left + right)
        return Math.max(left, right) + 1
    }

    dfs(root)
    return max
};

```

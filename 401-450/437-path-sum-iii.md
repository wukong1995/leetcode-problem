[question](https://leetcode.com/problems/path-sum-iii)

dfs查询

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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if (root === null) {
        return 0;
    }

    let res = dfs(root, targetSum)
    res += pathSum(root.left, targetSum)
    res += pathSum(root.right, targetSum)
    return res;
};

function dfs(root, targetSum) {
    let ret = 0;
    if (root === null) {
        return 0
    }

    const sub = targetSum - root.val
    if (sub === 0) {
        ret++
    }

    ret += dfs(root.left, sub)
    ret += dfs(root.right, sub)
    return ret;
}
```

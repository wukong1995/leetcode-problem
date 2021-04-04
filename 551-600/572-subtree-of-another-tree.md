[question](https://leetcode.com/problems/subtree-of-another-tree)

判断一个树是不是另一个的子树

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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = (s, t) => {
   if (s === null) return false


    return helper(s, t) ||  isSubtree(s.left, t) || isSubtree(s.right, t)
}

var helper = function(s, t) {
   if (s === null || t === null) return s === t
   if (s.val !== t.val) return false

    const isLeftSame = helper(s.left, t.left)
    const isRightSame = helper(s.right, t.right)

    return isLeftSame && isRightSame


};

```

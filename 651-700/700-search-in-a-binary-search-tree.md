[question](https://leetcode.com/problems/search-in-a-binary-search-tree/)

找到树的小子树，没有返回null。
这个题目我忽略的一点是：target通过和当前节点的值对比可以知道大概是在哪个子树上，第一次没有添加这个条件，导致效率很低...

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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (root === null) return null;
  if (root.val === val) {
    return root;
  } else if (root.val > val) {
    return searchBST(root.left, val);
  } else {
    return searchBST(root.right, val);
  }
};
```

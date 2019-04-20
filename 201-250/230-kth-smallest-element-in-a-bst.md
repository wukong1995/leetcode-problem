[question](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)

在bst中寻到第k小的数。根据bst的特性，每往下一层，就k--

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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let res = 0;

  var dfs = (root) => {
    if(root === null) return 0;

    dfs(root.left);
    k--;
    if (k === 0) {
      res = root.val;
    }
    dfs(root.right);
  }
  dfs(root, k);
  return res;
};
```
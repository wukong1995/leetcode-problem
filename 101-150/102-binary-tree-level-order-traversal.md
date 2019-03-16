[question](https://leetcode.com/problems/binary-tree-level-order-traversal/)

得到树同级的节点值的顺序遍历，根据depth进行push

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) return [];

  const resArr = [];
  let depth = 0;

  const helper = (root, depth) => {
    if (root === null) return;

    if(!resArr[depth]) {
      resArr[depth] = [];
    }

    resArr[depth].push(root.val);

    helper(root.left, depth + 1);
    helper(root.right, depth + 1);
  };

  helper(root, depth);
  return resArr;
};
```
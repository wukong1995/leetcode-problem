[question](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/)

比102题更进一步，得到z字形，观察后，depth%2等于0的不反向，等于1的反向。

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
var zigzagLevelOrder = function (root) {
  if (root === null) return [];

  const resArr = [];
  let depth = 0;

  const helper = (root, depth) => {
    if (root === null) return;

    if(!resArr[depth]) {
      resArr[depth] = [];
    }

    if(depth % 2 === 0) {
      resArr[depth].push(root.val);
    } else {
      resArr[depth].unshift(root.val);
    }

    helper(root.left, depth + 1);
    helper(root.right, depth + 1);
  };

  helper(root, depth);
  return resArr;
};
```
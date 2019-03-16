[question](https://leetcode.com/problems/binary-tree-paths/)

返回从根到叶子的全部路径

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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if(root === null) return [];
  const resArr = [];

  const recursive = (node, accStr = '') => {
    const { left, right, val } = node;

    if(left === null && right === null) {
      return resArr.push(accStr + val);
    }

    if(left !== null) {
      recursive(left, accStr + val + '->');
    }

    if (right !== null) {
      recursive(right, accStr + val + '->');
    }
  };

  recursive(root);
  return resArr;
};
```
[question](https://leetcode.com/problems/binary-tree-right-side-view/)

得到树的右视图，记得之前做的一个题目是“得到树的每个层级的数字”，这个问题在之前的解决办法加上只取每个层级的第一个元素

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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (root === null) return [];


  const resArr = [];
  let depth = 0;

  const helper = (root, depth) => {
    if (root === null) return;

    if (!resArr[depth]) {
      resArr[depth] = [];

    }

    resArr[depth].unshift(root.val);

    helper(root.left, depth + 1);
    helper(root.right, depth + 1);
  };

  helper(root, depth);
  return resArr.map(item => item[0]);
};
```

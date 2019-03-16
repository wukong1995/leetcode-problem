[question](https://leetcode.com/problems/average-of-levels-in-binary-tree/)

返回树的每一级的平均数

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
var averageOfLevels = function (root) {
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
  // return resArr;
  return resArr.map((item) => (item.reduce((acc, item) => acc + item, 0) / item.length));
};
```
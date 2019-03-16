[question](https://leetcode.com/problems/path-sum-ii/)

比112题更进一步，得到全部路径。

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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  if(root === null) return [];

  const resArr = [];
  const helper = (node, sum, currentArr) => {
    const { val, left, right } = node;
    // if (val > sum) return;

    if (left === null && right === null) {
      if (val === sum) {
        resArr.push([].concat(currentArr, val));
      }
      return;
    }

    const total = sum - val;
    currentArr.push(val);
    if(left) {
      helper(left, total, currentArr);
    }
    if(right) {
      helper(right, total, currentArr);
    }
    currentArr.pop();
  };

  helper(root, sum, []);
  return resArr;
};
```
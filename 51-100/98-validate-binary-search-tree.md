[question](https://leetcode.com/problems/validate-binary-search-tree/)

判断一个树是否是合法的二叉搜索树
我第一次的算法只是简略的对一个树进行了判断，不满足树右边所有的节点都大于根的值，于是采用范围法进行判断。

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
 * @return {boolean}
 */
var isValidBST = function (root) {
  const isValid = (root, min, max) => {
    if (root === null) return true;

    const { val } = root;
    if(val <= min || val >= max) return false;

    return isValid(root.left, min, val) && isValid(root.right, val, max);
  };

  return isValid(root, -Infinity, Infinity);
};

```
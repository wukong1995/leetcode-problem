[question](https://leetcode.com/problems/binary-tree-inorder-traversal/)

给定一个树的前序遍历（根左右），得到树的中序遍历（左根右）

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
var inorderTraversal = function (root) {
  const arr = [];
  if(root === null) return arr;

  const dfs = (root) => {
    if (root.left !== null) {
      dfs(root.left);
    }

    arr.push(root.val);

    if (root.right !== null) {
      dfs(root.right);
    }
  };

  dfs(root);

  return arr;
};
```
上面的方法感觉判断left和right树不如直接判断root，于是将dfs改成下面的这样：
```js
const dfs = (root) => {
  if (root == null) {
    return;
  }

  dfs(root.left);
  arr.push(root.val);
  dfs(root.right);
};
```
效率提高了，占用内存也少了

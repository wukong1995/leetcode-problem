[question](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

根据前序遍历（根左右）和中序遍历（左右根）构建树，采用分治思想去解决。

根据前序遍历的规则可知，数组的第一个元素是根元素，接着是左子树根元素，右子树根元素，
得到根元素在中序中的位置，可分为左子树的所有节点点和右子树的所有节点，
对左子树和右子树分别进行以上操作，直到数组为空。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  const helper = (preorder, inorder) => {
    if(inorder.length === 0) return null;

    const currentValue = preorder.shift();
    const rootIndex = inorder.indexOf(currentValue);

    const root = new TreeNode(currentValue);
    root.left = helper(preorder, inorder.slice(0, rootIndex));
    root.right = helper(preorder, inorder.slice(rootIndex + 1));
    return root;
  }

  return helper(preorder, inorder);
};
```

这里采用数组的形式去进行传参，也可以通过指针的做

```js
var buildTree = function(preorder, inorder) {
  const { length } = preorder;
  if(length === 0) return null;

  const helper = (preStart, preEnd, inStart, inEnd) => {
    const currentValue = preorder[preStart];

    if(preStart === preEnd) {
      return {
        val: currentValue,
        left: null,
        right: null,
      }
    }

    const rootIndex = inorder.indexOf(currentValue);
    const leftNodeEnd = rootIndex - inStart + preStart;

    return {
      val: currentValue,
      left: helper(preStart + 1, leftNodeEnd, inStart, rootIndex - 1),
      right: helper(leftNodeEnd + 1, preEnd, rootIndex + 1, inEnd),
    }
  }

  return helper(0, length - 1, 0, length - 1);
};
```

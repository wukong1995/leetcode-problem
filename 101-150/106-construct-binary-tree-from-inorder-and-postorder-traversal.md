[question](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)

根据后序遍历（左右根）和中序遍历（左右根）构建树，采用分治思想去解决，改动105的代码即可。

根据前序遍历的规则可知，数组的最后一个元素是根元素，接着是右子树根元素，左子树根元素，
得到根元素在中序中的位置，可分为左子树的所有节点点和右子树的所有节点，
对右子树和左子树分别进行上步操作，直到数组为空。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if(postorder.length === 0) return null;

  const helper = (postorder, inorder) => {
    if(inorder.length === 0 || postorder.length === 0) return null;

    const currentValue = postorder.pop();
    const rootIndex = inorder.indexOf(currentValue);

    const root = new TreeNode(currentValue);
    root.right = helper(postorder, inorder.slice(rootIndex + 1));
    root.left = helper(postorder, inorder.slice(0, rootIndex));
    return root;
  }

  return helper(postorder, inorder, 'right');
};
```

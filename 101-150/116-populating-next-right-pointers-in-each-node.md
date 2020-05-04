[question](https://leetcode.com/problems/populating-next-right-pointers-in-each-node)

用next节点将二叉树连起来，先连节点的左右，再连子树

```js
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return null;
    if (root.left) root.left.next = root.right;
    if (root.right) root.right.next = root.next ? root.next.left : null;
    connect(root.left);
    connect(root.right);
    return root;
};
```

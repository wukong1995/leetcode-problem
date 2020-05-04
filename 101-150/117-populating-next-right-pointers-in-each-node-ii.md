[question](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii)

和116题相比，它的树更随意一些，最主要的是找到右边第一个子树节点

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
    let rightFirst = root.next;
    while (rightFirst) {
      if (rightFirst.left) {
        rightFirst = rightFirst.left;
        break;
      }
      if (rightFirst.right) {
        rightFirst = rightFirst.right;
        break;
      }
      rightFirst = rightFirst.next;
    }
    if (root.right) root.right.next = rightFirst;
    if (root.left) root.left.next = root.right ? root.right : rightFirst;
    connect(root.right);
    connect(root.left);
    return root;
};
```

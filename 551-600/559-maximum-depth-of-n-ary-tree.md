[question](https://leetcode.com/problems/maximum-depth-of-n-ary-tree)

求一颗多分叉的输的深度；广度搜索

```js
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0

    let queue = [root]
    let sum = 0

    while(queue.length > 0) {
      let newQueue = []

      for (let i = 0; i < queue.length; i++) {
        newQueue = [...newQueue, ...queue[i].children]
      }
      sum++
      queue = newQueue
    }

    return sum
};
```

[question](https://leetcode.com/problems/most-frequent-subtree-sum)

寻找出现次数最多的子树的和；将值保存在一个object中，寻找最大的value，再取出

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
  const resList = {}

  getSumTree(root, resList)
  const max = Math.max(...Object.values(resList))

  const res = []
  Object.keys(resList).forEach(key => {
   if (resList[key] === max) {
     res.push(+key)
   }
  })
  return res
};

var getSumTree = (root, res) => {
  if (root === null) {
    return 0
  }

  const sum = root.val + getSumTree(root.left, res) + getSumTree(root.right, res)
  res[sum] = res[sum] === undefined ? 1 : res[sum] + 1
  return sum
}
```

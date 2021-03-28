[question](https://leetcode.com/problems/find-duplicate-subtrees)

找一颗树中重复的子树

从449的序列化和反序列化来的，将每个树格式化成字符串，然后判断字符串是否已经只出现过一次

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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {

    const countMap = {}
    const res = []
    helper(root, res, countMap)
  return res
};

var helper = (root, resArr, countMap) => {
  if (root === null) {
    return '#'
  }

  const str = `${root.val},${helper(root.left, resArr, countMap)},${helper(root.right, resArr, countMap)}`
  if (countMap[str]) {
    if (countMap[str] === 1) {
      resArr.push(root)
    }
    countMap[str]++
  } else {
    countMap[str] = 1
  }

  return str
}
```

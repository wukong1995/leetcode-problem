[question](https://leetcode.com/problems/serialize-and-deserialize-bst)

二叉树的序列化和反序列化，最简单的办法是使用JSON，但是数据不够紧凑；数据紧凑的话，使用逗号分隔，但是null不能省略

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (root === null) {
    return '#'
  }

  return [root.val, serialize(root.left), serialize(root.right)].join(',')

};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  // example: 1,2,#,4,#,#,3,5,#,#,#
  const list = data.split(',')
  let i = 0

  const build = () => {
    // console.log('i', i, list[i])
    if (i === list.length) {
      return null
    }

    const val = list[i]
    i++
    if (val === '#') {
      return null
    }

    const left = build()
    const right = build()

    return {val, left, right }
  }

  return build()
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
```

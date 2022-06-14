[question](https://leetcode.com/problems/print-binary-tree)

将二叉树打印出来
1. 先用bfs分组
2. 数组先全部填充为0；再按照规则将数字填入

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
 * @return {string[][]}
 */
var printTree = function(root) {
  if (root.length === 0) {
    return root;
  }

  const rows = splitRoot(root).reverse();
  // console.log('ppp rows', rows)
  const length = rows[0].length;
  const count = length * 2  - 1;

  const res = []
  for (let i = 0; i < rows.length; i++) {
    const strRows = new Array(count).fill('');
    const row = rows[i];

    // 填数字
    let start = Math.pow(2, i) - 1;
    const gap = Math.pow(2, i + 1);
    for (let j = 0; j < row.length; j++) {
      strRows[start] = row[j] || '';
      start += gap;
    }

    res.push(strRows)
  }

  return res.reverse();
};

function splitRoot(root) {
  let currentRow = [root];
  const rows = [currentRow];

  while (currentRow.length) {
    const newRow = [];

    for (let j = 0; j < currentRow.length; j++) {
      const item = currentRow[j];
      newRow.push(item && item.left)
      newRow.push(item && item.right)
    }
     let valid = newRow.filter(Boolean).length > 0;
    if (valid) {
      rows.push(newRow);
        currentRow = newRow;
    } else {
        currentRow = [];
    }
  }

  return rows.map(item => item.map(node => node === null ? null : node.val.toString()))
}
```

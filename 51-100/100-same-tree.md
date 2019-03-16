[question](https://leetcode.com/problems/same-tree/)

判断两棵树是否相同，使用深度优先即可

```js
var isSameTree = function (p, q) {
  return dfs(p, q);
};

var dfs = function(tree1, tree2) {
  if(tree1 === null || tree2 === null) {
    if(tree1 === tree2) {
      return true;
    }

    return false;
  }
  if (tree1.val !== tree2.val) {
    return false;
  }

  return dfs(tree1.left, tree2.left) && dfs(tree1.right, tree2.right);
};
```

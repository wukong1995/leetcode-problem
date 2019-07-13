[question](https://leetcode.com/problems/combination-sum-iii)

找到所有可能的k个数字组合，它们加起来为n，假设只能使用1到9的数字，并且每个组合应该是一组唯一的数字。

思路：这个题目和之前做的一个题目的思路相同，枚举出所有的k个数字的可能，找出符合条件的

```js
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const res = [];
  dfs(k, n, 1, [], res);
  return res;
};

var dfs = (k, n, level, out, res) => {
  if (n < 0) return;

  if (n === 0 && out.length === k) {
    res.push([...out])
    return;
  }

  for (let i = level; i < 10; i++) {
    out.push(i);
    dfs(k, n - i, i + 1, out, res);
    out.pop(i);
  }
}
```
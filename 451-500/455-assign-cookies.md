[question](https://leetcode.com/problems/assign-cookies)

分饼干的问题，先排序，优先大的分

```js
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort((a, b) => b - a)
  s.sort((a, b) => b - a)
  let count = 0

  for (let gi = 0, si = 0; si < s.length, gi < g.length;) {
    if (s[si] >= g[gi]) {
      count++
      gi++
      si++
    } else {
      gi++
    }
  }

  return count
};

```

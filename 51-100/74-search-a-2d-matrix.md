[question](https://leetcode.com/problems/search-a-2d-matrix)

按照以下方式组装
[[1]] => [[1, 2], [1, 3]] => [[1, 2, 3], /* 3后面没数字了，组不成了 */]

```js
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = []
  for (let i = 1; i <= n; i++) {
    let temp = [[i]]

    while (temp.length && temp[0].length < k) {
      let newtemp = []
      for (const item of temp) {
        for (let j = item.at(-1) + 1; j <= n; j++) {

          newtemp.push([...item, j])
        }
      }

      temp = newtemp
    }

    res.push(...temp)

  }
  return res
};
```

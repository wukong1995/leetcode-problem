[question](https://leetcode.com/problems/isomorphic-strings)

给定两个字符串s和t，确定它们是否是同构的。

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const myMap = {}

  for (let i = s.length - 1; i >= 0; i--) {
    const key = s[i]
    const value = t[i]

    if (myMap[key]) {
      if (myMap[key] !== value) {
        return false
      }
    } else {

      if (Object.values(myMap).indexOf(value) >=0) return false
      myMap[key] = value
    }
  }

  return true
};
```
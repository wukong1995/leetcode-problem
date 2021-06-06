[question](https://leetcode.com/problems/sort-characters-by-frequency)

按照字母出现的次数排序，tree => eetr(eert)

```js
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
   const map = {}
   for (let i = s.length - 1; i >= 0; i--) {
     if (map[s[i]] === undefined) {
       map[s[i]] = 0
     }

     map[s[i]]++
   }

  const result = []

   Object.keys(map).forEach(key => {
     result.push([key, map[key]])
   })

  result.sort((a, b) => b[1] - a[1])
  return result.reduce((acc, item) => {
    return acc + item[0].repeat(item[1])
  }, '')

};
```

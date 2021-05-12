[question](https://leetcode.com/problems/string-compression)

压缩字符串: 原地修改数组
["a","a","b","b","c","c","c"] -> ["a","2","b","2","c","3"]
["a"] -> ["a"]
["a","b","b","b","b","b","b","b","b","b","b","b","b"] -> ["a","b","1","2"]

```js
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  if (chars.length === 0) return 0

  let char = chars[0]
  let count = 1

  for (let i = 1; i < chars.length; i++) {
    if (chars[i] === char) {
      count++
    } else {
      if (count > 1) {
        const countStr = count.toString().split('')
        chars.splice(i - count + 1, count - 1, ...countStr)
        i += countStr.length - count + 1
      }

      char = chars[i]
      count = 1
    }
  }

  if (count > 1) {
    let i = chars.length
    const countStr = count.toString().split('')
    chars.splice(i - count + 1, count - 1, ...countStr)
  }

  return chars.length
};
```

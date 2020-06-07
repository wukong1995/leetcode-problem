[question](https://leetcode.com/problems/valid-anagram)

看看两个字符串是不是由相同的字符组成，我隐约记得我之前做过啊。之前直接sort再一个一个的对

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if(s.length !== t.length) return false

  const charMap = {}
  for (let i = s.length - 1; i >= 0; i--) {
      const char = s[i]
      charMap[char] = (charMap[char] || 0) + 1
  }


  for (let i = t.length - 1; i >= 0; i--) {
       // console.log('---', charMap)
      const char = t[i]

      if (charMap[char] === undefined) {
         return false
      }

      if (charMap[char] === 1) {
          delete charMap[char]
      } else {
          charMap[char] -= 1
      }
  }
     console.log(charMap)
    if (Object.keys(charMap).length > 0) return false

 return true
};
```

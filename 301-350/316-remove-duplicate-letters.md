[question](https://leetcode.com/problems/remove-duplicate-letters)

去除字符串中的重复字母，还必须保持原有的顺序

1. 记录每个字母出现的次数， arr
2. 存储每个字母是否在最终结果中出现arrVisit
3. 遍历字符串时，如果字母再最终结果中已经出现则跳过；否则将最终结果中连续大于当前字母，并且次数不等于0的字母去掉，arrVisit置为未标记，再将当前字母加入

```js
var removeDuplicateLetters = function(s) {
    const arr = new Array(26).fill(0)

    for (let i = s.length - 1; i >= 0; i--) {
      arr[s[i].charCodeAt() - 97]++
    }

    const arrVisit =  new Array(26).fill(0)
    const res = []


    for (let i = 0; i < s.length; i++) {
      const charCode = s[i].charCodeAt() - 97
      arr[charCode]--

      // res中已经存在
      if (arrVisit[charCode] === 1) {
        continue
      }

      while (res.length > 0 && res[0] > s[i] && arr[res[0].charCodeAt() - 97] > 0) {
        const headChar = res.shift()
        arrVisit[headChar.charCodeAt() - 97] = 0
      }

      res.unshift(s[i])
      arrVisit[charCode] = 1
    }

    return res.reverse().join('')
};

// removeDuplicateLetters('bcabc')  // "abc"
// removeDuplicateLetters('cbacdcbc') // "acdb"
```

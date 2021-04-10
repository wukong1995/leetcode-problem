[question](https://leetcode.com/problems/longest-palindrome)

求给定字母中组成回文字符串的最大长度

记录每个字母出现的次数，收集2的倍数次，如果有奇数出现，再加上一个1

```js
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const countMap = {}
    for (let i = 0; i < s.length; i++) {
      countMap[s[i]] = (countMap[s[i]] || 0) + 1
    }

  let sum = 0
  const values = Object.values(countMap)

  for (let i =0; i < values.length; i++) {
    sum += parseInt(values[i] / 2) * 2
  }

  for (let i =0; i < values.length; i++) {
   if (values[i] % 2 !== 0) {
     sum++
     break
   }
  }

  return sum
};
```

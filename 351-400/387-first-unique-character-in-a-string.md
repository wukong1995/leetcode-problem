[question](https://leetcode.com/problems/first-unique-character-in-a-string

查找字符串中第一个不重复的字符；
使用长度26位的数组保存每一个字符出现的次数

```js
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const arr = new Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
      // a.charCodeAt(0) = 97
      arr[s[i].charCodeAt(0) - 97]++
    }

    for (let i = 0; i < s.length; i++) {
      if (arr[s[i].charCodeAt(0) - 97] === 1) {
        return i
      }
    }

    return -1
};
```

[question](https://leetcode.com/problems/valid-palindrome/)

检查一个字符串是否是回文串（只需要关注字母和数字）。
先全部小写，再进行对比

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;
  const reg = /[a-z0-9]/;
  s = s.toLowerCase();
  let flag = true;

  while (flag && start < end) {
    if (!reg.test(s[start])) {
      start++;
    } else if (!reg.test(s[end])) {
      end--;
    } else if (s[start] === s[end]) {
      start++;
      end--;
    } else {
      flag = false;
    }
  }

  return flag;
};
```

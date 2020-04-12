[question](https://leetcode.com/problems/longest-palindromic-substring)

求最大回文字符串，使用[马拉车算法](https://zhuanlan.zhihu.com/p/70532099)

```js
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = (str) => {
  const T = preProcess(str);
  const n = T.length;
  const P = [];
  let C = 0;
  let R = 0;

  for (let i = 1; i < n - 1; i++) {
    const i_mirror = 2 * C - i;
    if (R > i) {
      P[i] = Math.min(R - i, P[i_mirror]);// 防止超出 R
    } else {
      P[i] = 0;// 等于 R 的情况
    }

    while (T.charAt(i + 1 + P[i]) == T.charAt(i - 1 - P[i])) {
        P[i]++;
    }

    // 判断是否需要更新 R
    if (i + P[i] > R) {
      C = i;
      R = i + P[i];
    }

  }

  // 找出 P 的最大值
  let maxLen = 0;
  let centerIndex = 0;
  for (let i = 1; i < n - 1; i++) {
    if (P[i] > maxLen) {
      maxLen = P[i];
      centerIndex = i;
    }
  }
  const start = (centerIndex - maxLen) / 2;
  return str.substring(start, start + maxLen);
}


var preProcess = (str) => {
  const n = str.length;
  if (n == 0) {
      return "^$";
  }

  let ret = "^";
  for (let i = 0; i < n; i++) {
    ret += "#" + str.charAt(i);
  }

  ret += "#$";
  return ret;
}
```

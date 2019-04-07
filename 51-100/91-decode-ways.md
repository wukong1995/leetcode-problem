[question](https://leetcode.com/problems/decode-ways/)

从a -> 1到z -> 26，查看一个数字有多少种字母组合
仔细想了想，这不是“走台阶”吗？只不过加了“障碍”，例如对于“28”你只能走一步而不能走两步，本来是用递归写的，但是想想中间有0不好弄啊，于是使用数组进行求解。

不符合规则的条件：0不能在个位，两个数字在10-26的之间

```js
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const { length } = s;
  if (length === 0 || s[0] === '0') return 0;

  const arr = [1];
  let i = 1;

  while(i <= length) {
    arr[i] = s[i - 1] === '0' ? 0 : arr[i - 1];

    if (i > 1 && (s[i - 2] == '1' || (s[i - 2] == '2' && s[i - 1] <= 6))) {
      arr[i] += arr[i - 2];
    }

    i++;
  }

  return arr[length];
};
```
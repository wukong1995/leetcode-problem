[question](https://leetcode.com/problems/remove-k-digits)

从一个数字组成的字符串中去除k个字符，取最小数


使用stack存储字符，每当字符要入栈时，先去除栈顶比它大的数字
```js
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  if (num.length <= k) {
    return '0'
  }

  const stack = []

  for (let i  = 0; i < num.length; i++) {
    let top = stack[stack.length - 1]
    const current = num[i]

    while(top > current && k) {
      stack.pop()
      k--
      top = stack[stack.length - 1]
    }

    stack.push(current)
   }

  while(k) {
    stack.pop()
    k--
  }

  let zeroCount = 0
  for (let i = 0; i< stack.length; i++) {
    if (stack[i] === '0') {
      zeroCount++
    } else {
      break
    }
  }

  const res = stack.slice(zeroCount)
  return res.length === 0 ? '0' : res.join('')
};
```

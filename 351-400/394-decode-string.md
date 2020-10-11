[question](https://leetcode.com/problems/decode-string)

Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"

Example 3:

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"

Example 4:

Input: s = "abc3[cd]xyz"
Output: "abccdcdcdxyz"

根据上面的例子，可以看出是对字节串进行解码，这个题目一开始想的就是栈，先进先出，但是少处理了一种情况就是当number字符连续出现的时候，把它们处理成一个数字

```js
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let stack = []

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (char === ']') {
      // stack pop
      let subStr = ''

      while(true) {
        const top = stack.pop()

        if (top !== '[') {
          subStr = top + subStr
        } else {
          stack.push(subStr.repeat(stack.pop()))
          break;
        }
      }
    } else {
      // number
      if (isNumber(char)) {
        let numberNext = 1

        while(true) {
          const next = s[i + numberNext]

          if (isNumber(next)) {
            numberNext++
          } else {
            stack.push(Number(s.slice(i, i + numberNext)))
            i += numberNext - 1
            break;
          }
        }

      } else {
        stack.push(char)
      }
    }
  }

  return stack.join('')
};

function isNumber(char) {
  return !isNaN(Number(char))
}
```

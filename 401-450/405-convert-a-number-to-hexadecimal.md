[question](https://leetcode.com/problems/convert-a-number-to-hexadecimal)

将数字转换成16进制
注意：负数要补位

```js
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  if (num === 0) return '0';

    const list = [0, 1, 2, 3, 4,5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
    let str = ''
    const isNavtive = num < 0
    num = isNavtive ? (num + 1) * -1 : num

    while(num > 0) {
     let r = num % 16
      if (isNavtive) {
        r = 15 -r
      }

      str = list[r] + str
     num = parseInt(num/16)
    }

  if(isNavtive && str.length < 8) {
    str = new Array(8 - str.length).fill('f').join('') + str
  }

  return str
};
```

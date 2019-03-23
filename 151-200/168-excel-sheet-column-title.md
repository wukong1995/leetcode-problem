[question](https://leetcode.com/problems/excel-sheet-column-title/)

只需要处理特殊情况（整除26）即可.

```js
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  return helper(n, '');
};

var translate = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var helper = (num, str) => {
  if(num === 0) return str;

  let divisor = parseInt(num / 26);
  const remainder = num % 26;
  if (remainder === 0) {
    divisor--;
    str = 'Z' + str;
  }

  return helper(divisor, translate[num % 26] + str);
};
```
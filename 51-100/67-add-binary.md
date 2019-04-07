[question](https://leetcode.com/problems/add-binary/)

计算两个二进制数的和，我记得之前做过类似的题目，但是这次没有采取和上次一样的做法，我记得上次的终止条件是字符串为空，这次干脆填0进行计算。

```js
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const maxLength = Math.max(a.length, b.length);
  let currentIndex = 0;
  let carry = 0;
  const arr = [];
  a = a.split('').reverse();
  b = b.split('').reverse();

  while(currentIndex < maxLength) {
    const sum = carry + (parseInt(a[currentIndex]) || 0) + (parseInt(b[currentIndex]) || 0);

    arr.unshift(sum % 2);
    carry = parseInt(sum / 2);
    currentIndex++;
  }

  if (carry === 1) {
    arr.unshift(1);
  }

  return arr.join('')
};
```
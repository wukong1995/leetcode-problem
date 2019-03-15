[question](https://leetcode.com/problems/integer-to-roman/submissions/)

和13题是反着的，这次是把数字转换成字符串。

在translate函数中我是真的不想使用if判断(写起来太糟糕了)，但是js中的forEach没有break...

```js
const translateNum = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M',
};

const numArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

const translate = (num, s = '') => {
  if (num === 0) return s;

  let isFind = false;
  numArr.forEach(item => {
    if (!isFind && num >= item) {
      num -= item;
      s += translateNum[item];
      isFind = true;
    }
  });

  return translate(num, s);
};

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  return translate(num);
};
```
[question](https://leetcode.com/problems/roman-to-integer/)


匹配字符串吧。。。
```js
const translateNum = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
  'CD': 400,
  'CM': 900,
  'XL': 40,
  'XC': 90,
  'IV': 4,
  'IX': 9,
};

const twoReg = /^(CD|CM|XL|XC|IV|IX)/;
const oneReg = /^(I|V|X|L|C|D|M)/;


const translate = (s, num = 0) => {
  if (s === '') return num;

  if (twoReg.test(s)) {
    num += translateNum[s.match(twoReg)[0]];
    s = s.slice(2);
  } else if (oneReg.test(s)) {
    num += translateNum[s.match(oneReg)[0]];
    s = s.slice(1);
  }

  return translate(s, num);
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  return translate(s);
};
```

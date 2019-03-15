[question](https://leetcode.com/problems/multiply-strings/)

两个字符串转换成数字后相乘的结果转换成字符串
这个问题涉及到大数的计算
js中123456789 * 987654321等于"121932631112635260"=。=，正确的结果是"121932631112635269"，还以为是js语言的锅，查了资料是大数的问题。

下面是“wrong answer”的代码
```js
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  return (convertNum(num1) * convertNum(num2)).toString();
};

var convertNum = (str) => {
  const digits = str.split('');
  let sum = 0;

  for(let i = 0; i < digits.length; i++) {
    sum = sum * 10 + parseInt(digits[i], 10);
  }

  return sum;
};
```

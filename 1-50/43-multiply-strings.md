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

解题：只能一位一位的计算，有大于9的情况，必须使用取余的方式存储

```js
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';

  const m = num1.length;
  const n = num2.length;
  const vals = new Array(m + n).fill(0);


  for (let i = m - 1; i >= 0; --i) {
    for (let j = n - 1; j >= 0; --j) {
      const mul = (+num1[i]) * (+num2[j]);
      const p1 = i + j;
      const p2 = i + j + 1;
      const sum = mul + vals[p2];
      vals[p1] += Math.floor(sum / 10);
      vals[p2] = sum % 10;
    }
  }


  return vals.join('').replace(/^0+(?!$)/, '')
};
```


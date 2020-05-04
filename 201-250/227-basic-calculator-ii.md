[question](https://leetcode.com/problems/basic-calculator-ii)

先计算乘法和除法，减法按照加法算

```js
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let stack = [];
  let num = '';
  let sign = null

  for(let i = 0; i <= s.length; i++){
    const curr = s[i];
    if(curr === ' ') continue;
    if(!isNaN(curr)) num+=curr;
    if(isNaN(curr)){
      num = Number(num)
      switch(sign){
        case '+':
        case null:
          stack.push(num)
          break;
        case '-':
          stack.push(-num)
          break;
        case '*':
          stack.push(stack.pop()*num)
          break;
        case '/':
          stack.push(parseInt(stack.pop()/num, 10))
          break;
      }
      sign = curr;
      num = '';
    }
  }
  return stack.reduce((a,b)=> a+b,0)
};

```

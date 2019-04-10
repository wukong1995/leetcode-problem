[question](https://leetcode.com/problems/evaluate-reverse-polish-notation/)

题目叫做这个“Evaluate Reverse Polish Notation（计算逆波兰表达式）”，计算这样的值“["2", "1", "+", "3", "*"]”。看见题目的第一眼，不知道题目的叫法，但是这样的问题，在学习编译原理的时候学到过，很是熟悉。


解题的步骤是：创建一个栈，如果遇到数字就进栈，遇到计算符号，取出两个数字，将计算和再进栈。最后返回栈顶元素-第一个元素即可。

```js
var evalRPN = function(tokens) {
  const stack = [];

  tokens.forEach(item => {
    if(/\d+/.test(item)) {
      stack.push(parseInt(item));
    } else {
      const secondNum = stack.pop();
      const firstNum = stack.pop();

      if (item === '-') {
        stack.push(firstNum - secondNum);
      } else if (item === '+') {
        stack.push(firstNum + secondNum);
      } else if (item === '/') {
        stack.push(parseInt(firstNum / secondNum));
      } else if (item === '*') {
        stack.push(firstNum * secondNum);
      }
    }
  });

  return stack[0];
}
```

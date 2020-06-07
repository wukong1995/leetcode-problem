[question](https://leetcode.com/problems/different-ways-to-add-parentheses)

给你一串字符串，你给他们加括号，使其得到不同的值，最终需要值的列表

Example 1:
```
Input: "2-1-1"
Output: [0, 2]
Explanation:
((2-1)-1) = 0
(2-(1-1)) = 2
```

Example 2:
```
Input: "2*3-4*5"
Output: [-34, -14, -10, -10, 10]
Explanation:
(2*(3-(4*5))) = -34
((2*3)-(4*5)) = -14
((2*(3-4))*5) = -10
(2*((3-4)*5)) = -10
(((2*3)-4)*5) = 10
```

看上去很懵，找了讲解来看：这个题目采用分治的策略，将整个输入当作（）符号（）来看，这样的话，将左右的字符串当作黑盒扔给函数处理

```js
/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
    const res = []
    for (let i = 0; i< input.length; i++) {
      const char = input[i]
      if (char === '-' || char === '+' || char === '*') {
          const left = diffWaysToCompute(input.slice(0, i))
          const right = diffWaysToCompute(input.slice(i+1))
          for (let j = 0; j < left.length; j++) {
              for (let k = 0; k < right.length; k++) {
                  if (char === '-') res.push(left[j] - right[k])
                  if (char === '+') res.push(left[j] + right[k])
                  if (char === '*') res.push(left[j] * right[k])
              }
          }
      }
    }

    if (res.length === 0) res.push(+input)
    return res
};
```

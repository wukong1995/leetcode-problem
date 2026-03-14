[question](https://leetcode.com/problems/daily-temperatures)

用栈保存当前低的天气，遇到高的天气就弹出

```js
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const res = new Array(temperatures.length).fill(0)
    let stack = [0]
    let i = 1
    while(i < temperatures.length) {
        let prev = stack.at(-1)
        while (temperatures[prev] < temperatures[i]) {
            res[prev] = i - prev
            stack.pop();
            prev = stack.at(-1)
        }

        stack.push(i)
        i++
    }

    return res

};
```

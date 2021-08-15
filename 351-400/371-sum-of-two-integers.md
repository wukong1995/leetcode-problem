[question](https://leetcode.com/problems/sum-of-two-integers)

不用加减号处理加法

1. 使用&先拿到有共同1的位数
2. 使用^完成位数相加(除了相同位都是1的)
3. 再将第一步中的1假进去

```js
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    if (a === 0 || b === 0) {
        return a || b;
    }

    while(b !== 0) {
        const c = a & b;
        a = a ^ b;
        b = c << 1;
    }

    return a;
};
```

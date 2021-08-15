[question](https://leetcode.com/problems/super-pow/)

给定a, b, 求Math.power(a, b) % 1337，处理方式是缩小计算量，折半再折半，

```js
/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
    let res = 1;
    for (let i = 0; i < b.length; i++) {
        res = pow(res, 10) * pow(a, b[i]) % 1337;
    }

    return res;
};

function pow(x, n) {
    if (n === 0) {
        return 1;
    }

    if (n === 1) {
        return x % 1337;
    }

    const middle = parseInt(n / 2, 10);
    return pow(x, middle) * pow(x, n - middle) % 1337;
}
```

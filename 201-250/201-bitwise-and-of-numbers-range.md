[question](https://leetcode.com/problems/bitwise-and-of-numbers-range)

解决办法参考：https://www.cnblogs.com/grandyang/p/4431646.html

```js
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    let i = 0
    while(m !== n) {
        m >>= 1
        n >>= 1
        i++
    }

    return m<<i
};
```

[question](https://leetcode.com/problems/reverse-bits)

得到给定的32位无符号整数的反向位。

```js
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let res = 0
    for (i = 0; i< 32; i++) {
        // 从右向左一位位的取出来
        // 如果取出来的是1，将结果 res 左移一位并且加上1
        // 如果取出来的是0，将结果 res 左移一位
        res = (res << 1) | (n & 1)
        n >>= 1
    }
    // js默认有符号位的，将转换成无符号的
    res = res >>> 0
    return res
};
```

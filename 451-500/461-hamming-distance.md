[question](https://leetcode.com/problems/hamming-distance)

汉明距离：异或后，求1的个数，可以使用移位的方式，每次右移一位，检查最低位是否为1

```js
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let s = x ^ y
    let res = 0

    while(s > 0) {
      res = s & 1
      s = s>>1
    }

    return res
};
```

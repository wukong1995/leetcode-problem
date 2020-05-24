[question](https://leetcode.com/problems/ugly-number)

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
1 is typically treated as an ugly number.

解决：一个一个除

```js
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (num < 1)  return false
    if (num === 1) return true

    let res = true

    while (res && num > 1) {
        if (num % 2 === 0) {
            num = num / 2
        } else if (num % 3 === 0) {
            num = num / 3
        } else if (num % 5 === 0) {
            num = num / 5
        } else {
            res = false
        }
    }

    return res
};
```

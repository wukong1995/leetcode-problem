[question](https://leetcode.com/problems/guess-number-higher-or-lower)

猜数字，二分法解决

```js
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return              -1 if num is lower than the guess number
 *                       1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left = 1
    let right = n

    while(left <= right) {
        const middle = Math.floor((right + left)/2)
        const res =  guess(middle)

        if (res === -1) {
            right = middle - 1
        } else if (res === 1) {
            left = middle + 1
        } else {
            return middle
        }

      }
    return left
};
```

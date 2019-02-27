[question](https://leetcode.com/problems/palindrome-number/)

```js
/**
 * @param {number} num
 * @return {boolean}
 */
var isPalindrome = function(num) {
    const numStr = num.toString();
    return numStr === numStr.split("").reverse().join("");
};
```

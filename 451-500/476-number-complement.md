[question](https://leetcode.com/problems/number-complement)

求一个数字的补数：那1和数字的每一位进行异或

```js
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let res = num
    let bit = 1

    while(num){
        res = res ^ bit;
        bit = bit << 1;
        num = num >> 1;
    }

    return res
};
```

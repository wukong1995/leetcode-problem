[question](https://leetcode.com/problems/power-of-four)

判断是不是4的power，猜这最简单的方法是用位运算，我猜的>>2, &4 都失败了，就去看了讨论区

转：
1. 首先看到这个题目能想到的是如何判断一个数是不是2的几次幂。
2. 先分析2的几次幂的问题，通常会采用位操作的方式：(num & (num -1)) == 0
3. 4的次方数的最高位的1都是奇数位，那么我们只需与上一个数 (0x55555555) <==> 1010101010101010101010101010101，如果得到的数还是其本身，则可以肯定其为4的次方数：

```js
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    return (num > 0) && ((num & (num-1)) == 0) && ((num & 0x55555555) == num)
};
```

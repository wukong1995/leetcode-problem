[question](https://leetcode.com/problems/factorial-trailing-zeroes/)

求一个数的阶乘尾部有多少个零？
额，for的话一定会runtime error。于是这时候我想只有什么时候会有零呢，10的倍数和 2 * 5，本来想算10的倍数有几个，再加上2和5的个数的最小值，但是对于30怎么算都不对，我算的是6，但是结果是7。也没想到错在哪里？

看了别人的解题思路，发现最后真正计算的是除5得和，因为2的个数远远大于5的个数。我上面方法的错误是25有两个5，我仅仅计算了一个5

```js
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let count = 0;

  while(n > 0) {
    count += parseInt(n / 5);
    n = parseInt(n / 5);
  }

  return count;
};

```

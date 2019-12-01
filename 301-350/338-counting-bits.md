[question](https://leetcode.com/problems/counting-bits)

定一个非负整数num。对于0≤i≤num范围内的每个数字i，以二进制表示形式计算1的数目，并将它们作为数组返回。

这个题目使用位运算比较简单

每执行一次x = x&(x-1)，会将x用二进制表示时最右边的一个1变为0

```js
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
 const length = num + 1
 const bitArr = new Array(length)
 bitArr.fill(0)

 for (let i = 1; i < length; i++) {
    bitArr[i] =  bitArr[i & (i - 1)] + 1
 }
 return bitArr
};
```

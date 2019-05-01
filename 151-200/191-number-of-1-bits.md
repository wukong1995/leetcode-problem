[question](https://leetcode.com/problems/number-of-1-bits/)

判断二进制字符串中有多少个1，第一想到的数组forEach一遍，但是想了想，这个解决方案对我没有任何意义，去讨论区看一下，有一个好的解题答案是使用位运算，哦，位运算真是一个神奇的东西。

[链接在这](https://leetcode.com/problems/number-of-1-bits/discuss/55099/Simple-Java-Solution-Bit-Shifting)

```js
var hammingWeight = function(n) {
  let ones = 0;
  while(n!=0) {
    ones = ones + (n & 1);
    n = n>>>1;
  }
  return ones;
};
```

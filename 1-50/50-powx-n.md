[question](https://leetcode.com/problems/powx-n/)

这个是实现pow功能，但是因为js的浮点数计算的问题，java也有这样的问题，于是尝试着使用python去解决（噗，python中也有这个问题），但是超时了=.=

```py
class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n == 0:
          return 1;
        if n == 1:
          return x

        if n < 0:
          n = -n
          x = 1 / x

        self.sum = x

        for i in range(1,n):
          self.sum *= x

        return self.sum;

```

需要去找好的办法去解决。

找到了好的解决办法，[思路在这](https://wukong1995.github.io/2019/03/31/leetcode-50-problem/)

```js
var myPow = function(x, n) {
  const pow = (x, n) => {
    let result = 1;
    let sum = x;

    while(n > 0) {
      if (n % 2 === 1) {
        result *= sum;
      }

      sum *= sum;
      n = parseInt(n / 2);
    }

    return result;
  }

  if(n < 0) return 1 / pow(x, -n);

  return pow(x, n);
};
```

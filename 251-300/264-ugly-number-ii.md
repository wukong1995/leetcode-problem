[question](https://leetcode.com/problems/ugly-number-ii)

找到第n个符合条件的数

这个升级版的题目让我想起了素数，判断一个数是不是ugly-number，可以用263的函数，但是如何减少操作。所有的数字都是从2 3 5衍生出来的，可以用这三个数字创造出来

```js
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    const res = [1]
    let i2 = 0
    let i3 = 0
    let i5 = 0

    while (res.length < n) {
      const m2 = res[i2] * 2
      const m3 = res[i3] * 3
      const m5 = res[i5] * 5
      const mMin = Math.min(m2, Math.min(m3, m5))
      if (mMin === m2) ++i2
      if (mMin === m3) ++i3
      if (mMin === m5) ++i5

      res.push(mMin)
    }


    return res.slice(-1)
};
```

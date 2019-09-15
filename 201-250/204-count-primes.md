[question](https://leetcode.com/problems/count-primes)

求一定范围内素数的个数

```js
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let count = 0

  const marks = new Array(n).fill(false)

  for (let i = 2; i < n; i++) {
    if (!marks[i]) {
      count++

      for (let j = 2; j*i < n; j++) {
        marks[i*j] = true
      }
    }
  }

  return count
};
```
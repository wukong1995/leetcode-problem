[question](https://leetcode.com/problems/fibonacci-number/)

fibonacci，爬楼梯的本质，根据公式来即可。

```js
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N < 2) return N;

  const arr = [0, 1];

  let i = 2;
  while(i <= N) {
    arr.push(arr[i -1] + arr[i - 2]);
    i++;
  }

  return arr[N];
};
```
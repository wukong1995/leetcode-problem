[question](https://leetcode.com/problems/peak-index-in-a-mountain-array)

求一个山脉数组的峰值，数组满足条件是：A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]，所以只要找出当前元素大于后一个元素即可。

```js
/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  const last = A.length - 1;
  let i = 1;

  while(i < last) {
    if (A[i] > A[i + 1]) {
      return i;
    }
    i++;
  }
};
```

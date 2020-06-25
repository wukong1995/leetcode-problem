[question](https://leetcode.com/problems/kth-largest-element-in-an-array)

找数组中第k大的树， 可以使用快速排序的特性

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  return quickSort(nums, k, 0)
};


var quickSort = function(arr, k) {
  var pivot = arr[0];
  var left = [];
  var right = [];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  if (k === right.length + 1) {
    return pivot
  }

  if (k > right.length + 1) {
    return quickSort(left, k - right.length - 1)
  } else {
    return quickSort(right, k)
  }
};
```

[question](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)

在第一题的基础上加上数组是有序的，题目大致是使用最快的方法求数字在数组中的位置，这里使用二分法进行求值。

```js
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const { length } = numbers;

  for(let i = 0; i < length; i++) {
    const remainderIndex = binarySearch(numbers, target - numbers[i], i + 1, length);
    if (remainderIndex > -1) {
      return [i + 1, remainderIndex];
    }
  }

  return [];
};

var binarySearch = (arr, target, left, right) => {
  if (left >= right) {
    return -1;
  }

  const middle = left + parseInt((right - left) / 2);
  if (arr[middle] === target) {
    return middle + 1;
  }

  if (arr[middle] < target) {
    return binarySearch(arr, target, middle + 1, right);
  }

  return binarySearch(arr, target, left, middle);
};
```
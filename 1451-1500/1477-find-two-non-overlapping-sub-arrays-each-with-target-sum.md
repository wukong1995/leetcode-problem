[question](https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/)


在一个数组中找出两个和为target的不重叠的连续子数组的最小长度


利用双指针构造一个滑动窗口，动态规划数组保存0到i之间长度的最小值

```js
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function(arr, target) {
  let targetArr = new Array(arr.length).fill(0);
  targetArr[0] = arr.length + 1;
  let left = 0;
  let sum = 0;
  let minSumOfLens = Number.MAX_VALUE;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    while(sum > target) {
      sum -= arr[left++];
    }

    if (sum == target) {
        const count = i - left + 1;
        minSumOfLens = Math.min(minSumOfLens, count + targetArr[left]);
        targetArr[i + 1] = Math.min(targetArr[i], count);
    }
    else {
        targetArr[i + 1] = targetArr[i];
    }
  }

  return minSumOfLens > arr.length ? -1 : minSumOfLens;
};

```

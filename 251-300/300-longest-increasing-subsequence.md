[question](https://leetcode.com/problems/longest-increasing-subsequence)

查找一个序列中，最大升序的串

1. 如果用递归的话有很多重复操作，可以用一个数组保存当前节点的最长串的长度，当前节点的长度等于它前面元素的max + 1, O(n*n)的时间复杂度
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
   if (nums.length === 0) return 0

  const arr = new Array(nums.length).fill(1)

  for (let i = 1; i< nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        arr[i] = Math.max(arr[i], arr[j] + 1)
      }
    }
  }

  return arr.reduce((acc, item) => acc > item ? acc : item, 1)
};
```

2. 还有一种O(nlgn) 的时间复杂度的思路，是利用二分求解：参考：https://blog.csdn.net/happyaaaaaaaaaaa/article/details/51568462

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
   if (nums.length === 0) return 0

  const arr = new Array(nums.length).fill(-Infinity)
  let maxLength = 0

  for (let i = 0; i< nums.length; i++) {
    const length = search(nums[i], arr, maxLength)
    maxLength = Math.max(maxLength, length)
    arr[length] = nums[i]
  }

 return maxLength
};

var search = (num, arr, maxLength) => {
  let left = 0;
  let right = maxLength;

  while(left <= right) {
    const middle = left + Math.floor((right - left) / 2)

    if (arr[middle] < num) left = middle + 1
    else right = middle - 1
  }

  return left
}
```

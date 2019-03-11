[question](https://leetcode.com/problems/merge-sorted-array/)

合并两个有序的数组，题目要求将nums2合并到nums1上，这样以nums1为基准，拿着nums2上的数去比较即可

```js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let index1 = 0;
  let index2 = 0;
  while(n > 0) {
    if (nums2[index2] >= nums1[index1] && index1 < m) {
      index1++;
    } else {
      nums1.pop();
      nums1.splice(index1, 0, nums2[index2]);
      index2++;
      n--;
      m++;
    }
  }

  return nums1;
};
```

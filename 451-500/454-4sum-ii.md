[question](https://leetcode.com/problems/4sum-ii)

给定四个相同长度的数组，求每取一个数的和为0，如果四次循环，一定会超时。采用空间换时间，可以降低到n*n

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    const map = {}
    const {length} = nums1

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        const sum = nums1[i] + nums2[j]
        if (map[sum] === undefined) {
          map[sum] = 0
        }

        map[sum]++
      }
    }

    let res = 0
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
         const sum = nums3[i] + nums4[j]

         if (map[-sum]) {
           res += map[-sum]
         }
      }
    }

    return res
};
```

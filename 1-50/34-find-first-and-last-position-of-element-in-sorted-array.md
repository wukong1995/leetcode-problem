
[question](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array//)

找一个数字在数组中的index和lastIndex：循环数组得到最大的index和最小的index返回，二分查找

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
   let left = 0;
   let right = nums.length - 1

   while(left <= right) {
    const mid = Math.floor((left + right) / 2)
    const cur = nums[mid]

    if (cur > target) {
        right = mid - 1
    } else if (cur < target) {
        left = mid + 1
    } else {
        let start = mid
        let end = mid
        while(nums[start] === target) {
            start--
        }
        while(nums[end] === target) {
            end++
        }
        return [start + 1, end - 1]
    }
   }
   return [-1, -1]
};
```

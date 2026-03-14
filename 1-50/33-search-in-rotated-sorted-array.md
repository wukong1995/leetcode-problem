[question](https://leetcode.com/problems/search-in-rotated-sorted-array/)

通过中间的值，判断当前区间是有序还是无序，以此重复

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    while(left <= right) {
        const mid = Math.floor((left + right) / 2)
        const cur = nums[mid]
        if (cur === target) {
            return mid
        }

        if (nums[left] <= cur) {
            // 有序
            if (target >= nums[left] && target < cur) {
                right = mid -1
            } else {
                // 无序
                left = mid + 1
            }
        } else {
            // 有序
            if (target <= nums[right] && target > cur) {
                left = mid +1
            } else {
                // 无序
                right = mid -1
            }

        }
    }
    return -1
};
```

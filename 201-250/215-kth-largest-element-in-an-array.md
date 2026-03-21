[question](https://leetcode.com/problems/kth-largest-element-in-an-array)

寻找数组中第K大的元素; 二分查找

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    if(nums.length === 1) {
        return nums[0]
    }

    const mid = nums[0]
    const left = []
    const right = []
    let middle = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > mid) {
            right.push(nums[i])
        } else if (nums[i] < mid) {
            left.push(nums[i])
        } else {
            middle++
        }
    }

    if (k <= right.length) {
        return findKthLargest(right, k )
    } else if (k > right.length + middle) {
        return findKthLargest(left, k - right.length - middle)
    }

    return mid
};
```

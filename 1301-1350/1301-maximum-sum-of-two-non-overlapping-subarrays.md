[question](https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/submissions/)


本来想是想先求出两个和数组，再拿和数组中的元素相加求的最大值

但是高赞的答案太太太奇妙了，利用累加后的值相减求出连续数字的和；对于两个length有两种情况，firstLen在前或者在后，依次循环中分别取得两种结果的和；对于第i个数字，求出i - secondLen前最大的数字，然后加上当前i - secondLen的数组和，就是i中的最大和；妙也！


```js
/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function(nums, firstLen, secondLen) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1]
    }

    let res = nums[firstLen + secondLen - 1];
    let fMax = nums[firstLen - 1];
    let sMax = nums[secondLen - 1];

    for (let i = firstLen + secondLen; i < nums.length; i++) {
        fMax = Math.max(fMax, nums[i - secondLen] - nums[i - firstLen - secondLen])
        sMax = Math.max(sMax, nums[i - firstLen] - nums[i - firstLen - secondLen])
        res = Math.max(res, fMax + nums[i] - nums[i - secondLen], sMax + nums[i] - nums[i - firstLen])
    }

    return res
};
```

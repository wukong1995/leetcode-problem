[question](https://leetcode.com/problems/contains-duplicate-ii)

在一定范围内是否有重复的树

方法1: 一个一个比呗，但是超时了
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    for (let i = nums.length - 1; i>=0; i--) {
        const current = nums[i]

        for (let j = i - 1; j >= i - k; j--) {
            if (current === nums[j]) return true
        }
    }

    return false
};
```

方法2: 道理是这么个道理，我要借助map大法了
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const m = new Map()
    for (let i = nums.length - 1; i >= 0; i--) {
       const current = nums[i]
       if (m.has(current)) {
           const index = m.get(current)
           if (index - i <= k) return true
       }

       m.set(current, i)
     }

    return false
};
```

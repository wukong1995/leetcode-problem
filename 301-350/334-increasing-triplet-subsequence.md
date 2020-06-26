[question](https://leetcode.com/problems/increasing-triplet-subsequence)

求一个数组中是否能找到三个递增的序列

保存两个max1， max2， max>max1, 当前数字和max1 max2相比，小于就更新，都大于说明存在

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let max1 = Infinity
    let max2 = Infinity

    for(const num of nums) {
      if (max1 >= num) {
        max1 = num
      } else if (max2 >= num) {
        max2 = num
      } else {
        return true
      }
    }

  return false
};
```

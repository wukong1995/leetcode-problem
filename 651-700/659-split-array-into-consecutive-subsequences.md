[question](https://leetcode.com/problems/split-array-into-consecutive-subsequences)

从1296过来的，但是两个题不一样啊，有被带偏了

找到了两个方法，
1. 将当前数字放在长度最小的连续队列里面，这个是不是属于贪心多一点
2. 记录数字的需要次数，如果对不上，就报错；这个写起来简单些

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
  const countMap = []
  const needMap = []
  for (const num of nums) {
    countMap[num] = (countMap[num] || 0) + 1
  }

  for (const num of nums) {
    if (countMap[num] === 0) {
      continue
    }

    if (needMap[num] > 0) {
      needMap[num]--
      needMap[num+1] = (needMap[num+1] || 0) + 1
    } else if (countMap[num + 1] > 0 && countMap[num + 2] > 0) {
      countMap[num+1]--
      countMap[num+2]--
      needMap[num+3] = (needMap[num+3] || 0) + 1
    } else {
      return false
    }
    countMap[num]--
  }

  return true
};
```

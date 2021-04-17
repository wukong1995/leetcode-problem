[question](https://leetcode.com/problems/arithmetic-slices)

求符合条件的连续子数组：长度至少为3，相邻元素的差值一样


思路：求符合条件的连续子数组的长度，然后将其拆分。例如长度为4包含一个4两个3的数组，长度为5包含一个5两个4三个3的数组。

下面代码可以将start和end用一个range代替
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
  if (nums.length < 3) {
    return 0
  }

  let start = 0
  let end = 0
  let sum = 0
  let distance = undefined

  for (let i = 1; i < nums.length; i++) {
    const newDistance = nums[i] - nums[i - 1]

    if(distance === undefined || newDistance === distance) {
      distance = nums[i] - nums[i - 1]
      end++
    } else {
      if (end - start >= 2) {
        range = end - start
        sum += range * (range - 1) / 2
      }

      start = i - 1
      end = i
      distance = newDistance
    }
  }

  if (end - start >= 2) {
    range = end - start
    sum += range * (range - 1) / 2
  }

  return sum
};
```

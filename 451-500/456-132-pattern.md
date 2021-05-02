[question](https://leetcode.com/problems/132-pattern)

求数组中有没有132这样的组合：[1, 2, 3, 4] => false，[3,1,4,2] => true

1. 想将数组中每个元素左边最小的数保存下来
2. 从右向左遍历数组，假如遇到【当前数组比栈顶的数字大】就将数字从栈中pop出来，将最后一个pop出来的数组和第一步中求出的最小数组比，假如满足当前数字大于其对应的左边最小数，则满足132的条件

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    const minArr = [nums[0]]
    const stack = []

    for (let i = 1; i < nums.length; i++) {
      minArr[i] = Math.min(minArr[i - 1], nums[i])
    }

   for (let i = nums.length - 1; i >= 0; i--) {
     let min = -Infinity
     while(stack.length > 0 && stack[stack.length - 1] <= nums[i]) {
       min = stack.pop()
     }

     if (minArr[i] < min) {
       return true
     }

     stack.push(nums[i])
   }

  return false
};
```

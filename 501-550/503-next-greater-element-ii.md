[question](https://leetcode.com/problems/next-greater-element-ii)

求循环数组中比当前数字下一个大的数，使用的一个叫“单调栈”的方式

那当前栈首和当前数字比较，小就出栈，最后再将当前数字放入栈中，为了方便起见，堆栈中保存数字的index，出栈的时候更新对应index的下一个大的数字

还有一个技巧，由于数组是循环的，再找下一个大的数字，会最多循环查看数字两遍，这里不用复制一份，用%的方式取当前实际的数字
```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const { length } = nums
    const stack = []
    const result = new Array(length).fill(-1)
    for (let i = 0; i < length * 2 -1; i++) {
        const target = nums[i % length]
        while (stack.length > 0 && nums[stack[0]] < target) {
           result[stack[0]] = target
           stack.shift()
        }

        stack.unshift(i % length)
    }
     // console.log(result)
    return result
};
```

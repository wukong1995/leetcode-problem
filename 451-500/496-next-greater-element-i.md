[question](https://leetcode.com/problems/next-greater-element-i)

做完503的升级版，这个小菜一碟

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const res = new Array(nums2.length).fill(-1)
    const stack = []
    for (let i = 0; i < nums2.length; i++) {
       while(stack.length > 0 && nums2[stack[0]] < nums2[i]) {
           res[stack[0]] = nums2[i]
           stack.shift()
       }

        stack.unshift(i)
    }

    const res1 = new Array(nums1.length)
    for (let i = nums1.length - 1; i >= 0; i--) {
        const index = nums2.indexOf(nums1[i])
        res1[i] = res[index]
    }
    return res1
};
```

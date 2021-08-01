[question](https://leetcode.com/problems/next-greater-element-iii)

本来以为是和503差不多的题目，但是遇到230241的时候被卡住了，查了资料发现思路是这样的， 以230241为🌰：
1. 从右向左找到第一个非升序的数字：2， index是4
2. 找到2右侧第一个比它大的数字，然后交换变成了230421
3. 将index为4后面的数字倒序，得到230412
4. 最后不要忘记检查数字是否出界

```js
/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
    const nums = n.toString().split('').map(item => Number(item))
    let i = nums.length - 2

    while(i >= 0 && nums[i] >= nums[i + 1]) {
       i--
    }

    if (i < 0) {
        return -1
    }

    let j = nums.length - 1

    while(j >= 0 && nums[j] <= nums[i]) {
        j--
    }

    const tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp

    const num = parseInt(nums.slice(0, i + 1).join('') + nums.slice(i + 1).reverse().join(''))

    return num > 2147483647 ? -1 : num
};
```

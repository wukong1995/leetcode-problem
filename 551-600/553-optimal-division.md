[question](https://leetcode.com/problems/optimal-division)

给一个数组，求插入括号后相除的最大值

```js
// [1000, 100, 10, 2] => "1000/(100/10/2)"
```

要得到最大值，就要分子越大分母越小，所以第一个数字和后面的数字完全是相反的状态，要保证分子最大，就用第一个数当作分子，如何得到最小的分母呢，后面的数依次相除就能得到最小数。注意一下数字长度为1，2的特殊情况就可以。

```js
/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
    if (nums.length === 1) return nums.join('')
    if (nums.length === 2) return nums.join('/')
    return `${nums[0]}/(${nums.slice(1).join('/')})`
};
```

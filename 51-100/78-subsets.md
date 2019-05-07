[question](https://leetcode.com/problems/subsets/)

求一个数组的子集，对于[1, 2, 3]来说，首先求[]的子集得到a，在a基础上求[1]的子集，直到数组的最后一个元素为止

```js
var subsets = function(nums) {
  const res = [[]];

  for(let i = nums.length - 1; i >= 0; i--) {
    for(let j = res.length - 1; j >= 0; j--) {
      res.push([].concat(res[j], nums[i]))
    }
  }

  return res;
};
```

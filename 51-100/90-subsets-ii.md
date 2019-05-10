[question](https://leetcode.com/problems/subsets-ii)

求含有重复数字的数组的子集，比subsets多了一个重复的条件。继续按照我之前的思路进行排除，

![img](https://res.cloudinary.com/dwudaridr/image/upload/v1557299736/leetcode/90-subsetii.png)

重复问题的话，先排序，当遇到重复的元素的时候，只计算上次新增的子集与当前元素，反之，计算所有子集与当前元素。

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums = nums.sort((a, b) => a - b);

  const res = [[]];
  let addStart = 1;

  for(let i = nums.length - 1; i >= 0; i--) {
    let start = nums[i] === nums[i + 1] ? addStart : 0;
    addStart = res.length;

    for(let j = res.length - 1; j >= start; j--) {
      res.push([].concat(res[j], nums[i]))
    }
  }

  return res;
};
```

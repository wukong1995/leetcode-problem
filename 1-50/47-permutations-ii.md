[question](https://leetcode.com/problems/two-sum/)

这个题目相对上一个题目多了几个剪枝的选择

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const res = [];
  let usedArr = [];
  const { length } =  nums;

  nums = nums.sort((a, b) => a - b);
  for(let i = 0; i < length; i++) {
    usedArr.push(false);
  }

  const dfs = (nums, temp = []) => {
    if(temp.length === length) {
      res.push([].concat(temp));
    }

    for(let i = 0; i < length; i++) {
      if (usedArr[i]) {
        // nums[i] is used
      } else if (i > 0 && nums[i] === nums[i - 1] && usedArr[i - 1]) {
        // remove duplicate
      } else {
        usedArr[i] = true;
        temp.push(nums[i]);
        dfs(nums, temp);
        usedArr[i] = false;
        temp.pop();
      }
    }
  };

  dfs(nums);

  usedArr = null;
  return res;
};
```

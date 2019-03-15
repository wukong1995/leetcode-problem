[question](https://leetcode.com/problems/permutations/)

求数组中数字的全排列，依然是没解决....

我想着是拿第一个数字和其他数字交换，但是结果太少啦

下面是我的‘wrong answer’代码
```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (nums.length === 1) return [nums];

  const resArr = [];
  let temp = null;
  const count = nums.length;

  for (let c = 0; c < count; c++) {
    for(let i = 0; i < count - 1; i++) {
      temp = nums[i];
      nums[i] = nums[i + 1];
      nums[i + 1] = temp;
      resArr.push([].concat(nums));
    }
  }

  return resArr;
};
```

这个题目在找了答案后，思想是按照构建树来的，剪枝的地方是“数组中不能存在相同的元素”
```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];
  const { length } =  nums;

  const dfs = (nums, temp = []) => {
    if(temp.length === length) {
      res.push([].concat(temp));
    }

    for( let i = 0; i < length; i++) {
      if (temp.indexOf(nums[i]) === -1) {
        temp.push(nums[i]);
        dfs(nums, temp);
        temp.pop();
      }
    }
  };

  dfs(nums);

  return res;
};
```

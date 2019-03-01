[question](https://leetcode.com/problems/combination-sum-ii/)

这个问题和39差不多，要求是没有最终得到的元素组合没有重复的。

我以为只是简单的把递归的最后一个参数改成i-1就好了，但是结果有重复的呀。再次求助：先排序，再限制相同数字不能在同一个纬度下。

```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let resArr = [];
  let temp = [];
  candidates.sort((a, b) => b - a);
  find(candidates, resArr, target, temp, candidates.length - 1);
  return resArr;
};


var find = function (arr, resArr, target, accArr, index) {
  for (let i = index; i >= 0; i--) {
    if (arr[i] > target || (i !== index && arr[i] === arr[i + 1])) {
      // ...
    } else if (arr[i] === target) {
      resArr.push(accArr.concat(arr[i]));
    } else {
      find(arr, resArr, target - arr[i], accArr.concat(arr[i]), i - 1);
    }
  }
};
```

测试用例
```
Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
```

将[10,1,2,7,6,1,5]排序成[10, 7, 6, 5, 2, 1, 1]后，从右向左循环时，1已经得到序列了，第二个1就必要在进行循环一次了，这是我对“相同数字不能在同一纬度”的理解。
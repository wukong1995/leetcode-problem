[question](https://leetcode.com/problems/two-sum/)

在给定不重复的数组中，找到全部元素组合的和为给定数字。

第一次思考将这个题当作迷宫一类的了，在没有结果的帮助下，向google发出求助，找到了答案。

依次循环，记得“剪枝”。
```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let resArr = [];
  let temp = [];

  find(candidates, resArr, target, temp, candidates.length - 1);
  return resArr;
};


var find = function (arr, resArr, target, accArr, index) {
  for (let i = index; i >= 0; i--) {
    if (arr[i] > target) {
      // ...
    } else if (arr[i] === target) {
      resArr.push(accArr.concat(arr[i]));
    } else {
      find(arr, resArr, target - arr[i], accArr.concat(arr[i]), i)
    }
  }
};
```
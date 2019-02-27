[question](https://leetcode.com/problems/two-sum/)

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var res = null;
  nums.forEach((item, index) => {
    if (res) return;
    var last = target - item;

    const lastIndex = nums.slice(index + 1).findIndex(num => num === last);
    if (lastIndex > -1) {
      res = [index, lastIndex + index + 1];
    }
  })

  return res;
};
```

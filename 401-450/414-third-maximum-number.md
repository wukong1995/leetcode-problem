[question](https://leetcode.com/problems/third-maximum-number)

使用数组，每次插入

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  const maxArr = [-Infinity, -Infinity, -Infinity]
  for (const num of nums) {
    for(let i = 0; i< 3; i++) {
      if (num > maxArr[i]) {
        maxArr.splice(i, 0, num);
        break;
      }

      if (num === maxArr[i]) {
        break;
      }
    }
  }
  // console.log('---maxArr', maxArr)
  return maxArr[2] === -Infinity ? maxArr[0] : maxArr[2]
};
```

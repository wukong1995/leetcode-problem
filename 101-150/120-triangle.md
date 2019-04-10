[question](https://leetcode.com/problems/triangle/)

求金字塔最小路径的最小和。刚看到这个题目真的是一点思路也没有。暴力破解想都不要想。

思路：对于金字塔的最后一排元素，从上到下只会有一条最优解，反过来想，你当前的元素加上上一排路径最小和那就是最小和了。这个我是直接更改原数组，返回原数组最后一排的最小值即可。

```js

// [
// [2],          [2],
// [3,4],     => [5, 6],
// [6,5,7],      [11, 20, 13],
// [4,1,8,3]     [14, 11, 18, 16],
// ]

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const length = triangle.length;

  for (let i = 1; i < length; i++) {
    for(let j = 0; j <= i; j++) {
      if (j === 0) {
        triangle[i][j] += triangle[i - 1][j];
      } else if(i === j) {
        triangle[i][j] += triangle[i - 1][j -1];
      } else {
        triangle[i][j] += Math.min(triangle[i - 1][j], triangle[i - 1][j - 1]);
      }
    }
  }

  return Math.min(...triangle[length - 1]);
};
```

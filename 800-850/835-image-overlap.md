[question](https://leetcode.com/problems/image-overlap/)

给定两个值为0或1的二维数组，数组可以上下左右移动，判断重叠1的最大个数


```js
/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {

  let res = 0
  const length = img1.length

  for (let i = -length + 1; i < length; i++) {
    for (let j = -length + 1; j < length; j++) {
      res = Math.max(res, move(img1, img2, i, j), move(img2, img1, i, j))
    }
  }


  return res;
};

function move(img1, img2, a, b) {
  const length = img1.length
  let count = 0
  for (let i = a; i < length; i++) {
    for (let j = b; j < length; j++) {
      if (img1[i] && img2[i - a] && img1[i][j] & img2[i - a][j - b]) {
          count++
      }
    }
  }

  return count
}

```

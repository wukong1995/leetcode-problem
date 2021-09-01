[question](https://leetcode.com/problems/rectangle-overlap/)

给定两个矩形的左下角右上角的坐标，判断两个矩形是否重叠

```js
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
  const [aX1, aY1, aX2, aY2] = rec1;
  const [bX1, bY1, bX2, bY2] = rec2;

  return aX1 < bX2 && aX2 > bX1 && aY1 < bY2 && aY2 > bY1;
}
```

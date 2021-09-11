[question](https://leetcode.com/problems/circle-and-rectangle-overlapping/)

判断圆和矩形是否相交，参考[知乎答案](https://www.zhihu.com/question/24251545/answer/27184960)

```js
/**
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function(radius, xCenter, yCenter, x1, y1, x2, y2) {
    const [d1, d2] = [xCenter -  Math.max(x1, Math.min(x2, xCenter)), yCenter - Math.max(y1, Math.min(y2, yCenter))]
    return (d1 ** 2) + (d2 ** 2) <= radius ** 2
};
```

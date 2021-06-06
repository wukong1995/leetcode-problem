[question](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons)

给定一组气球的长度的start和end，如果箭的坐标在start和end之间，就能穿破，请问至少需要几个箭能全部穿破

这个题目和之前做过的一个区间题类似，想不起来具体的题目了

思路：先排序，如果first[1] >= second[0]，则说明两个气球的区间有交集，取交集，重复此操作，直到找不到交集

```js
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  points.sort((a, b) => a[0] - b[0])

  while(true) {
    let flag = false
    let first = points[0]

    for (let i = 1; i < points.length; i++) {
      const current = points[i]

       if (current[0] <= first[1]) {
        first = [Math.max(first[0], current[0]), Math.min(first[1], current[1])]
        points.splice(i - 1, 2, first)
        flag = true
        i--
       } else {
         first = current
       }
    }

    if (!flag) {
      return points.length
    }
  }

};
```

看评论区有更简单的，思路一样，这个更简洁，保存最后的end值，然后依次去比，这个好：

```js
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  points.sort((a, b) => a[0] - b[0])

  let count = 1
  let end = points[0][1]

  for (let i = 1; i < points.length; i++) {
    if (points[i][0] <= end) {
      end = Math.min(end, points[i][1])
    } else {
      count++
      end = points[i][1]
    }
  }

  return count

};
```

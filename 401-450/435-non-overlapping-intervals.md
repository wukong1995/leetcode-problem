[question](https://leetcode.com/problems/non-overlapping-intervals)

给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠。

因为有最小的限制，假如一个区间为[1, 8]，跨度特别大的情况，优先要溢出它。所以首先要按照区间的第二个数字排序，然后纪录前面的end和区间的第一个比。dp也可以，没贪心简单。

```js
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[1] - b[1])
    let end = -Infinity
    let length = 0

    for (let i = 0; i < intervals.length; i++) {
      if (intervals[i][0] >= end) {
        end = intervals[i][1]
        length++
      }
    }

    return intervals.length - length
};

```

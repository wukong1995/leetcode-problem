[question](https://leetcode.com/problems/merge-intervals/)

merge范围
之前想了好多，但是为了保证各种条件，首先第一步要做的是排序，这样的话，比较的时候我就只需要比较current.end和next.start了，最后的merge出来的返回需要的是Math.max(current.end, next.end)，而不是简单直接拿next.end。

```js
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    intervals = intervals.sort((a, b) => a.start - b.start);
    // console.log(intervals)

  const helper = (currentIndex = 0) => {
    if (currentIndex >= intervals.length - 1) {
      return;
    }

    const currentRange = intervals[currentIndex];
    const lastRange = intervals[currentIndex + 1];

    if(currentRange.end >= lastRange.start) {
      intervals.splice(currentIndex, 2, {start: currentRange.start, end: Math.max(currentRange.end, lastRange.end)});
    } else {
      currentIndex++;
    }

    return helper(currentIndex);
  }

  helper(0);
  return intervals;
};
```
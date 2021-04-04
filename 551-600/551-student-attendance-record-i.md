[question](https://leetcode.com/problems/student-attendance-record-i)

判断学生是够能获得成绩

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    return s.indexOf('LLL') === -1 && condition1(s)
};

var condition1 = (s) => {
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') {
      count += 1
      if (count >= 2) {
        return false
      }
    }
  }

  return true
}
```

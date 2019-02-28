[question](https://leetcode.com/problems/zigzag-conversion/)

将字符串按照z型排列后，从左到右。从上到下连接字符得到字符串。

按照numRows分割字符串，在对称拼起来。

```js
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if ((s.length < numRows) || numRows === 1) return s;
  const rowsCount = numRows + numRows - 2;
  const splitArr = s.match(new RegExp(`.{1,${rowsCount}}`, 'g'));
  const eachCount = Math.floor((rowsCount + 1) / 2);
  let resStr = '';

  for(let i = 0; i <= eachCount; i++) {
    splitArr.forEach(item => {
      if (i + i >= rowsCount) {
        resStr += item.substr(i, 1);
      } else {
        resStr += item.substr(i, 1) + item.substr(rowsCount - i, 1);
      }
    });
  }

  return resStr;
};
```

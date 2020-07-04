[question](https://leetcode.com/problems/peak-index-in-a-mountain-array)

这个好像学编译原理写的匹配机，记不清楚了

和1年前的提交对比来看，是*的那一块思考错了，*代表的是有0个或多个

// 错误
```js
/**
 * @param {string} str
 * @param {string} pattern
 * @return {boolean}
 */
var isMatch = function (str, pattern) {
  return recursiveMatch(str, pattern);
};

var recursiveMatch = (str, pattern) => {
  if (str === '') {
    return pattern === '' // 对于'c*'的情况判断错误
  }


  if(pattern === '') {
    return false;
  }

  let strFirst = str[0];
  let patternFirst = pattern[0];

  if (pattern[1] === '*') {
    if(patternFirst !== strFirst) { // 这里没考虑.的情况
      return recursiveMatch(str.slice(1), pattern.slice(2));
    }

    while (patternFirst === '.' || strFirst === patternFirst) {
      str = str.slice(1);
      strFirst = str[0];
    }

    return recursiveMatch(str, pattern.slice(2));
  }

  if (patternFirst === '.' || strFirst === patternFirst) {
    return recursiveMatch(str.slice(1), pattern.slice(1));
  } else {
    return false;
  }
};
```

正确
```js
/**
 * @param {string} str
 * @param {string} pattern
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const sLength = s.length
  const pLength = p.length

  // 0个元素
  if (pLength === 0) {
    return sLength === 0
  }

  // 1个元素
   if (pLength === 1) {
    return sLength === 1 && ((p[0] === '.') || (p[0] === s[0]))
  }

  // 处理不是*的情况
  if (p[1] !== '*') {
    if(sLength === 0) return false
    return  (p[0] === '.' || s[0] === p[0]) && isMatch(s.slice(1), p.slice(1));
  }

  // 处理*的情况
  while(s.length > 0 &&  (p[0] === '.') || (p[0] === s[0])) {
    if (isMatch(s, p.substr(2))) return true

    s = s.substr(1)
  }

  return isMatch(s, p.slice(2))
};
```

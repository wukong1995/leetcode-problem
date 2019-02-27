[question](https://leetcode.com/problems/longest-common-prefix/)

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];

  const charOfFirst = strs[0].split('');
  const tailStrs = strs.slice(1);
  let commonPrefix = '';
  let flag = true;

  charOfFirst.forEach((char) => {
    if(!flag) return;
    const reg = new RegExp(`^${commonPrefix + char}`);

    tailStrs.forEach(str => {
      if (!reg.test(str)) {
        flag = false;
      }
    });

    if (flag) commonPrefix += char;
  });

  return commonPrefix;
};
```

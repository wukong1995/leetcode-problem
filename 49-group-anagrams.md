[question](https://leetcode.com/problems/group-anagrams/)

分组字符串，标准是由完全相同的字符组成

先对于数组中的字符串进行排序后，直接对比相邻字符串是否相同

```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const res = [];
  const sortStrs = [];

  for (let i = 0; i < strs.length; i++) {
    sortStrs[i] = sortStr(strs[i]);
  }

  for(let i = 0; i < strs.length; i++) {
    const currentStr = strs[i];
    res[i] = [];
    res[i].push(currentStr);
    for(let k = i + 1; k < strs.length; k++) {
      const str = strs[k];
      if (currentStr.length === str.length) {
        const isInGroup = sortStrs[i] === sortStrs[k];
        if (isInGroup) {
          res[i].push(strs[k]);
          strs.splice(k, 1);
          sortStrs.splice(k, 1);
          k--;
        }
      }
    }
  }

  return res;
};
var sortStr = (str) => {
  return str.split('').sort().join('');
};
```

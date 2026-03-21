[question](https://leetcode.com/problems/partition-labels)

划分字母区间：通过每个字母的第一、后出现的位置进行划分

```js
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let res = []
    let start = 0
    let end = 0
    const map = {}
    for (let i = 0; i < s.length; i++) {
        const char = s[i]

        if (map[char]) {
            map[char].end = i
        } else {
            map[char] = { start: i, end: i}
        }
    }

    for (let i = 0; i < s.length; i++) {
         const char = s[i]
         if (i <= end) {
            end = Math.max(end, map[char].end)
         } else {
            res.push(end - start + 1)
            start = i
            end = map[char].end
         }
    }
    res.push(end - start +1)
    return res
};
```

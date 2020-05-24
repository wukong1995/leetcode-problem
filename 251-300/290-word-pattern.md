[question](https://leetcode.com/problems/word-pattern)

Example 1:

Input: pattern = "abba", str = "dog cat cat dog"
Output: true

Example 2:

Input: pattern = "abba", str = "dog dog dog dog"
Output: false

使用map去判断是否已经存在，不光要判断key，还需要判断value

```js
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    const pLength = pattern.length
    const strList = str.split(' ')
    const mmap = new Map()

    if (strList.length !== pLength) return false

    for (let i = 0; i < pLength; i++) {
        const char = pattern[i]
        const word = strList[i]

        if (mmap.has(char)) {
            if (mmap.get(char) !== word) return false
            continue
        }

        if (Array.from(mmap.values()).indexOf(word) > -1) return false
        mmap.set(char, word)
    }

    return true
};
```

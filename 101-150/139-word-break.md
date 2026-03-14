[question](https://leetcode.com/problems/word-break)

给定非空字符串s和包含非空字列表的字典wordDict，确定s是否可以被分段为一个或多个字典单词的空格分隔序列....题目是这样理解的，但是我提交了answer error了...

没想到这道题用dp解

```js
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const dp = new Array(s.length + 1).fill(0)
    dp[0] = 1

    for (let i = 0; i < s.length; i++) {
        if (!dp[i]) {
            continue
        }

        for (let j = 0; j < wordDict.length; j++) {
            const cur = wordDict[j]
            const substr = s.substr(i, cur.length)
            if (substr === cur) {
                dp[i + cur.length] = 1
            }
        }
    }

    return !!dp[s.length]
};
```

[question](https://leetcode.com/problems/longest-common-subsequence)

两个字符串的最大子序列长度，使用动态规划求解

```js
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length
    const n = text2.length
    const dp = new Array(m + 1).fill(Boolean).map(() => new Array(n + 1).fill(0))

    for (let i = 1; i<= m; i++) {
        for (let j = 1; j <= n;j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] +1
            } else {
                dp[i][j] = Math.max(dp[i -1][j], dp[i][j -1])
            }
        }
    }
    return dp[m][n]
};
```

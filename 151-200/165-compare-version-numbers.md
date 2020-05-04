[question](https://leetcode.com/problems/compare-version-numbers)

判断两个version的关系，先将字符串分割，再一位一位的判断

```js
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const v1 = version1.split('.').map(item => +item)
    const v2 = version2.split('.').map(item => +item)

    const minLength = Math.max(v1.length, v2.length)

    for(let i = 0; i< minLength; i++) {
        const num1 = v1[i] || 0
        const num2 = v2[i] || 0

        if(num1 < num2) return -1
        if(num1 > num2) return 1
    }

    return 0
};
```

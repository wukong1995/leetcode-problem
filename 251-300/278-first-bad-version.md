[question](https://leetcode.com/problems/first-bad-version)

二分查找吧

```js
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let min = null;
        let start = 1;
        let end = n;

        while(start <= end) {
            const mid = Math.floor((start + end) / 2);

            if(isBadVersion(mid)) {
                min = mid;
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return min;
    };
};
```

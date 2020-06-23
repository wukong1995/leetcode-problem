[question](https://leetcode.com/problems/h-index-ii)

额 这个题比274看起来还简单了些

```js
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    const list = citations.reverse()
    let res = 0
    list.forEach((item, index) => {
        if (index < item) {
            res ++
        }
    })

    return res
};
```

我看了评论区，有用二分的....

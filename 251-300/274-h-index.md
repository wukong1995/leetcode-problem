[question](https://leetcode.com/problems/h-index)

维基的解释：
>H指数的计算基于其研究者的论文数量及其论文被引用的次数。赫希认为：一个人在其所有学术文章中有N篇论文分别被引用了至少N次，他的H指数就是N。[1][2]如美国耶鲁大学免疫学家理查德·弗来沃发表的900篇文章中，有107篇被引用了107次以上，他的H指数是107。
>可以按照如下方法确定某人的H指数：
>将其发表的所有SCI论文按被引次数从高到低排序；
>从前往后查找排序后的列表，只要当前的引用量大于当前的索引值，则H指数加1，最后得到的结果即为最终的H指数。

```js
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    const list = citations.sort((a, b) => b - a)
    let res = 0
    list.forEach((item, index) => {
        if (index < item) {
            res ++
        }
    })

    return res
};
```

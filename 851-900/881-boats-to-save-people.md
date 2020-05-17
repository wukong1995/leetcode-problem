[question](https://leetcode.com/boats-to-save-people)

一条船上限重，最多只能载两个人

1. 先排序
2. 一条船先上中的人，看是否还能再加一个轻的人

```js
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    // 降序排序
    const sortPeople = people.sort((a, b) => b - a)
    const length = people.length
    let left = 0
    let right = length - 1
    let count = 0

    while(left <= right) {
        if (sortPeople[left] + sortPeople[right] <= limit) right--
        left++
        count++
    }

    return count
};
```

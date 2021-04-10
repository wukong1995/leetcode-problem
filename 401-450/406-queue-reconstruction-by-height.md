[question](https://leetcode.com/problems/queue-reconstruction-by-height)

如题：
>You are given an array of people, people, which are the attributes of some people in a queue (not necessarily in order). Each people[i] = [hi, ki] represents the ith person of height hi with exactly ki other people in front who have a height greater than or equal to hi.
>Reconstruct and return the queue that is represented by the input array people. The returned queue should be formatted as an array queue, where queue[j] = [hj, kj] is the attributes of the jth person in the queue (queue[0] is the person at the front of the queue).

思路：先排序，插入的时候，找出大于当前数字的第n+1个元素的坐标，如果找不到就是最末尾插入
```js
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  people.sort((a, b) => a[1] - b[1])
  const newQueue = []

  for (let i = 0; i < people.length; i++) {
    let lastMaxIndex = 0

    const target = people[i]
    const number = target[0]
    let needMax = target[1]

    for (let j = 0; j < newQueue.length; j++) {
      const jj = newQueue[j]

      if (jj[0] >= number) {
        needMax--
      }

      if (needMax === -1) {
        lastMaxIndex = j
        break
      }
    }

    if (needMax >= 0) {
      lastMaxIndex = newQueue.length
    }

    newQueue.splice(lastMaxIndex, 0, target)
  }

  return newQueue
};
```

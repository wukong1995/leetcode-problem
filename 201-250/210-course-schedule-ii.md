[question](https://leetcode.com/problems/course-schedule-ii)

求出图中的一个路径

207使用的是递归查找，这个题目感觉用不到，就用了简单的循环。

一开始确定的思路就是从第一个开始上的课程开始找，但是第一个解决方法有缺陷，面对中间分叉链条长度不一致的情况解决不了，去讨论区找了一个思路，可以用节点的入边个数确定是否可以加入队列！！！同样是207也可以用这个思路去解决。

```js
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const graph = []
  const ins = new Array(numCourses).fill(0)

  for (let i = numCourses - 1; i >=0; i--) {
    graph.push([])
  }

  for (let i = prerequisites.length - 1; i >= 0; i--) {
    const [pre, next] = prerequisites[i]
    graph[next].push(pre)
    ins[pre]++
  }

  const queue = []
  for (let i = numCourses - 1; i >=0; i--) {
    if (ins[i] === 0) {
      queue.push(i)
    }
  }

  let cusor = 0
  while(cusor < queue.length) {
    const current = queue[cusor]

    for (let i = 0; i < graph[current].length; i++) {
      if (--ins[graph[current][i]] === 0) {
        queue.push(graph[current][i])
      }
    }

   cusor++
  }

  if (queue.length < numCourses) {
    return []
  }

  return queue
};
```

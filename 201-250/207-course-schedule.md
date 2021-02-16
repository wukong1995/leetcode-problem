[question](https://leetcode.com/problems/course-schedule)

>There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
>For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
>Return true if you can finish all courses. Otherwise, return false.

我理解的是这个题目是判断当前有向图中是否有环; 依次遍历每个节点，看是否有环

```js
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const graph = []
  const visit = new Array(numCourses).fill(false)
  const ongoing = new Array(numCourses).fill(false)
  for (let i = 0; i < numCourses; i++) {
    graph.push([])
  }

  for (let i = prerequisites.length - 1; i >= 0; i--) {
    const [start, end] = prerequisites[i]
    graph[start].push(end)
  }

  for (let i = 0; i < numCourses; i++) {
    if (!visit[i]) {
      if (hasCycle(graph, i, visit, ongoing)) {
        return false
      }
    }
  }

  return true
};

var hasCycle = function(graph, current, visit, ongoing) {
  visit[current] = true
  ongoing[current] = true

  const target = graph[current]

  for (let i = 0; i < target.length; i++) {
    const next = target[i]

    if (visit[next] && ongoing[next]) {
      return true
    }

    if (!visit[next] && hasCycle(graph, next, visit, ongoing)) {
      return true
    }
  }

  ongoing[current] = false
  return false
}
```

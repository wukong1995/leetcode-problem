[question](https://leetcode.com/problems/minimum-height-trees)

给定一个图，求具有最小高度的树的root节点，

看了讨论区，使用剥洋葱的方法：
1. 首先保存每个节点可到达的点：arr
2. 从可到达的点的长度为1的开始，为1表示它是个叶子结点。先将其保存至leafQueue中
3. 遍历leafQueue，将叶子结点从每个节点的可到达中删掉
4. 重复2，3，到n的长度少于等于两个节点为止

时间复杂度：n*n
空间复杂度：n

```js
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  if (n === 0 || edges.length === 0) return [0]


  const arr = []
  for (let i = n - 1; i >= 0; i--) {
    arr.push([])
  }


  for (let i = edges.length - 1; i >= 0; i--) {
    const [first, last] = edges[i]

    arr[first].push(last)
    arr[last].push(first)
  }

  let leafQueue = []

  for (let i = n - 1; i >= 0; i--) {
    if (arr[i].length === 1) {
      leafQueue.push(i)
    }
  }

  while(n > 2) {
    const copyQueue = leafQueue.slice(0)
    leafQueue = []

    const leafLength = copyQueue.length
    n -= leafLength

    for (let i = 0; i < leafLength; i++) {
      const node = copyQueue[i]

      for (let j = arr.length - 1; j >= 0; j--) {
        const index = arr[j].findIndex((item) => item === node)
        if (index > -1) {
          arr[j].splice(index, 1)

          if (arr[j].length === 1) {
            leafQueue.push(j)
          }
        }
      }
    }
  }

  if (leafQueue.length > 0) return leafQueue
};
```

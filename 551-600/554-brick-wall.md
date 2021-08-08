[question](https://leetcode.com/problems/brick-wall)

你面前有一堵长方形的砖墙，有n排砖。 第 i 行有一定数量的积木，每个积木高度相同（即一个单元），但它们的宽度可以不同。 每行的总宽度相同。

从上到下画一条垂直线，穿过最少的砖块。 如果您的线穿过砖块的边缘，则该砖块不被视为交叉。 你不能只沿着墙的两个垂直边缘之一画一条线，在这种情况下，这条线显然不会穿过砖块。

给定包含墙信息的二维数组墙，在绘制这样一条垂直线后返回交叉砖的最小数量。

最直接的思路：将墙缝作为一个数组，一个砖的长度大于1的时候，对应的墙缝就加1，最后求墙缝数组的最小值；但是要是墙太长的话，数组超限了😢；换一种思路：保存每个墙缝出现的次数，出现次数最多的就在这画竖线；

```js
/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
  const obj = {}
  for (let i = 0; i < wall.length; i++) {
      let sum = 0
      for (let j = 0; j < wall[i].length; j++) {
        sum += wall[i][j]
        if (obj[sum] === undefined) {
            obj[sum] = 0
        }
        obj[sum]++
      }
  }


  const total = wall[0].reduce((acc, item) => acc + item, 0)
  let maxCount = 0
  Object.keys(obj).forEach((key) => {
    if (Number(key) !== total) {
        maxCount = Math.max(maxCount, obj[key])
    }
  })

  return wall.length - maxCount
};
```

墙缝数组：
```js
/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
  const wallSum = wall[0].reduce((acc, item) => acc + item, 0)
  if (wallSum === 1) return wall.length

  const res = new Array(wallSum - 1).fill(0)
  for (let i = wall.length - 1; i >= 0; i--) {
      const current = wall[i];
      let sum = -1;

      for (let j = 0; j < current.length; j++) {
        let num = current[j]
        while (num > 1) {
            res[sum + num - 1]++
            num--
        }

        sum += current[j]
      }
  }

  return Math.min(...res)
};
```



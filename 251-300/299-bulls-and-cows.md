[question](https://leetcode.com/problems/bulls-and-cows)

游戏描述：https://zh.wikipedia.org/wiki/%E7%8C%9C%E6%95%B0%E5%AD%97
玩法：一个人设定一组四码的数字作为谜底，另一方猜。每猜一个数，出数者就要根据这个数字给出提示，提示以XAYB形式呈现，直到猜中为止。其中X表示位置正确的数的个数，而Y表示数字正确而位置不对的数的个数。

得到x和y即可，算y的时候，有数字重复的情况，使用map去保存字母和字母出现的次数

```js
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  let x = 0
  let y = 0

  const guessMap = {}
  // get X
  for (let i = secret.length - 1; i >=0; i--) {
    const guessChar = guess[i]
    guessMap[guessChar] = (guessMap[guessChar] || 0) + 1

    if(secret[i] === guessChar) {
      x++
    }
  }

  // get Y
  for (let i = secret.length - 1; i >=0; i--) {
    const secretChar = secret[i]
    if (guessMap[secretChar] > 0) {
      y++
      guessMap[secretChar] = guessMap[secretChar] - 1
    }
  }


  return `${x}A${y - x}B`
};
```

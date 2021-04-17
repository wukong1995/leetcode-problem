[question](https://leetcode.com/problems/fizz-buzz)

Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i if non of the above conditions are true.
一定要减少%的计算

第一种：
这个让我想起了找一个区间内的素数，先填充，用3走一遍，再用5走一遍，
```js
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const arr = new Array(n + 1).fill("")

  for (let i = 1; i<= n; i++) {
    arr[i] = "" + i
  }

  let start = 3
  while(start <= n) {
    arr[start] = 'Fizz'
    start += 3
  }

  start = 5
   while(start <= n) {
     if (arr[start] === 'Fizz') {
       arr[start] = 'FizzBuzz'
     } else {
       arr[start] = 'Buzz'
     }

    start += 5
  }


  return arr.slice(1)
};
```

第二种：
，可以使用两个数字计数。
```js
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const arr = new Array(n + 1)
  let c3 = 0
  let c5 = 0

  for (let i = 1; i <= n; i++) {
    c3++
    c5++

    if (c3 === 3 && c5 === 5) {
      arr[i] = 'FizzBuzz'
      c3 = 0
      c5 = 0
      continue
    }

    if (c3 === 3) {
      arr[i] = 'Fizz'
      c3 = 0
      continue
    }

    if (c5 === 5) {
      arr[i] = 'Buzz'
      c5 = 0
      continue
    }

    arr[i] = "" + i
  }

  return arr.slice(1)
};
```

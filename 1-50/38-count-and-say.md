[question](https://leetcode.com/problems/count-and-say)

这个题目可能最难的就是理解了

对于一个字符串，将其一个字符连续出现多少次；一开始按照他的说法11，21，1的规则提交上去了，发现6的结果里面为什么有3？小朋友有很多问号

```js
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
   let s1 = "1"

   while(n > 1) {
     let c = 1
     let s2 = ''
     for (let i = 0; i< s1.length; i++) {
       if (s1[i] !== s1[i + 1]) {
         s2 += c + s1[i]
         c = 1
       } else {
         c++
       }

     }
     s1 = s2

     n--
   }

  return s1
};

```

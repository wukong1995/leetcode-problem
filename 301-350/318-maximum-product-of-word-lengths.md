[question](https://leetcode.com/problems/maximum-product-of-word-lengths)

给一个单词的数组，求两个不带有一样字符的单词长度的乘积

没想到好的方法，看了讨论区知道了优秀的思路。

因为单词都是小写，所以2的26次方数字不会溢出。将一个数字想象成有26个二进制位组成，例如：假如单词是“b”，二进制的末尾是10，此时数字就会是2。两个单词的数字相与后是1，说明有重复的字母，0的话说明没有。这个方法太巧妙了！


```js
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
   let res = 0

   const arr = new Array(words.length).fill(0)

   for (let i = 0; i < words.length; i++) {
     const word = words[i]
     for (let c = 0; c < word.length; c++) {
       arr[i] = arr[i] | 1 << (word[c].charCodeAt() - 97)
     }

     for (let j = 0; j < i; j++) {
       if (!(arr[j] & arr[i])){
         res = Math.max(res, words[i].length * words[j].length)
       }
     }
   }

  return res
};
```

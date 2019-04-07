[question](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

每个数字对应一组字母，求对于数字的所有字母串的排列。
递归进行，2的所有排列是['a', 'b', 'c']， 那么23的所有排列是['a', 'b', 'c'] * ['d', 'e', 'f']

```js
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const str = digits.toString();
  const length = str.length;

  var helper = (acc = [], currentIndex = 0) => {
    if(currentIndex >= length) {
      return acc;
    }

    const charArr = translate[str[currentIndex]];
    let newAcc = [];
    if(acc.length === 0) {
      newAcc = charArr;
    } else {
      for (let i = 0; i < acc.length; i++) {
        for (let j = 0; j < charArr.length; j++) {
          newAcc.push(acc[i] + charArr[j]);
        }
      }
    }

    return helper(newAcc, ++currentIndex);
  }

  return helper();
};

var translate = {
  "1": [],
  "2": ['a', 'b', 'c'],
  "3": ['d', 'e', 'f'],
  "4": ['g', 'h', 'i'],
  "5": ['j', 'k', 'l'],
  "6": ['m', 'n', 'o'],
  "7": ['p', 'q', 'r', 's'],
  "8": ['t', 'u', 'v'],
  "9": ['w', 'x', 'y', 'z'],
};
```
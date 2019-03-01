[question](https://leetcode.com/problems/plus-one/)

为数组+1，[1, 2, 3] => [1, 2, 4]

有进位的情况，如果一直有进位，则一直递归加下去；
```js
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (digits.length === 0) return [1];

  const carry = recursivePlus(digits, digits.length - 1, 1);
  if (carry > 0) {
    digits.unshift(1);
  }

  return digits;
};

var recursivePlus = (digits, currentIndex, carry) => {
  if (currentIndex < 0 || carry === 0) {
    return carry;
  }
  const sum = digits[currentIndex] + carry;
  digits[currentIndex] = sum % 10;

  return recursivePlus(digits, currentIndex - 1, parseInt(sum / 10));
};
```
[question](https://leetcode.com/problems/add-two-numbers-ii)

求两个链表相加的和

1. 求出最长的一条
2. 反转链表
3. 对应相加

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if (l1 === null || l2 === null) {
    return l1 || l2
  }

  const length1 = getLength(l1)
  const length2 = getLength(l2)
  let maxL = l1
  let minL = l2

  if (length1 < length2) {
    maxL = l2
    minL = l1
  }

  maxL = reverseL(maxL)
  minL = reverseL(minL)

  let sumPrev = 0
  let sumHead = null
  let sumCurrent = sumHead

  while(maxL !== null) {
    const num1 = maxL.val
    const num2 = minL && minL.val || 0

    const sum = num1 + num2 + sumPrev
    const sumNum = sum % 10
    sumPrev = parseInt(sum / 10, 10)

    if (sumCurrent) {
      sumCurrent.next = {val: sumNum, next: null}
      sumCurrent = sumCurrent.next
    } else {
      sumCurrent = {val: sumNum, next: null}
      sumHead = sumCurrent
    }

    maxL = maxL.next
    minL = minL && minL.next || null
  }

  if (sumPrev === 1) {
    sumCurrent.next = {val: 1, next: null}
  }

  return reverseL(sumHead)
};

var reverseL = (root) => {
  let prev = root
  let current = root.next
  root.next = null

  while(current !== null) {
    const temp = current.next
    current.next = prev
    prev = current
    current = temp
  }

  return prev
}

var getLength = (root) => {
  let count = 0

  while(root !== null) {
    count++
    root = root.next
  }

  return count
}

```

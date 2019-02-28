[question](https://leetcode.com/problems/add-two-numbers/)


##### 求两个链表的和

第一次做medium的题，折腾了好久。
用js写到半截，想着要不要换成c++，转念一想，解决办法都没想出来，用什么写都没用。

用两个链表得到一个和的列表，写的过程中，想着处理两个列表比较麻烦，于是干脆拿一个列表当和列表用。代码写的有点烂（里面的逻辑判断），提交上去的结果意外的不错=。=

这个题使用了js中引用类型的特点，过程中遇到的问题是向null赋值，发现没有在链表里面，原因是null不是引用类型，过程中丢失了。

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const getDigitAndCarry = (num1, num2, baseCarry) => {
  let carry = 0;
  const sum = num1 + num2 + baseCarry;
  if (sum >= 10) {
    carry = 1;
  }
  return {
    digit: sum % 10,
    carry,
  };
};

const recursiveAdd = (link, accLinkCurrentNode, baseCarry) => {
  let linkVal = 0;
  let linkNext = null;
  if (link === null && baseCarry === 0) {
    return;
  }

  if (link) {
    linkVal = link.val;
    linkNext = link.next;
  }

  const { digit, carry } = getDigitAndCarry(linkVal, accLinkCurrentNode.val, baseCarry);
  accLinkCurrentNode.val = digit;
  if (accLinkCurrentNode.next === null && ((link && link.next) || carry)) {
    accLinkCurrentNode.next = {
      val: 0,
      next: null
    };
  }

  return recursiveAdd(linkNext, accLinkCurrentNode.next, carry);
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (l2 === null || l1 === null) {
    return l1 || l2;
  }

  const accLink = l1;
  recursiveAdd(l2, accLink, 0);
  return accLink;
};

```

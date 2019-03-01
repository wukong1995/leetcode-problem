[question](https://leetcode.com/problems/swap-nodes-in-pairs/)

交换链表中相邻元素。

虽然题目中提示不要交换值，而是改变元素，本着简单的原则，于是尝试了一下，但是和交换元素相比，交换值的效率太差了。。。

每次看到链表的题目，总是有一种想用C++写的冲动=。=

1. 改变元素，准确来说是改变next的指向
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (head === null || head.next === null) return head;
  const node = { val: null, next: head };
  recursiveSwitch(node, node.next);

  return node.next;
};

var recursiveSwitch = (prevNode, currentNode) => {
  if (currentNode === null || currentNode.next === null) return;

  const nextNode = currentNode.next;
  prevNode.next = nextNode;
  currentNode.next = nextNode.next;
  nextNode.next = currentNode;
  return recursiveSwitch(currentNode, currentNode.next);
}
```

2. 交换值
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let currentNode = head;
  if (head === null || head.next === null) return head;

  while (currentNode !== null && currentNode.next !== null) {
    const swap = currentNode.val;
    const nextNode = currentNode.next;
    currentNode.val = nextNode.val;
    nextNode.val = swap;
    currentNode = nextNode.next;
  }

  return head;
};
```
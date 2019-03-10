[question](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

从有序的链接中移除相同的元素：当前元素和它的下一个元素比较即可。

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
var deleteDuplicates = function (head) {
  if (head === null || head.next === null) return head;

  const link = head;

  while(head !== null && head.next !== null) {
    const nextNode = head.next;
    if (head.val === nextNode.val) {
      head.next = nextNode.next;
    } else {
      head = head.next;
    }
  }

  return link;
};
```
[question](https://leetcode.com/problems/middle-of-the-linked-list)

查找链表的重点
第一种方法：遍历链接得到长度，长度/2后，再遍历后得到，时间复杂度O(n)

第二种方法：快慢指针，快指针走到了null，说明left就是当前的中心点。时间复杂度：O(N)
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow = head
    let fast = head.next

    while(fast !== null) {
      slow = slow.next
      fast = (fast.next && fast.next.next) || null
    }

  return slow
};
```

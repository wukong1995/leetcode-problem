[question](https://leetcode.com/problems/sort-list)

链表排序: 使用快慢指针找到中点，然后二分排序

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
var sortList = function(head, end = null) {
    if (head === null) {
        return head
    }

    if (head.next == end) {
        head.next = null
        return head
    }

    let slow = head
    let fast = head
    while(fast !== end) {
        slow = slow.next
        fast = fast.next
        if (fast !== end) {
            fast = fast.next
        }
    }
    return merge(sortList(head, slow), sortList(slow, end))
};

function merge(head1, head2) {
    const newHead = new ListNode(0, null)
    let cur = newHead
    while(head1 && head2) {
        if (head1.val <= head2.val) {
            cur.next = head1
            head1 = head1.next
        } else {
            cur.next = head2
            head2 = head2.next
        }
        cur= cur.next
    }
    if (head1) {
        cur.next = head1
    } else if (head2) {
        cur.next = head2
    }
    return newHead.next
}
```

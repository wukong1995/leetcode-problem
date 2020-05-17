[question](https://leetcode.com/problems/palindrome-linked-list)

判断一个链表是不是回文的。
1.先找到中点
2. 反转中点后的链表
3. 比较head和中点后的链表


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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // 找中点
    let fast = head
    let slow = head
    while(fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }

    // fast 不等于null，说明是偶数个
    if (fast) slow = slow.next
    // 反转中点后面的链表
    slow = reverse(slow)
    // 挨个比较
    while(slow) {
        if (slow.val !== head.val) return false
        slow = slow.next
        head = head.next
    }

    return true
};

const reverse = (head) => {
    let prev = null
    let current = head
    while(current) {
        const next = current.next
        current.next = prev
        prev = current
        current = next
    }

    return prev
}



```

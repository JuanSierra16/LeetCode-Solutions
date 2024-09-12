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
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

var middleNode = function(head) {
    let slow = head;
    let fast = head;

    // Mientras fast no sea null y fast.next no sea null
    while (fast !== null && fast.next !== null) {
        slow = slow.next; // Avanza de a uno
        fast = fast.next.next; // Avanza de a dos
    }

    return slow; // Cuando fast llegue al final, slow estará en el medio
};

// lc234. Palindrome Linked List
function reverse(head) {
    let prev = null;
    let curr = head;
    let forw = null;
    while (curr != null) {
        forw = curr.next;
        curr.next = prev
        prev = curr
        curr = forw
    }
    return prev 
}
var isPalindrome = function (head) {
    let fast = head;
    let slow = head;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    slow = reverse(slow);
    while(slow!=null && slow.val == head.val){
        head = head.next
        slow = slow.next 
    }
    return slow ==null
};
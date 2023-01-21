// 876. Middle of the Linked List
// Floyd's technic
//**** */ Study Floyd's algorithm

// In js --  null == null  ... null == undefined(true)

var middleNode = function (head) {
    if (head == null || head.next == null) return head;
    let fast = head;
    let slow = head;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;



};



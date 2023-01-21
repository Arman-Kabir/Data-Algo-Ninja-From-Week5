// lc-876. Middle of the Linked List
// lc-141. Linked List Cycle
// **876
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

// ** 141 -----lc-141. Linked List Cycle

var hasCycle = function (head) {
    let fast = head;
    let slow = head;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        if (slow === fast) return true
    }
    return false;
};



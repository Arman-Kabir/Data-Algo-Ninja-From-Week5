// Stack -- Last In First Out (LIFO) . 
//  -- Add(push)-- Remove(POP)
// Example - Browser History
// We can consider array as stack
// Linked List --At end push--O(1). pop--O(n). At first shift -- O(1),unshift -- O(1)
// We will add node at first(non nullable end in linked list).As it gives better performance.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        const newNode = new Node(10);
        this.top = newNode;
        this.length = 1;
    }    
}




// Queue - First In First Out (FIFO). Who comes first , served first
// Add(Enqueue) -- Remove(dequeue)

/*Linked List
push-- O(1) -- add -- nullable end
pop -- O(n)

shift -- O(1) -- remove -- non-nullable
unshift -- O(1)

we will get better performance - if we add at nullable end AND remove from non-nullable end
*/

// QUEUE
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value) {
        const newNode = newNode(value);
        this.value = value
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }

    // adding item at the end of the list
    enqueue() {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.least = newNode;
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++;
        return this;
    }
}




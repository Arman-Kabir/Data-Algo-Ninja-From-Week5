
// QUEUE
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value) {
        const newNode = new Node(value);
        // this.value = value
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }

    // adding item at the end of the list
    enqueue(value) {
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

    dequeue() {
        if (!this.first) return null;
        let temp = this.first
        if (this.length === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
            temp.next = null;
        }
        this.length--;
        return temp;
    }
}

const queue = new Queue(2);
console.log(queue.enqueue(3));
console.log(queue.enqueue(4));
console.log(queue.dequeue());
console.log(queue);


// Array as  stack


// array as queue




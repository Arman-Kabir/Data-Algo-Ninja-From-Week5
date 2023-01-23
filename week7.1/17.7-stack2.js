
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

    // adding item to the top of the stack
    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++
    }
}




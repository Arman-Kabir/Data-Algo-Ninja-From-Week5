
class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DbLinkedList {
    constructor(value) {
        const newNode = new Node(10);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    // adding item to the end
    push(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        newNode.prev = this.tail;
    }
}

const dbLinkedList = new DbLinkedList(10);
// const node = new Node(10);
console.log(dbLinkedList);
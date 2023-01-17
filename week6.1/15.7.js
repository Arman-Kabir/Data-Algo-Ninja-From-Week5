
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// const newNode = new Node(10);
// console.log(newNode);

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    // adding node at the end of the linked list
    // time complexity-- O(1)
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    // Adding node at the beginning
    // time complexity -- O(1)
    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    // Remove from the beginning
    // time complexity --- O(1)
    shift() {
        if (!this.head) return null

        temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;

        if (this.length === 0) {
            this.tail = null
        }
        return temp;
    }

    // Remove item from the end
    // time complexity -- O(n)
    pop() {

        /*
        t
        10-->15 -->8-->null
        p
        */
        if (!this.head) return null;
        let temp = this.head;
        let pre = this.head;
        while (temp.next) {
            pre = temp
            temp = temp.nextSibling;
        }
        this.tail = pre;
        this.tail.next = null;
        length--;
        if (this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    // find item at specific index
    // time complexity -- O(n)
    get(index) {
        // check validation of index
        if (index < 0 || index >= length) return null;
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }

    // inserting item at specific index
    // time complexity-- O(n)
    set(index, value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true
        }
        return false;
    }

    // inserting node at specific index
    // time complexity - O(n)
    insert(index, value) {
        // validate index
        if (index < 0 || index > this.length) return false;
        // inserting item at the beginning
        if (this.index === 0) return this.unshift(value)
        // inserting node at the end
        if (this.index === this.length) return this.push(value)
        // inserting in between
        const newNode = new Node(value)
        // Stopping just before the index node
        const temp = this.get(index - 1)
        newNode.next = temp.next
        temp.next = newNode
        this.length++;
        return true;
    }
}

const linkedList = new LinkedList(10);

console.log(linkedList);
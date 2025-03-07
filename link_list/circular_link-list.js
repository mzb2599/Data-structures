//Circular link list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class List {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    //Add a newnode beyond current tail
    pushback(value) {
        let newNode = new Node(value);
        if(this.tail == null) { //first node
            this.head = newNode;
        } else {
            this.tail.next = newNode;//Link the nodes
        }
        this.tail = newNode;
        this.tail.next = this.head;
    }

    printforward() {
        let current = this.head;
        do {
            console.log(current.value);
            current = current.next;
        } while (current != this.head);
    }

    removeNode(value) {
        let prev = this.head;
        let current = this.head;
        do {
            if (value == current.value){
                //Value at start
                if(current == this.head) {
                    this.head = this.head.next;
                    this.tail.next = this.head;
                    return true;
                }
                //Value at the end
                if (current==this.tail){
                    this.tail = prev;
                    this.tail.next = this.head;
                    return true;
                }
                //Only one node
                if (this.head == this.tail){
                    this.head = null;
                    this.tail = null;
                    return true;
                }
                //Value somewhere in between
                prev.next = current.next;
                return true;
            }
        }while (current = current.next, current != this.head);
    }
}
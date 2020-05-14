class Node {
    constructor(value) {
        this.prev = null;
        this.value = value;
        this.next = null;
    }
}
//List holds a series of nodes
class List {
    constructor() {
        this.head = new Node(0);//Dummy head node
        this.tail = new Node(0);//Dummy tail node

        //Sentinel head and tail
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    //Create a node to be added
    pushback(value) {
        let newNode = new Node(value);

        //Add before Dummy tail
        newNode.prev = this.tail.prev;
        newNode.next = this.tail;//Just before tail
        this.tail.prev.next = newNode;
        this.tail.prev = newNode;
         
    }

    printforward() {
        for (let current = this.head.next; current!=this.tail; current = current.next) {
            console.log(current.value);
        }
    }

    printBackward() {
        for (let current = this.tail.prev; current!=this.head; current = current.prev) {
            console.log(current.value);

        }
    }
     
    removeNode(value) {
        for (let current = this.head; current; current = current.next){
            if (value==current.value) {
                current.prev.next = current.next;
                current.next.prev = current.prev;
            }
        }
    }
    //Value of node and node before which it is to be inserted
    Addnode_before(value, node) {
        let newNode=new Node(value)
        for (let current = this.head; current; current = current.next) {
            if (node == current.value) {
                current.prev.next = newNode;
                newNode.prev=current.prev
                current.prev = newNode;
                newNode.next = current;
                newNode.value=value
            }
        }
    }
}

let list = new List();
list.pushback(5);
list.pushback(1);
list.pushback(7);
list.removeNode(7);
//list.printforward();
list.Addnode_before(8, 1);
list.printforward();
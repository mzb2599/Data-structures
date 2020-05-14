class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}
//List keeps track of first and last node
class List{
    constructor(){
    this.head = null;
    this.tail = null;
}
//Add a newnode beyond current tail
    pushback(value){
    let newNode=new Node(value)
    if( this.tail == null){ //first node
        this.head = newNode;   
    }
    else {
        this.tail.next = newNode;//Link the nodes
    }
    this.tail = newNode;
    }

    printforward() {
        for (let current = this.head; current; current = current.next) {
            console.log(current.value);
        }
    }
    removeNode(value) {
        let prev=this.head
        for (let current = this.head; current;prev=current,current = current.next) {
            if (value == current.value) {
                //Got the value
                //Value at start
                if (current == this.head) {
                    this.head = this.head.next;
                    return true;
                }
                //Value at the end
                if (current == this.tail) {
                    this.tail = prev;
                    this.tail.next = null;
                    return true;
                }
                //Only one node
                if (this.head == this.tail) {
                    this.head = null;
                    this.tail = null;
                    return true;
                }
                //Value somewhere in between
                prev.next = current.next;
            }
        }
        return false;//Could not find the value
    }
}

let list = new List();
list.pushback(5);
list.pushback(1);
list.pushback(7);
list.removeNode(1);
list.printforward()
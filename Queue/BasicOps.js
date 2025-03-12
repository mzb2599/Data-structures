//Basic Queue implemenation using array
class Queue {
    constructor() {
        this.data = [];
    }

    enqueue(item) {
        this.data.push(item);
    }

    dequeue() {
        return this.data.shift();
    }

    front() {
        return this.data[0];
    }

    isEmpty() {
        return this.data.length === 0;
    }

    print() {
        console.log(this.data);
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print(); // [1,2,3]
queue.dequeue();
queue.print(); // [2,3]
console.log(queue.front()); // 2
console.log(queue.isEmpty()); // false
queue.dequeue();
queue.dequeue();
console.log(queue.isEmpty()); // true
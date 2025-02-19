//Basic Stack operations

class Stack{

    constructor(){
        this.items=[]
    }

    push(item){
        this.items.push(item)
    }

    pop(){
        return this.items.length ==0 ? "Under flow": this.items.pop()
    }

    peek(){
        return this.isEmpty() ? "Stack is Empty": this.items[ this.items.length - 1]
    }

    size(){
        return this.items.length
    }

    isEmpty(){
        return this.items.length ===0
    }

    printStack(){
        return this.items.join(" ")
    }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.printStack());

console.log(stack.pop());  // Output: 30
console.log(stack.peek()); // Output: 20
console.log(stack.size()); // Output: 2
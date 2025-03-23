class Stack{

    //Initialise an empty stack
    constructor() {
    this.st =[];
    }

    //Insert an element at the top of the stack
    pushback(value){
        this.st.push(value);
    }

    //Print the stack
    print() {
        for (var i = this.st.length-1;i>=0; i--) {
            console.log(this.st[i]);
        }
    }
    
    
    //Remove the element from the top of the stack
    pop_element() {
        console.log("Elemet removed from the stack is ", this.st[(this.st.length)-1] );
        this.st.pop();
    }
    
    
    //Element at the top of stack is given by peek
    peek() {
        console.log("Element at the top of the stack",this.st[(this.st.length) - 1]);
    }
}


stack =new Stack();
stack.pushback(5);
stack.pushback(1);
stack.pushback(7);
stack.pushback(9);
stack.print();
stack.pop_element();
stack.print();
stack.peek();

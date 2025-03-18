//Implementation of stack using link list

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class StackUsingLinkList{
    constructor(){
        this.head=null;
    }

    //push operation
    push(data){
        let newNode=new Node(data);
        if(!this.head){
            this.head=newNode;
        }else{
            newNode.next=this.head;
            this.head=newNode;
        }
    }

    //pop operation
    pop(){
        if(!this.head){
            return "Under flow";
        }else{
            let temp=this.head;
            this.head=this.head.next;
            return temp.data;
        }
    }

    //peek operation
    peek(){
        if(!this.head){
            return "Stack is Empty";
        }else{
            return this.head.data;
        }
    }

    //size of stack
    size(){
        let count=0;
        let current=this.head;
        while(current){
            count++;
            current=current.next;
        }
        return count;
    }

    //check if stack is empty
    isEmpty(){
        return this.size()===0;
    }

    // print stack
    printStack(){
        let current=this.head;
        let result="";
        while(current){
            result+=current.data+" ";
            current=current.next;
        }
        return result;
    }
}

let stack = new StackUsingLinkList();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.printStack());

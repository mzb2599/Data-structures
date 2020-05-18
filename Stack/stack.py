class Stack:
    #Initialise an empty stack
    def __init__(self):
        self.stack = []
    #MAIN MENU
    def Menu(self):
        print("Main Menu")
        print("-----------")
        print("1-Push")
        print("2-Pop")
        print("3-Peek")
        print("4-Display")
        print("5-Exit")
        choice = int(input("Enter the choice:"))
        while choice!=5:
            if choice==1:
                self.Push()
            elif choice == 2:
                self.pop_element()
            elif choice == 3:
                self.peek_element()
            elif choice == 4:
                self.print_stack()
            choice = int(input("Enter the choice:"))

    #Insert an element at the top of the stack
    def Push(self):
        value = int(input("Enter the value to insert at the top of the stack"))
        self.stack.append(value)


    #Print the stack
    def print_stack(self):
        for x in self.stack:
            print(x)


    #Remove the element from the top of the stack
    def pop_element(self):
        print("Element deleted from top of stack is",self.stack[len(self.stack)-1])
        self.stack.pop()

    #Element at the top of stack is given by peek
    def peek_element(self):
        print("Element at the top of the stack is",self.stack[len(self.stack)-1])

S = Stack()
S.Menu()

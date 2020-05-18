class Node:
    def __init__(self,value):
        self.value = value
        self.next = None

class List:
    def __init__(self):
        self.head = None
        self.tail = None
    #Create a ndoe to be added
    def pushback(self,value):
        newNode = Node(value)
        #If first node to be added
        if self.tail==None:
            self.head = newNode
        #Add beyond last node
        else:
            self.tail.next = newNode
        
        self.tail = newNode

    def printlist(self):
        node=self.head
        while node:
            print(node.value)
            node = node.next

    def remove_node(self,delete_value):
        prev_node=node = self.head
        while node:
            if delete_value == node.value:
                if delete_value==self.head.value:
                    self.head = self.head.next
                    return True
                if delete_value == self.tail.value:
                    prev_node.next = None
                    node = prev_node
                    return True
                if self.head == self.tail:
                    self.head = self.tail = None
                    return True
                prev_node.next = node.next
            prev_node = node
            node = node.next
        return False
    #To insert a node before a given node
    def insert_node_before(self, value, next_node):
        newNode = Node(value)
        prev_node = node = self.head
        while node:
            #check if value is present in list
            if next_node == node.value:
                #Check if its first value
                if node.value == self.head.value:
                    newNode.next = self.head
                    self.head = newNode
                else:
                    newNode.next = prev_node.next
                    prev_node.next = newNode
            prev_node=node
            node=node.next

    def insert_node_after(self, value, pre_node):
        newNode = Node(value)
        node = self.head
        while node:
            #check if value is present in list
            if pre_node == node.value:
                newNode.next = node.next
                node.next = newNode                    
             
            prev_node = node
            node = node.next
    
    def Menu(self):
        print("\t MAIN MENU \t")
        print("----------------------------------")
        print("1-Insert Node")
        print("----------------------------------")
        print("2-Insert node before a given node")
        print("----------------------------------")
        print("3-Insert node after a given node")
        print("----------------------------------")
        print("4-Remove node")
        print("----------------------------------")
        print("5-Print link list")
        print("----------------------------------")
        print("6-Exit")
        print("----------------------------------")
        choice = int(input())
        return(choice)
link_list = List()
while True:
    choice = link_list.Menu()
    if choice == 1:
        value = int(input("Enter the value: "))
        link_list.pushback(value)
    elif choice == 2:
        value = int(input("Enter the value: "))
        post_node = int(input("Enter the node before which it is to be inserted"))
        link_list.insert_node_before(value, post_node)
    elif choice == 3:
        value = int(input("Enter the value: "))
        pre_node = int(input("Enter the node after which it is to be inserted"))
        link_list.insert_node_after(value, pre_node)
    elif choice == 4:
        value = int(input("Enter the value: "))
        link_list.remove_node(value)
    elif choice == 5:
        link_list.printlist()
    elif choice == 6:
        exit()
  
    


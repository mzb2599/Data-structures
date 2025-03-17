//Binary Search tree implementation in JavaScript
//Binary Search tree is a binary tree in which all the children nodes of left child have value less than the parent node and all the children nodes of right child have value greater than the parent node.
//In this implementation, I have used ES6 class syntax to define the structure of the binary search tree.

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let newNode = new Node(data);
        //If the tree is empty then initialize the root with the new node.
        if (this.root === null) {
            this.root = newNode;
        } 
        //If the tree is not empty then find the correct position for the new node recursively
        else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        //If the data is less than the node data, move left of the tree
        if (newNode.data < node.data) {
            //If the left is null, insert the new node
            if (node.left === null) {
                node.left = newNode;
            } 
            //If the left is not null, recursively find the correct position for the new node
            else {
                this.insertNode(node.left, newNode);
            }
        } 
        //Else if the data is greater than the node data, move right of the tree
        else {
            //If the right is null, insert the new node
            if (node.right === null) {
                node.right = newNode;
            } 
            //If the right is not null, recursively find the correct position for the new node
            else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    //In order traversal of the tree
    //In this traversal method, the left subtree is visited first, then the root and later the right sub-tree.
    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, key) {
        //If the root is null then tree is empty
        if (node === null) {
            return null;
        } 
        //If data to be deleted is less than the root data, then move to the left subtree
        else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        //If data to be deleted is greater than the root data, then move to the right subtree
        else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        } 
        //If data is similar to the root's data then delete this node
        else {
            //Deleting node with no children
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            //Deleting node with one children
            if (node.left === null) {
                node = node.right;
                return node;
            } 
            //Node with only one child or no child
            else if (node.right === null) {
                node = node.left;
                return node;
            }
            //Node with two children
            //Smallest node of the right subtree is stored in aux
            let aux = this.findMinNode(node.right);
            node.data = aux.data;
            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }

    findMinNode(node) {
        //If left of a node is null, then it must be the minimum node
        if (node.left === null) {
            return node;
        } 
        //If left is not null then keep looking in the left subtree
        else {
            return this.findMinNode(node.left);
        }
    }
}

//Create an object for the BinarySearchTree
let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.remove(10);
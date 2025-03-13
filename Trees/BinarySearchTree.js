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
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

}

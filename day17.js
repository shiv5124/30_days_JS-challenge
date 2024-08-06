// Task 1

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const node1 = new Node(42);
const node2 = new Node(17);

node1.next = node2; // Linking nodes together

console.log(node1.value); // Output: 42
console.log(node1.next.value); // Output: 17


// Task 2

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Add a node to the end of the linked list
    addNodeToEnd(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Remove the last node from the linked list
    removeNodeFromEnd() {
        if (!this.head) {
            return; // Empty list, nothing to remove
        } else if (!this.head.next) {
            this.head = null; // Only one node, remove it
        } else {
            let current = this.head;
            while (current.next.next) {
                current = current.next;
            }
            current.next = null;
        }
    }

    // Display all nodes in the linked list
    displayNodes() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Example usage:
const myList = new LinkedList();
myList.addNodeToEnd(10);
myList.addNodeToEnd(20);
myList.addNodeToEnd(30);

myList.displayNodes(); // Output: 10, 20, 30

myList.removeNodeFromEnd();
myList.displayNodes(); // Output: 10, 20

// Task 3

class Stack {
    constructor() {
        this.items = [];
    }

    // Add an element to the top of the stack
    push(element) {
        this.items.push(element);
    }

    // Remove and return the top element from the stack
    pop() {
        if (this.items.length === 0) {
            return 'Underflow'; // Indicates an empty stack
        }
        return this.items.pop();
    }

    // Return the top element without removing it
    peek() {
        if (this.items.length === 0) {
            return null; // Stack is empty
        }
        return this.items[this.items.length - 1];
    }
}

// Example usage:
const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);

console.log(myStack.peek()); // Output: 30
console.log(myStack.pop()); // Output: 30
console.log(myStack.pop()); // Output: 20
console.log(myStack.pop()); // Output: 10
console.log(myStack.pop()); // Output: Underflow

// Task 4

class Stack {
    constructor() {
        this.elements = [];
    }

    push(element) {
        this.elements.push(element);
    }

    pop() {
        if (this.elements.length === 0) {
            return "Underflow situation"; // Indicates an empty stack
        }
        return this.elements.pop();
    }

    isEmpty() {
        return this.elements.length === 0;
    }
}

function reverse(str) {
    let stack = new Stack();
    let reversedStr = "";

    for (let i = 0; i < str.length; i++) {
        stack.push(str.charAt(i));
    }

    while (!stack.isEmpty()) {
        reversedStr += stack.pop();
    }

    return reversedStr;
}

// Example usage:
console.log(reverse("Hello, GFG!")); // Output: "!GFG ,olleH"

// Task 5

class Queue {
    constructor() {
        this.items = {};
        this.frontIndex = 0;
        this.backIndex = 0;
    }

    enqueue(item) {
        this.items[this.backIndex] = item;
        this.backIndex++;
        return item + ' inserted';
    }

    dequeue() {
        const item = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex++;
        return item;
    }

    peek() {
        return this.items[this.frontIndex];
    }
}

// Example usage:
const myQueue = new Queue();
console.log(myQueue.enqueue(7)); // Output: 7 inserted
console.log(myQueue.enqueue(2)); // Output: 2 inserted
console.log(myQueue.enqueue(6)); // Output: 6 inserted
console.log(myQueue.dequeue()); // Output: 7
console.log(myQueue.peek()); // Output: 2

// Task 6

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if (this.items.length === 0) {
            return 'Queue is empty';
        }
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

// Example usage:
const printerQueue = new Queue();

printerQueue.enqueue('Job 1');
printerQueue.enqueue('Job 2');
printerQueue.enqueue('Job 3');

console.log('Processing print jobs:');
while (!printerQueue.isEmpty()) {
    const currentJob = printerQueue.dequeue();
    console.log(`Processing ${currentJob}`);
}

// Task 7

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Example usage:
const rootNode = new TreeNode(10);
rootNode.left = new TreeNode(5);
rootNode.right = new TreeNode(15);

console.log(rootNode.value); // Output: 10
console.log(rootNode.left.value); // Output: 5
console.log(rootNode.right.value); // Output: 15

// Task 8

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Insert a new node with the given key
    insert(key) {
        this.root = this.insertRec(this.root, key);
    }

    // Recursive function to insert a new key in the binary tree
    insertRec(root, key) {
        if (root === null) {
            return new TreeNode(key);
        }
        if (key < root.value) {
            root.left = this.insertRec(root.left, key);
        } else if (key > root.value) {
            root.right = this.insertRec(root.right, key);
        }
        return root;
    }

    // In-order traversal of the binary tree
    inOrderTraversal() {
        this.inOrderRec(this.root);
    }

    // Recursive function for in-order traversal
    inOrderRec(node) {
        if (node !== null) {
            this.inOrderRec(node.left);
            console.log(node.value);
            this.inOrderRec(node.right);
        }
    }
}

// Example usage:
const myTree = new BinaryTree();
myTree.insert(50);
myTree.insert(30);
myTree.insert(20);
myTree.insert(40);
myTree.insert(70);
myTree.insert(60);
myTree.insert(80);

console.log("In-order traversal:");
myTree.inOrderTraversal(); // Output: 20 30 40 50 60 70 80

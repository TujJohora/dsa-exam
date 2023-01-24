//tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  //method one
  isEmpty() {
    return this.root === null;
  }
  //method two
  insert(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  preOrder(root) {
    if (root) {
      // 1st root
      console.log(root.value);
      // then  left
      this.preOrder(root.left);
      // then  right
      this.preOrder(root.right);
    }
  }
}
const bst = new BinarySearchTree();
//console.log(bst.isEmpty());

bst.insert(15);
bst.insert(10);
bst.insert(7);
bst.insert(3);
console.log(bst);
bst.preOrder(bst.root);

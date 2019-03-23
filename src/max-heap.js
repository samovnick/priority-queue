const Node = require("./node");

class MaxHeap {
  constructor() {
    this.root = null;
    this.parentNodes = [];
    this.allNodes = [];
  }

  push(data, priority) {
    this.insertNode(new Node(data, priority));
    this.shiftNodeUp(this.allNodes[this.allNodes.length - 1]);
  }

  pop() {
    if (this.isEmpty()) return;
    let node = this.root;
    this.detachRoot();
    this.restoreRootFromLastInsertedNode();
    this.shiftNodeDown();

    return node.data;
  }

  detachRoot() {
    let node = this.root;
    this.root = null;
    return node;
  }

  restoreRootFromLastInsertedNode(detached) {
    //зануляем ссылку у родителя
    let node = this.size() - 1;
    if (node.parent) {
      let parent = node.parent;
      if (parent.left == node) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }
    this.allNodes[0] = node;
    if (this.allNodes[1]) {
      this.allNodes[1].parent = node;
      node.left = this.allNodes[1];
    }
    if (this.allNodes[2]) {
      this.allNodes[2].parent = node;
      node.right = this.allNodes[2];
    }

    this.allNodes.pop();
  }

  size() {
    return this.allNodes.length;

    //return this.parentNodes.length;
  }

  isEmpty() {
    if (this.allNodes.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  clear() {
    this.parentNodes = [];
    this.root = null;
    this.allNodes = [];
  }

  insertNode(node) {
    //choice to place
    //first node
    if (!this.root) {
      this.allNodes.push(node);
    } else {
      this.allNodes.push(node);
      //ищем родителя
      let i = this.allNodes.length - 1;
      let indexParent = Math.floor((i - 1) / 2);
      this.allNodes[indexParent].appendChild(node);
      //if (this.allNodes[indexParent].right) this.parentNodes.pop();
    }
    this.root = this.allNodes[0];
  }

  shiftNodeUp(node) {
    let i = this.allNodes.length - 1;

    while (node.parent && i >= 0) {
      if (node.priority > node.parent.priority) {
        //let i = this.size() - 1;
        let indexParent = Math.floor((i - 1) / 2);
        let parent = this.allNodes[indexParent];
        node.swapWithParent();
        this.parentNodes[indexParent] = node;
        this.parentNodes[i] = parent;
        i = indexParent;
      } else return;
    }
  }

  shiftNodeDown(node) {
    /* let i = this.size() - 1;
    while (node.priority > node.parent.priority && node.parent) {
      node.swapWithParent();*/
  }
}

module.exports = MaxHeap;

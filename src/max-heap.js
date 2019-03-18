const Node = require("./node");

class MaxHeap {
  constructor() {
    this.heap = [];
    //this.root = null;
  }

  push(data, priority) {
    let node = new Node(data, priority);
    this.heap.push(node);
    this.heap.sort((a, b) => {
      a.priority - b.priority;
    });
  }

  pop() {
    return this.heap.pop();
  }

  detachRoot() {
    return this.heap.shift();
  }

  restoreRootFromLastInsertedNode(detached) {
    this.heap.unshift(detached);
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length == 0 ? true : false;
  }

  clear() {
    this.heap.length = 0;
  }

  insertNode(node) {
    this.heap.push(node);
    this.heap.sort((a, b) => {
      a.priority - b.priority;
    });
  }

  shiftNodeUp(node) {
    return this.heap.shift();
  }

  shiftNodeDown(node) {
    return this.heap.pop();
  }
}

module.exports = MaxHeap;

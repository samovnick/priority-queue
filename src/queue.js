const MaxHeap = require("./max-heap.js");

class PriorityQueue {
  constructor(maxSize = 30) {
    this.heap = new MaxHeap();
    this.maxSize = maxSize;
  }

  push(data, priority) {
    if (this.heap.size() == this.maxSize) {
      throw "error!!!";
    }
    this.heap.push(data, priority);
  }

  shift() {
    if (this.heap.isEmpty()) {
      throw "error!!!";
    }
    return this.heap.pop();
  }

  size() {
    return this.heap.size();
  }

  isEmpty() {
    return this.heap.isEmpty();
  }
}

module.exports = PriorityQueue;

const MaxHeap = require("./max-heap.js");

class PriorityQueue {
  constructor(maxSize) {
    this.queue = new MaxHeap();
    this.length = maxSize;
  }

  push(data, priority) {
    if (this.queue.size() < this.length) {
      this.queue.push(data, priority);
    }
  }

  shift() {
    return this.queue.shiftNodeUp();
  }

  size() {
    return this.queue.size();
  }

  isEmpty() {
    return this.queue.isEmpty();
  }
}

module.exports = PriorityQueue;

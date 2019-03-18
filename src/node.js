class Node {
  constructor(data, priority) {
    this.data - data;
    this.priority = priority;
    this.child = null;
  }

  appendChild(node) {
    this.child = node;
  }

  removeChild(node) {
    this.child = null;
  }

  remove() {
    delete this.child;
  }

  swapWithParent() {
    let temp = this.data;
    this.data = this.child.data;
    this.child.data = temp;
    temp = this.priority;
    this.priority = this.child.priority;
    this.child.priority = temp;
  }
}

module.exports = Node;

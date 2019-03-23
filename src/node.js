class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.parent = null;
    this.left = null;
    this.right = null;
  }

  appendChild(node) {
    node.parent = this;
    if (this.left == null) {
      this.left = node;
    } else if (this.right == null) {
      this.right = node;
    }
  }

  removeChild(node) {
    if (this.left == node) {
      this.left = null;
    } else if (this.right == node) {
      this.right = null;
    } else {
      throw "error!!!";
    }
    node.parent = null;
  }

  remove() {
    if (this.parent) {
      this.parent.removeChild(this);
    }
  }

  swapWithParent() {
    //if child
    if (this.parent) {
      if (this.parent.left == this) {
        //refresh links
        let tmp = this.parent.right;

        //поменяли у родителя ссылки на дочерние
        this.parent.left = this.left;
        this.parent.right = this.right;

        //меняем родителя у дочерних вставляемого узла
        if (this.left) this.left.parent = this.parent;
        if (this.right) this.right.parent = this.parent;

        //подсоединяем правую ветку родителя
        if (tmp) {
          this.right = tmp;
          tmp.parent = this;
        }
        //в левую записываем родителя
        this.left = this.parent;

        //меняем связи у родителя родителя
        tmp = this.parent.parent;

        this.parent.parent = this;

        //parent has parent
        if (tmp) {
          if (tmp.left == this.parent) {
            tmp.left = this;
            this.parent = tmp;
          } else if (tmp.right == this.parent) {
            tmp.right = this;
            this.parent = tmp;
          }
        } else this.parent = null;
        tmp = null;
      } else {
        //refresh links
        let tmp = this.parent.left;
        //поменяли у родителя ссылки на дочерние
        this.parent.left = this.left;
        this.parent.right = this.right;
        //меняем родителя у дочерних вставляемого узла
        if (this.left) this.left.parent = this.parent;
        if (this.right) this.right.parent = this.parent;
        //если есть дочерний меняем родителя
        if (tmp) {
          this.left = tmp;
          tmp.parent = this;
        }
        this.right = this.parent;

        //меняем ссылки родителя родителя
        tmp = this.parent.parent;

        this.parent.parent = this;

        //parent has parent
        if (tmp) {
          if (tmp.left == this.parent) {
            tmp.left = this;
            this.parent = tmp;
          } else if (tmp.right == this.parent) {
            tmp.right = this;
            this.parent = tmp;
          }
        } else this.parent = null;
        tmp = null;
      }
    }
  }
}

module.exports = Node;

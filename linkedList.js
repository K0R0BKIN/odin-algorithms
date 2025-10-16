class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.tail = this.head = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.tail = this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  size() {
    return this.length;
  }

  at(index) {
    if (index < 0) return null;
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) return current;
      count++;
      current = current.next;
    }
    return null;
  }

  pop() {
    if (!this.head) return null;
    if (this.head === this.tail) {
      const node = this.head;
      this.head = this.tail = null;
      this.length = 0;
      return node;
    }
    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }
    const node = this.tail;
    this.tail = current;
    this.tail.next = null;
    this.length--;
    return node;
  }

  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }
    return -1;
  }

  toString() {
    let current = this.head;
    let str = "";
    while (current) {
      str += `( ${current.value} )  -> `;
      current = current.next;
    }
    str += "null";
    return str;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

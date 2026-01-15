/*
  Day 6 - Solution: Linked List
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }
  
  get size() {
    return this._size;
  }
  
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this._size++;
    return this;
  }
  
  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    if (!this.tail) this.tail = node;
    this._size++;
    return this;
  }
  
  delete(value) {
    if (!this.head) return null;
    
    if (this.head.value === value) {
      this.head = this.head.next;
      this._size--;
      return this;
    }
    
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        this._size--;
        return this;
      }
      current = current.next;
    }
    return null;
  }
  
  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return current;
      current = current.next;
    }
    return null;
  }
  
  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
  
  *[Symbol.iterator]() {
    let current = this.head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
}

// Test
const list = new LinkedList();
list.append(1).append(2).append(3);
console.log([...list]); // [1, 2, 3]
for (const val of list) console.log(val);

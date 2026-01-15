/*
  Day 6 - Classes & Inheritance
  Exercise: Linked List with Iterator Protocol
  
  Implement a LinkedList class that supports the JavaScript iterator protocol,
  allowing it to be used with for...of loops and spread operator.
  
  Requirements:
  1. Node class (internal):
     - value property
     - next property (reference to next node)
     
  2. LinkedList class:
     - append(value): add to end
     - prepend(value): add to beginning
     - delete(value): remove first occurrence
     - find(value): return node with value or null
     - toArray(): convert to array
     - size: getter for length
     - [Symbol.iterator](): make list iterable
     
  Bonus:
     - insertAt(index, value): insert at specific position
     - reverse(): reverse the list in place
     - static fromArray(arr): create list from array
  
  Example:
    const list = new LinkedList();
    list.append(1).append(2).append(3);
    
    for (const value of list) {
      console.log(value); // 1, 2, 3
    }
    
    console.log([...list]); // [1, 2, 3]
*/

class Node {
  // Your implementation here
}

class LinkedList {
  // Your implementation here
}

// Test cases
const list = new LinkedList();

// Test append (should be chainable)
list.append(1).append(2).append(3);
console.log('After append 1,2,3:', list.toArray()); // [1, 2, 3]
console.log('Size:', list.size); // 3

// Test prepend
list.prepend(0);
console.log('After prepend 0:', list.toArray()); // [0, 1, 2, 3]

// Test iterator with for...of
console.log('\nIterating with for...of:');
for (const value of list) {
  console.log(value);
}

// Test spread operator
console.log('\nSpread operator:', [...list]); // [0, 1, 2, 3]

// Test find
console.log('\nFind 2:', list.find(2)); // Node { value: 2, next: Node }
console.log('Find 99:', list.find(99)); // null

// Test delete
list.delete(2);
console.log('After delete 2:', list.toArray()); // [0, 1, 3]

list.delete(0);
console.log('After delete 0 (head):', list.toArray()); // [1, 3]

// Test with Array methods via spread
const doubled = [...list].map(x => x * 2);
console.log('\nDoubled values:', doubled); // [2, 6]

// Bonus tests (if implemented)
// list.insertAt(1, 99);
// console.log('After insertAt(1, 99):', list.toArray()); // [1, 99, 3]

// list.reverse();
// console.log('After reverse:', list.toArray());

// const list2 = LinkedList.fromArray([5, 6, 7]);
// console.log('From array:', list2.toArray()); // [5, 6, 7]

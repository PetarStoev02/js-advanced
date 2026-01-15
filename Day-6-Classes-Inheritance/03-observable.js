/*
  Day 6 - Classes & Inheritance
  Exercise: Observable (Reactive Pattern)
  
  Create an Observable class that implements reactive data binding.
  When the value changes, all subscribers are automatically notified.
  
  Requirements:
  1. Observable class:
     - Constructor takes initial value
     - get value: returns current value
     - set value: updates value and notifies all subscribers
     - subscribe(callback): adds subscriber, returns unsubscribe function
     - getValue(): alternative getter
     - setValue(newValue): alternative setter
     
  2. ComputedObservable class (extends Observable):
     - Constructor takes array of observables and compute function
     - Value is automatically computed from dependencies
     - Updates when any dependency changes
  
  Example:
    const name = new Observable('John');
    const unsubscribe = name.subscribe(val => console.log('Name changed:', val));
    
    name.value = 'Jane'; // Logs: "Name changed: Jane"
    unsubscribe();
    name.value = 'Bob';  // No log (unsubscribed)
*/

class Observable {
  // Your implementation here
}

class ComputedObservable extends Observable {
  // Your implementation here
}

// Test Observable
console.log('--- Basic Observable ---');
const counter = new Observable(0);

const unsub1 = counter.subscribe(val => console.log('Subscriber 1:', val));
const unsub2 = counter.subscribe(val => console.log('Subscriber 2:', val));

counter.value = 1;
// Expected:
// Subscriber 1: 1
// Subscriber 2: 1

counter.value = 2;
// Expected:
// Subscriber 1: 2
// Subscriber 2: 2

unsub1(); // Unsubscribe first subscriber

counter.value = 3;
// Expected:
// Subscriber 2: 3

console.log('\nCurrent value:', counter.value); // 3

// Test ComputedObservable
console.log('\n--- Computed Observable ---');
const firstName = new Observable('John');
const lastName = new Observable('Doe');

const fullName = new ComputedObservable(
  [firstName, lastName],
  (first, last) => `${first} ${last}`
);

fullName.subscribe(val => console.log('Full name:', val));

console.log('Initial full name:', fullName.value); // "John Doe"

firstName.value = 'Jane';
// Expected: "Full name: Jane Doe"

lastName.value = 'Smith';
// Expected: "Full name: Jane Smith"

// Test with numbers
console.log('\n--- Computed with Numbers ---');
const width = new Observable(10);
const height = new Observable(5);

const area = new ComputedObservable(
  [width, height],
  (w, h) => w * h
);

area.subscribe(val => console.log('Area changed:', val));

console.log('Initial area:', area.value); // 50
width.value = 20; // Area changed: 100
height.value = 10; // Area changed: 200

/*
  Day 5 - Closures & Scope
  Exercise: Counter Factory
  
  Create a function `createCounter` that returns an object with three methods:
  - increment(): increases the internal count by 1 and returns the new value
  - decrement(): decreases the internal count by 1 and returns the new value  
  - reset(): resets the count to the initial value and returns it
  
  The internal count should be private (not accessible from outside).
  The counter should accept an optional starting value (default: 0).
  
  Example:
    const counter = createCounter(10);
    console.log(counter.increment()); // 11
    console.log(counter.increment()); // 12
    console.log(counter.decrement()); // 11
    console.log(counter.reset());     // 10
    
  Bonus: Add a `getCount()` method that returns current value without changing it.
*/

function createCounter(initialValue = 0) {
  // Your implementation here
}

// Test cases
const counter1 = createCounter();
console.log(counter1.increment()); // Expected: 1
console.log(counter1.increment()); // Expected: 2
console.log(counter1.decrement()); // Expected: 1
console.log(counter1.reset());     // Expected: 0

const counter2 = createCounter(100);
console.log(counter2.decrement()); // Expected: 99
console.log(counter2.decrement()); // Expected: 98
console.log(counter2.reset());     // Expected: 100

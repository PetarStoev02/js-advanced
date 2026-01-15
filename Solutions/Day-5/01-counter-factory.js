/*
  Day 5 - Solution: Counter Factory
*/

function createCounter(initialValue = 0) {
  let count = initialValue;
  const initial = initialValue;
  
  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    },
    reset() {
      count = initial;
      return count;
    },
    getCount() {
      return count;
    }
  };
}

// Test
const counter1 = createCounter();
console.log(counter1.increment()); // 1
console.log(counter1.increment()); // 2
console.log(counter1.decrement()); // 1
console.log(counter1.reset());     // 0

const counter2 = createCounter(100);
console.log(counter2.decrement()); // 99
console.log(counter2.reset());     // 100

/*
  Day 5 - Closures & Scope
  Exercise: Function Currying
  
  Implement a `curry` function that transforms a function with multiple arguments
  into a sequence of functions each taking a single argument.
  
  Requirements:
  - curry(fn) should return a curried version of fn
  - Should work with functions of any arity (number of arguments)
  - Should allow partial application
  
  Example:
    function add(a, b, c) {
      return a + b + c;
    }
    
    const curriedAdd = curry(add);
    
    // All these should return 6:
    curriedAdd(1)(2)(3);
    curriedAdd(1, 2)(3);
    curriedAdd(1)(2, 3);
    curriedAdd(1, 2, 3);
    
  Bonus: Implement a `partial` function for partial application from the left.
*/

function curry(fn) {
  // Your implementation here
}

// Test functions
function add(a, b, c) {
  return a + b + c;
}

function multiply(a, b, c, d) {
  return a * b * c * d;
}

function greet(greeting, punctuation, name) {
  return `${greeting}, ${name}${punctuation}`;
}

// Test curry
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3));     // Expected: 6
console.log(curriedAdd(1, 2)(3));     // Expected: 6
console.log(curriedAdd(1)(2, 3));     // Expected: 6
console.log(curriedAdd(1, 2, 3));     // Expected: 6

const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)(4)(5)); // Expected: 120
console.log(curriedMultiply(2, 3)(4, 5)); // Expected: 120

const curriedGreet = curry(greet);
const sayHello = curriedGreet('Hello');
const sayHelloExcitedly = sayHello('!');
console.log(sayHelloExcitedly('World')); // Expected: "Hello, World!"
console.log(sayHello('.', 'John'));      // Expected: "Hello, John."

// Bonus: Implement partial
function partial(fn, ...presetArgs) {
  // Your implementation here
}

// Test partial
const addFive = partial(add, 5);
console.log(addFive(3, 2)); // Expected: 10

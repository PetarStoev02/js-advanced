/*
  Day 5 - Solution: Function Currying
*/

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...nextArgs) {
      return curried.apply(this, args.concat(nextArgs));
    };
  };
}

function partial(fn, ...presetArgs) {
  return function(...remainingArgs) {
    return fn.apply(this, [...presetArgs, ...remainingArgs]);
  };
}

// Test curry
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3));     // 6
console.log(curriedAdd(1, 2)(3));     // 6
console.log(curriedAdd(1)(2, 3));     // 6
console.log(curriedAdd(1, 2, 3));     // 6

// Test partial
const addFive = partial(add, 5);
console.log(addFive(3, 2)); // 10

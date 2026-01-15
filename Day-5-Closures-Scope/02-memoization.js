/*
  Day 5 - Closures & Scope
  Exercise: Memoization
  
  Implement a `memoize` function that caches the results of expensive function calls.
  When called with the same arguments, it should return the cached result instead
  of recalculating.
  
  Requirements:
  - Works with functions that take any number of arguments
  - Cache key should be based on all arguments
  - Should work with primitive arguments (numbers, strings)
  
  Example:
    const expensiveAdd = (a, b) => {
      console.log('Computing...');
      return a + b;
    };
    
    const memoizedAdd = memoize(expensiveAdd);
    console.log(memoizedAdd(1, 2)); // Logs "Computing..." then 3
    console.log(memoizedAdd(1, 2)); // Just returns 3 (cached)
    console.log(memoizedAdd(2, 3)); // Logs "Computing..." then 5
    
  Bonus: Add a method to clear the cache or view cache size.
*/

function memoize(fn) {
  // Your implementation here
}

// Test with fibonacci (expensive recursive function)
function fibonacci(n) {
  console.log(`Computing fib(${n})`);
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Without memoization - very slow for large numbers
// console.log(fibonacci(10));

// With memoization - should be much faster
const memoizedFib = memoize(function fib(n) {
  console.log(`Computing fib(${n})`);
  if (n <= 1) return n;
  return memoizedFib(n - 1) + memoizedFib(n - 2);
});

console.log(memoizedFib(10)); // Should only compute each value once
console.log(memoizedFib(10)); // Should return cached result immediately

// Test with multiple arguments
const multiply = memoize((a, b, c) => {
  console.log(`Multiplying ${a} * ${b} * ${c}`);
  return a * b * c;
});

console.log(multiply(2, 3, 4)); // Computing...
console.log(multiply(2, 3, 4)); // Cached
console.log(multiply(3, 4, 5)); // Computing...

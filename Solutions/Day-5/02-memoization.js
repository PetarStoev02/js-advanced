/*
  Day 5 - Solution: Memoization
*/

function memoize(fn) {
  const cache = new Map();
  
  const memoized = function(...args) {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key);
    }
    
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
  
  memoized.clearCache = () => cache.clear();
  memoized.cacheSize = () => cache.size;
  
  return memoized;
}

// Test
const memoizedFib = memoize(function fib(n) {
  console.log(`Computing fib(${n})`);
  if (n <= 1) return n;
  return memoizedFib(n - 1) + memoizedFib(n - 2);
});

console.log(memoizedFib(10)); // Computes each value once
console.log(memoizedFib(10)); // Returns cached

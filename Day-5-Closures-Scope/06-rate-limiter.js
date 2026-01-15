/*
  Day 5 - Closures & Scope
  Exercise: Rate Limiter (Throttle & Debounce)
  
  Implement two essential rate-limiting functions using closures:
  
  1. throttle(fn, delay): 
     - Executes fn at most once per delay milliseconds
     - First call executes immediately
     - Subsequent calls within delay period are ignored
     
  2. debounce(fn, delay):
     - Delays execution until delay ms have passed since last call
     - Each new call resets the timer
     - Only the final call in a burst gets executed
  
  Example:
    const throttledLog = throttle(console.log, 1000);
    throttledLog('A'); // Logs 'A' immediately
    throttledLog('B'); // Ignored (within 1000ms)
    throttledLog('C'); // Ignored
    // After 1000ms, next call will work
    
    const debouncedSearch = debounce((query) => console.log('Searching:', query), 300);
    debouncedSearch('h');
    debouncedSearch('he');
    debouncedSearch('hel');
    debouncedSearch('hello'); // Only this one executes (after 300ms of no calls)
  
  Bonus: Add a `cancel()` method to both returned functions.
*/

function throttle(fn, delay) {
  // Your implementation here
}

function debounce(fn, delay) {
  // Your implementation here
}

// Test throttle
console.log('--- Testing Throttle ---');
let throttleCount = 0;
const throttledFn = throttle(() => {
  throttleCount++;
  console.log(`Throttled call #${throttleCount} at ${Date.now()}`);
}, 1000);

// Simulate rapid calls
throttledFn(); // Should execute immediately
throttledFn(); // Should be ignored
throttledFn(); // Should be ignored

setTimeout(() => {
  console.log('\n--- After 1.5 seconds ---');
  throttledFn(); // Should execute
  throttledFn(); // Should be ignored
}, 1500);

// Test debounce
console.log('\n--- Testing Debounce ---');
let debounceCount = 0;
const debouncedFn = debounce((value) => {
  debounceCount++;
  console.log(`Debounced call #${debounceCount} with value: ${value}`);
}, 500);

// Simulate typing
debouncedFn('h');
setTimeout(() => debouncedFn('he'), 100);
setTimeout(() => debouncedFn('hel'), 200);
setTimeout(() => debouncedFn('hell'), 300);
setTimeout(() => debouncedFn('hello'), 400);
// Only 'hello' should be logged after 500ms from last call

// Verify only one call was made
setTimeout(() => {
  console.log(`\nTotal debounced executions: ${debounceCount}`); // Should be 1
}, 1500);

// Practical example: Window resize handler
// const handleResize = debounce(() => {
//   console.log('Window resized to:', window.innerWidth, window.innerHeight);
// }, 250);
// window.addEventListener('resize', handleResize);

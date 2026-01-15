/*
  Day 5 - Solution: Rate Limiter
*/

function throttle(fn, delay) {
  let lastCall = 0;
  let timeoutId = null;
  
  const throttled = function(...args) {
    const now = Date.now();
    
    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
  
  throttled.cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };
  
  return throttled;
}

function debounce(fn, delay) {
  let timeoutId = null;
  
  const debounced = function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
  
  debounced.cancel = () => {
    clearTimeout(timeoutId);
    timeoutId = null;
  };
  
  return debounced;
}

// Test throttle
const throttledLog = throttle(() => console.log('Throttled!'), 1000);
throttledLog(); // Executes
throttledLog(); // Ignored
throttledLog(); // Ignored

// Test debounce
const debouncedSearch = debounce((q) => console.log('Searching:', q), 300);
debouncedSearch('h');
debouncedSearch('he');
debouncedSearch('hello'); // Only this executes after 300ms

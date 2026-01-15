/*
  Day 7 - Solution: Race with Timeout
*/

class TimeoutError extends Error {
  constructor(message, ms) {
    super(message);
    this.name = 'TimeoutError';
    this.timeout = ms;
  }
}

function withTimeout(promise, ms, message) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new TimeoutError(message || `Operation timed out after ${ms}ms`, ms));
    }, ms);
  });
  
  return Promise.race([promise, timeoutPromise]);
}

function timeoutRace(promises, ms) {
  return withTimeout(Promise.race(promises), ms, `No promise settled within ${ms}ms`);
}

// Test
const delay = (ms, val) => new Promise(r => setTimeout(() => r(val), ms));

withTimeout(delay(100, 'fast'), 500)
  .then(console.log); // 'fast'

withTimeout(delay(1000, 'slow'), 200)
  .catch(e => console.log(e.message)); // timeout

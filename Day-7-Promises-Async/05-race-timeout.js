/*
  Day 7 - Promises & Async
  Exercise: Race with Timeout
  
  Implement utility functions for handling promise timeouts.
  
  Requirements:
  1. withTimeout(promise, ms, message):
     - Returns promise that rejects if original doesn't resolve within ms
     - Custom error message optional
     
  2. timeoutRace(promises, ms):
     - Like Promise.race but with a timeout
     - Rejects if no promise settles within ms
     
  3. fetchWithTimeout(url, options, timeout):
     - Wrapper around fetch with timeout support
     - Aborts the fetch on timeout (using AbortController)
  
  Example:
    const slowPromise = new Promise(r => setTimeout(() => r('done'), 5000));
    
    try {
      await withTimeout(slowPromise, 1000);
    } catch (e) {
      console.log(e.message); // "Operation timed out after 1000ms"
    }
*/

function withTimeout(promise, ms, message) {
  // Your implementation here
}

function timeoutRace(promises, ms) {
  // Your implementation here
}

// For Node.js environment simulation
async function fetchWithTimeout(url, options = {}, timeout = 5000) {
  // Your implementation here
  // Note: In browser, use AbortController
  // In Node.js, simulate with setTimeout
}

// Custom TimeoutError class
class TimeoutError extends Error {
  constructor(message, ms) {
    super(message);
    this.name = 'TimeoutError';
    this.timeout = ms;
  }
}

// Helper
const delay = (ms, value) => new Promise(r => setTimeout(() => r(value), ms));

// Test 1: withTimeout - success within time
console.log('--- Test 1: withTimeout Success ---');
(async () => {
  const fastPromise = delay(100, 'fast result');
  
  try {
    const result = await withTimeout(fastPromise, 500);
    console.log('Result:', result); // 'fast result'
  } catch (e) {
    console.log('Error:', e.message);
  }
})();

// Test 2: withTimeout - timeout exceeded
console.log('\n--- Test 2: withTimeout Exceeded ---');
setTimeout(async () => {
  const slowPromise = delay(1000, 'slow result');
  
  try {
    const result = await withTimeout(slowPromise, 200, 'Custom timeout message');
    console.log('Result:', result);
  } catch (e) {
    console.log('Timeout error:', e.message);
    // Expected: 'Custom timeout message' or default message
  }
}, 500);

// Test 3: timeoutRace - one wins before timeout
console.log('\n--- Test 3: timeoutRace Success ---');
setTimeout(async () => {
  const promises = [
    delay(300, 'slow'),
    delay(100, 'fast'),
    delay(200, 'medium')
  ];
  
  try {
    const result = await timeoutRace(promises, 500);
    console.log('Winner:', result); // 'fast'
  } catch (e) {
    console.log('Error:', e.message);
  }
}, 1000);

// Test 4: timeoutRace - all too slow
console.log('\n--- Test 4: timeoutRace All Too Slow ---');
setTimeout(async () => {
  const promises = [
    delay(500, 'a'),
    delay(600, 'b'),
    delay(700, 'c')
  ];
  
  try {
    const result = await timeoutRace(promises, 200);
    console.log('Winner:', result);
  } catch (e) {
    console.log('Timeout - no winner:', e.message);
  }
}, 1500);

// Test 5: Practical example - API call with timeout
console.log('\n--- Test 5: Simulated API with Timeout ---');
setTimeout(async () => {
  // Simulate API that might be slow
  const simulatedFetch = async (url) => {
    const latency = Math.random() * 400 + 100; // 100-500ms
    await delay(latency);
    return { url, data: 'response', latency: Math.round(latency) };
  };
  
  const urls = ['/api/users', '/api/posts', '/api/comments'];
  
  for (const url of urls) {
    try {
      const result = await withTimeout(simulatedFetch(url), 300);
      console.log(`  ${url}: Success in ${result.latency}ms`);
    } catch (e) {
      console.log(`  ${url}: Timed out`);
    }
  }
}, 2500);

// Test 6: Cancellation pattern
console.log('\n--- Test 6: Cancellation Pattern ---');
setTimeout(async () => {
  // Demonstrate how to cancel ongoing work
  let cancelled = false;
  
  const cancellableTask = async () => {
    for (let i = 0; i < 10; i++) {
      if (cancelled) {
        throw new Error('Task was cancelled');
      }
      await delay(100);
      console.log(`  Step ${i + 1}/10`);
    }
    return 'completed';
  };
  
  const taskPromise = cancellableTask();
  
  // Cancel after 350ms
  setTimeout(() => {
    console.log('  Requesting cancellation...');
    cancelled = true;
  }, 350);
  
  try {
    await taskPromise;
  } catch (e) {
    console.log('Task ended:', e.message);
  }
}, 4000);

/*
  Day 7 - Promises & Async
  Exercise: Retry with Exponential Backoff
  
  Implement a retry function that attempts an async operation multiple times
  with exponential backoff between attempts.
  
  Requirements:
  1. retry(fn, options):
     - fn: async function to retry
     - options.maxAttempts: maximum number of attempts (default: 3)
     - options.initialDelay: first retry delay in ms (default: 1000)
     - options.maxDelay: maximum delay between retries (default: 30000)
     - options.factor: multiplier for each retry (default: 2)
     - options.onRetry: callback(error, attempt) called before each retry
     
  2. Exponential backoff formula:
     delay = min(initialDelay * (factor ^ attempt), maxDelay)
     
  3. Should add jitter (randomness) to prevent thundering herd
  
  Example:
    const fetchData = async () => {
      // Simulated API call that might fail
      if (Math.random() < 0.7) throw new Error('Network error');
      return { data: 'success' };
    };
    
    const result = await retry(fetchData, {
      maxAttempts: 5,
      initialDelay: 1000,
      onRetry: (err, attempt) => console.log(`Retry ${attempt}: ${err.message}`)
    });
*/

async function retry(fn, options = {}) {
  // Your implementation here
}

// Add jitter to delay
function addJitter(delay, jitterFactor = 0.1) {
  // Your implementation here
}

// Test setup - Simulated unreliable API
let attemptCount = 0;
const unreliableApi = async () => {
  attemptCount++;
  console.log(`  API attempt #${attemptCount}`);
  
  // Fail first 2 attempts, succeed on 3rd
  if (attemptCount < 3) {
    throw new Error(`Simulated failure #${attemptCount}`);
  }
  return { data: 'Success!', attempts: attemptCount };
};

// Test 1: Basic retry
console.log('--- Test 1: Basic Retry ---');
(async () => {
  attemptCount = 0;
  
  try {
    const result = await retry(unreliableApi, {
      maxAttempts: 5,
      initialDelay: 100,
      onRetry: (error, attempt) => {
        console.log(`  Retry ${attempt}: ${error.message}`);
      }
    });
    console.log('Result:', result);
  } catch (error) {
    console.log('Final error:', error.message);
  }
})();

// Test 2: Max attempts exceeded
console.log('\n--- Test 2: Max Attempts Exceeded ---');
setTimeout(async () => {
  const alwaysFails = async () => {
    throw new Error('Always fails');
  };
  
  try {
    await retry(alwaysFails, {
      maxAttempts: 3,
      initialDelay: 50,
      onRetry: (error, attempt) => {
        console.log(`  Retry ${attempt}: ${error.message}`);
      }
    });
  } catch (error) {
    console.log('Correctly failed after max attempts:', error.message);
  }
}, 1000);

// Test 3: Immediate success (no retries needed)
console.log('\n--- Test 3: Immediate Success ---');
setTimeout(async () => {
  const alwaysSucceeds = async () => ({ success: true });
  
  const result = await retry(alwaysSucceeds, {
    maxAttempts: 3,
    onRetry: () => console.log('Should not retry')
  });
  console.log('Immediate success:', result);
}, 2000);

// Test 4: Exponential backoff timing
console.log('\n--- Test 4: Backoff Timing ---');
setTimeout(async () => {
  let lastTime = Date.now();
  let callCount = 0;
  
  const timedFailure = async () => {
    const now = Date.now();
    const elapsed = now - lastTime;
    console.log(`  Call ${++callCount}, elapsed: ${elapsed}ms`);
    lastTime = now;
    if (callCount < 4) throw new Error('Fail');
    return 'done';
  };
  
  await retry(timedFailure, {
    maxAttempts: 5,
    initialDelay: 100,
    factor: 2
  });
  // Expected delays: ~100ms, ~200ms, ~400ms
}, 3000);

/*
  Day 7 - Solution: Retry with Backoff
*/

async function retry(fn, options = {}) {
  const {
    maxAttempts = 3,
    initialDelay = 1000,
    maxDelay = 30000,
    factor = 2,
    onRetry = () => {}
  } = options;
  
  let lastError;
  
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      
      if (attempt === maxAttempts) {
        throw error;
      }
      
      const delay = Math.min(initialDelay * Math.pow(factor, attempt - 1), maxDelay);
      const jitter = delay * 0.1 * Math.random();
      
      onRetry(error, attempt);
      await new Promise(r => setTimeout(r, delay + jitter));
    }
  }
  
  throw lastError;
}

// Test
let count = 0;
retry(async () => {
  count++;
  if (count < 3) throw new Error('Fail');
  return 'Success';
}, {
  maxAttempts: 5,
  initialDelay: 100,
  onRetry: (e, a) => console.log(`Retry ${a}`)
}).then(console.log);

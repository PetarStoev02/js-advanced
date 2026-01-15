/*
  Day 7 - Promises & Async
  Exercise: Parallel Limiter (Concurrency Control)
  
  Implement a function that runs promises with limited concurrency.
  This is useful for rate-limiting API calls or database connections.
  
  Requirements:
  1. parallelLimit(tasks, limit):
     - tasks: array of functions that return promises
     - limit: maximum concurrent executions
     - Returns promise with array of all results (in order)
     
  2. PromisePool class (alternative implementation):
     - Constructor takes concurrency limit
     - add(task): adds task to pool
     - run(): executes all tasks with limit
     - onProgress(callback): progress updates
  
  Example:
    const tasks = urls.map(url => () => fetch(url));
    
    // Only 3 concurrent requests at a time
    const results = await parallelLimit(tasks, 3);
*/

async function parallelLimit(tasks, limit) {
  // Your implementation here
}

class PromisePool {
  // Your implementation here
}

// Helper to create delayed task
const createTask = (id, duration) => async () => {
  console.log(`  Task ${id} started`);
  await new Promise(r => setTimeout(r, duration));
  console.log(`  Task ${id} completed`);
  return `Result ${id}`;
};

// Test 1: Basic parallel limit
console.log('--- Test 1: parallelLimit with 2 concurrent ---');
(async () => {
  const tasks = [
    createTask(1, 300),
    createTask(2, 200),
    createTask(3, 400),
    createTask(4, 100),
    createTask(5, 250)
  ];
  
  console.log('Starting with limit=2...');
  const startTime = Date.now();
  
  const results = await parallelLimit(tasks, 2);
  
  console.log('Results:', results);
  console.log(`Total time: ${Date.now() - startTime}ms`);
  // With limit=2, should take ~700-800ms instead of 1250ms sequential
})();

// Test 2: Promise Pool class
console.log('\n--- Test 2: PromisePool class ---');
setTimeout(async () => {
  const pool = new PromisePool(3);
  
  // Add tasks
  for (let i = 1; i <= 6; i++) {
    pool.add(createTask(i, 100 * i));
  }
  
  pool.onProgress && pool.onProgress((completed, total) => {
    console.log(`  Progress: ${completed}/${total}`);
  });
  
  console.log('Running pool with limit=3...');
  const results = await pool.run();
  console.log('Pool results:', results);
}, 2000);

// Test 3: Real-world simulation - API rate limiting
console.log('\n--- Test 3: API Rate Limiting Simulation ---');
setTimeout(async () => {
  // Simulate API calls
  const apiCall = (endpoint) => async () => {
    const delay = Math.random() * 200 + 50;
    await new Promise(r => setTimeout(r, delay));
    return { endpoint, data: `Response from ${endpoint}` };
  };
  
  const endpoints = [
    '/users/1', '/users/2', '/users/3',
    '/posts/1', '/posts/2', '/posts/3',
    '/comments/1', '/comments/2'
  ];
  
  const tasks = endpoints.map(ep => apiCall(ep));
  
  console.log('Fetching 8 endpoints with limit=3...');
  const startTime = Date.now();
  
  const results = await parallelLimit(tasks, 3);
  
  console.log(`Completed ${results.length} requests in ${Date.now() - startTime}ms`);
  console.log('Endpoints fetched:', results.map(r => r.endpoint));
}, 4000);

// Test 4: Error handling
console.log('\n--- Test 4: Error Handling ---');
setTimeout(async () => {
  const tasksWithError = [
    async () => 'success 1',
    async () => { throw new Error('Task 2 failed'); },
    async () => 'success 3'
  ];
  
  try {
    const results = await parallelLimit(tasksWithError, 2);
    console.log('Results:', results);
  } catch (error) {
    console.log('Caught error:', error.message);
  }
}, 6000);

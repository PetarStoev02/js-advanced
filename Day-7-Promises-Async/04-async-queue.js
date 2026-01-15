/*
  Day 7 - Promises & Async
  Exercise: Async Queue (Sequential Task Processor)
  
  Implement an async queue that processes tasks sequentially,
  one at a time, in the order they were added.
  
  Requirements:
  1. AsyncQueue class:
     - enqueue(task): adds async task to queue, returns promise for result
     - pause(): pauses processing
     - resume(): resumes processing
     - clear(): clears pending tasks
     - size: getter for pending task count
     - isProcessing: getter for current status
     
  2. Tasks should be processed in FIFO order
  3. Each task waits for previous to complete
  4. enqueue returns a promise that resolves when THAT task completes
  
  Example:
    const queue = new AsyncQueue();
    
    queue.enqueue(async () => {
      await delay(1000);
      return 'first';
    }).then(console.log);
    
    queue.enqueue(async () => {
      await delay(500);
      return 'second';
    }).then(console.log);
    
    // Logs 'first' after 1s, then 'second' after 1.5s total
*/

class AsyncQueue {
  // Your implementation here
}

// Helper
const delay = (ms) => new Promise(r => setTimeout(r, ms));

// Test 1: Basic sequential processing
console.log('--- Test 1: Sequential Processing ---');
(async () => {
  const queue = new AsyncQueue();
  const results = [];
  const startTime = Date.now();
  
  const task1 = queue.enqueue(async () => {
    await delay(200);
    const elapsed = Date.now() - startTime;
    console.log(`  Task 1 completed at ${elapsed}ms`);
    return 'first';
  });
  
  const task2 = queue.enqueue(async () => {
    await delay(150);
    const elapsed = Date.now() - startTime;
    console.log(`  Task 2 completed at ${elapsed}ms`);
    return 'second';
  });
  
  const task3 = queue.enqueue(async () => {
    await delay(100);
    const elapsed = Date.now() - startTime;
    console.log(`  Task 3 completed at ${elapsed}ms`);
    return 'third';
  });
  
  // All tasks return promises for their individual results
  const r1 = await task1;
  const r2 = await task2;
  const r3 = await task3;
  
  console.log('Results:', [r1, r2, r3]);
  console.log(`Total time: ${Date.now() - startTime}ms`);
  // Should be ~450ms (200 + 150 + 100)
})();

// Test 2: Pause and Resume
console.log('\n--- Test 2: Pause and Resume ---');
setTimeout(async () => {
  const queue = new AsyncQueue();
  
  queue.enqueue(async () => {
    console.log('  Task A running');
    await delay(100);
    return 'A';
  });
  
  queue.enqueue(async () => {
    console.log('  Task B running');
    await delay(100);
    return 'B';
  });
  
  queue.enqueue(async () => {
    console.log('  Task C running');
    await delay(100);
    return 'C';
  });
  
  // Pause after short delay
  setTimeout(() => {
    console.log('  Pausing queue...');
    queue.pause();
    console.log(`  Pending tasks: ${queue.size}`);
  }, 150);
  
  // Resume after 500ms
  setTimeout(() => {
    console.log('  Resuming queue...');
    queue.resume();
  }, 500);
}, 1000);

// Test 3: Clear queue
console.log('\n--- Test 3: Clear Queue ---');
setTimeout(async () => {
  const queue = new AsyncQueue();
  
  queue.enqueue(async () => {
    await delay(200);
    console.log('  Task 1 done');
    return 1;
  });
  
  const task2Promise = queue.enqueue(async () => {
    console.log('  Task 2 done (should not appear)');
    return 2;
  });
  
  const task3Promise = queue.enqueue(async () => {
    console.log('  Task 3 done (should not appear)');
    return 3;
  });
  
  // Clear after first task starts but before others
  setTimeout(() => {
    console.log(`  Clearing ${queue.size} pending tasks`);
    queue.clear();
  }, 50);
  
  // The cleared tasks' promises should reject or resolve with undefined
  try {
    await task2Promise;
  } catch (e) {
    console.log('  Task 2 was cleared:', e.message);
  }
}, 2500);

// Test 4: Real-world use case - Database writes
console.log('\n--- Test 4: Sequential DB Writes ---');
setTimeout(async () => {
  const queue = new AsyncQueue();
  
  // Simulate database writes that must be sequential
  const writeToDb = (data) => queue.enqueue(async () => {
    console.log(`  Writing: ${data}`);
    await delay(50); // Simulate DB latency
    return { written: data, timestamp: Date.now() };
  });
  
  // Queue multiple writes
  const writes = await Promise.all([
    writeToDb('user:1'),
    writeToDb('user:2'),
    writeToDb('user:3')
  ]);
  
  console.log('All writes completed:', writes.map(w => w.written));
}, 4000);

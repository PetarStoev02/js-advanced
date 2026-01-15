/*
  Day 7 - Solution: Parallel Limiter
*/

async function parallelLimit(tasks, limit) {
  const results = new Array(tasks.length);
  let currentIndex = 0;
  
  async function worker() {
    while (currentIndex < tasks.length) {
      const index = currentIndex++;
      results[index] = await tasks[index]();
    }
  }
  
  const workers = Array(Math.min(limit, tasks.length))
    .fill(null)
    .map(() => worker());
  
  await Promise.all(workers);
  return results;
}

class PromisePool {
  constructor(limit) {
    this.limit = limit;
    this.tasks = [];
    this.progressCallback = null;
  }
  
  add(task) {
    this.tasks.push(task);
    return this;
  }
  
  onProgress(callback) {
    this.progressCallback = callback;
    return this;
  }
  
  async run() {
    const results = [];
    let completed = 0;
    const total = this.tasks.length;
    
    const runTask = async (task, index) => {
      const result = await task();
      results[index] = result;
      completed++;
      this.progressCallback?.(completed, total);
      return result;
    };
    
    const executing = [];
    
    for (let i = 0; i < this.tasks.length; i++) {
      const promise = runTask(this.tasks[i], i);
      executing.push(promise);
      
      if (executing.length >= this.limit) {
        await Promise.race(executing);
        executing.splice(executing.findIndex(p => p === promise), 1);
      }
    }
    
    await Promise.all(executing);
    return results;
  }
}

// Test
const tasks = [1, 2, 3, 4, 5].map(i => async () => {
  await new Promise(r => setTimeout(r, 100));
  return i;
});

parallelLimit(tasks, 2).then(console.log); // [1, 2, 3, 4, 5]

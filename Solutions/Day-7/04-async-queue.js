/*
  Day 7 - Solution: Async Queue
*/

class AsyncQueue {
  constructor() {
    this._queue = [];
    this._processing = false;
    this._paused = false;
  }
  
  get size() {
    return this._queue.length;
  }
  
  get isProcessing() {
    return this._processing;
  }
  
  enqueue(task) {
    return new Promise((resolve, reject) => {
      this._queue.push({ task, resolve, reject });
      this._process();
    });
  }
  
  async _process() {
    if (this._processing || this._paused || this._queue.length === 0) {
      return;
    }
    
    this._processing = true;
    
    while (this._queue.length > 0 && !this._paused) {
      const { task, resolve, reject } = this._queue.shift();
      try {
        const result = await task();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    }
    
    this._processing = false;
  }
  
  pause() {
    this._paused = true;
  }
  
  resume() {
    this._paused = false;
    this._process();
  }
  
  clear() {
    const cleared = this._queue;
    this._queue = [];
    cleared.forEach(({ reject }) => reject(new Error('Queue cleared')));
  }
}

// Test
const queue = new AsyncQueue();
const delay = ms => new Promise(r => setTimeout(r, ms));

queue.enqueue(async () => { await delay(100); return 'first'; }).then(console.log);
queue.enqueue(async () => { await delay(100); return 'second'; }).then(console.log);

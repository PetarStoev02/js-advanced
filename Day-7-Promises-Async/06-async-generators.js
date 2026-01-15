/*
  Day 7 - Promises & Async
  Exercise: Async Generators (Paginated Data Fetcher)
  
  Implement async generators for handling paginated APIs and streams.
  
  Requirements:
  1. paginatedFetcher(fetchPage):
     - Async generator that yields items from paginated API
     - fetchPage(page) returns { items: [], hasMore: boolean }
     - Automatically handles pagination
     
  2. asyncMap(asyncIterable, fn):
     - Async generator that transforms each item
     
  3. asyncFilter(asyncIterable, predicate):
     - Async generator that filters items
     
  4. asyncTake(asyncIterable, n):
     - Takes first n items from async iterable
     
  5. asyncBatch(asyncIterable, size):
     - Groups items into batches of given size
  
  Example:
    async function* paginatedFetcher(fetchPage) {
      let page = 1;
      while (true) {
        const { items, hasMore } = await fetchPage(page);
        for (const item of items) yield item;
        if (!hasMore) break;
        page++;
      }
    }
    
    for await (const user of paginatedFetcher(fetchUsers)) {
      console.log(user);
    }
*/

async function* paginatedFetcher(fetchPage) {
  // Your implementation here
}

async function* asyncMap(asyncIterable, fn) {
  // Your implementation here
}

async function* asyncFilter(asyncIterable, predicate) {
  // Your implementation here
}

async function* asyncTake(asyncIterable, n) {
  // Your implementation here
}

async function* asyncBatch(asyncIterable, size) {
  // Your implementation here
}

// Helper
const delay = (ms) => new Promise(r => setTimeout(r, ms));

// Simulated paginated API
const createMockApi = (totalItems, pageSize) => {
  const allItems = Array.from({ length: totalItems }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`
  }));
  
  return async (page) => {
    await delay(100); // Simulate network latency
    const start = (page - 1) * pageSize;
    const items = allItems.slice(start, start + pageSize);
    const hasMore = start + pageSize < totalItems;
    console.log(`  Fetched page ${page}: ${items.length} items, hasMore: ${hasMore}`);
    return { items, hasMore };
  };
};

// Test 1: Basic paginated fetcher
console.log('--- Test 1: Paginated Fetcher ---');
(async () => {
  const fetchPage = createMockApi(25, 10); // 25 items, 10 per page
  
  const items = [];
  for await (const item of paginatedFetcher(fetchPage)) {
    items.push(item);
  }
  
  console.log(`Fetched ${items.length} total items`);
  console.log('First 3:', items.slice(0, 3));
  console.log('Last 3:', items.slice(-3));
})();

// Test 2: Async Map
console.log('\n--- Test 2: asyncMap ---');
setTimeout(async () => {
  async function* numbers() {
    for (let i = 1; i <= 5; i++) {
      await delay(50);
      yield i;
    }
  }
  
  const doubled = asyncMap(numbers(), async (n) => {
    await delay(10); // Simulate async transformation
    return n * 2;
  });
  
  const results = [];
  for await (const n of doubled) {
    results.push(n);
  }
  console.log('Doubled:', results); // [2, 4, 6, 8, 10]
}, 1500);

// Test 3: Async Filter
console.log('\n--- Test 3: asyncFilter ---');
setTimeout(async () => {
  async function* numbers() {
    for (let i = 1; i <= 10; i++) yield i;
  }
  
  const evens = asyncFilter(numbers(), async (n) => {
    await delay(10);
    return n % 2 === 0;
  });
  
  const results = [];
  for await (const n of evens) {
    results.push(n);
  }
  console.log('Evens:', results); // [2, 4, 6, 8, 10]
}, 2500);

// Test 4: Async Take
console.log('\n--- Test 4: asyncTake ---');
setTimeout(async () => {
  const fetchPage = createMockApi(100, 10);
  
  // Only take first 15 items (should only fetch 2 pages)
  const first15 = asyncTake(paginatedFetcher(fetchPage), 15);
  
  const results = [];
  for await (const item of first15) {
    results.push(item);
  }
  console.log(`Took ${results.length} items`); // 15
}, 3500);

// Test 5: Async Batch
console.log('\n--- Test 5: asyncBatch ---');
setTimeout(async () => {
  async function* items() {
    for (let i = 1; i <= 10; i++) yield i;
  }
  
  const batches = asyncBatch(items(), 3);
  
  for await (const batch of batches) {
    console.log('Batch:', batch);
  }
  // Expected: [1,2,3], [4,5,6], [7,8,9], [10]
}, 4500);

// Test 6: Chaining utilities
console.log('\n--- Test 6: Chained Utilities ---');
setTimeout(async () => {
  const fetchPage = createMockApi(50, 10);
  
  // Fetch all items, filter evens, double them, take first 5
  const pipeline = asyncTake(
    asyncMap(
      asyncFilter(
        paginatedFetcher(fetchPage),
        async (item) => item.id % 2 === 0
      ),
      async (item) => ({ ...item, id: item.id * 2 })
    ),
    5
  );
  
  console.log('Chained pipeline results:');
  for await (const item of pipeline) {
    console.log(' ', item);
  }
}, 5500);

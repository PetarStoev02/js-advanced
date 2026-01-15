/*
  Day 7 - Solution: Async Generators
*/

async function* paginatedFetcher(fetchPage) {
  let page = 1;
  while (true) {
    const { items, hasMore } = await fetchPage(page);
    for (const item of items) {
      yield item;
    }
    if (!hasMore) break;
    page++;
  }
}

async function* asyncMap(asyncIterable, fn) {
  for await (const item of asyncIterable) {
    yield await fn(item);
  }
}

async function* asyncFilter(asyncIterable, predicate) {
  for await (const item of asyncIterable) {
    if (await predicate(item)) {
      yield item;
    }
  }
}

async function* asyncTake(asyncIterable, n) {
  let count = 0;
  for await (const item of asyncIterable) {
    if (count >= n) break;
    yield item;
    count++;
  }
}

async function* asyncBatch(asyncIterable, size) {
  let batch = [];
  for await (const item of asyncIterable) {
    batch.push(item);
    if (batch.length === size) {
      yield batch;
      batch = [];
    }
  }
  if (batch.length > 0) {
    yield batch;
  }
}

// Test
async function test() {
  async function* numbers() {
    for (let i = 1; i <= 10; i++) yield i;
  }
  
  const evens = asyncFilter(numbers(), async n => n % 2 === 0);
  for await (const n of evens) {
    console.log(n); // 2, 4, 6, 8, 10
  }
}
test();

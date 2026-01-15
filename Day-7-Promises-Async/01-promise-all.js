/*
  Day 7 - Promises & Async
  Exercise: Promise.all from Scratch
  
  Implement Promise.all without using the native Promise.all method.
  
  Requirements:
  1. promiseAll(promises):
     - Takes an array of promises (or values)
     - Returns a promise that resolves with array of all results
     - Results must be in the same order as input
     - Rejects immediately if any promise rejects
     - Empty array should resolve immediately with []
     
  2. Bonus - Also implement:
     - promiseAllSettled: resolves when all settle (fulfilled or rejected)
     - promiseRace: resolves/rejects with first settled promise
     - promiseAny: resolves with first fulfilled, rejects if all reject
  
  Example:
    const p1 = Promise.resolve(1);
    const p2 = Promise.resolve(2);
    const p3 = Promise.resolve(3);
    
    promiseAll([p1, p2, p3]).then(console.log); // [1, 2, 3]
*/

function promiseAll(promises) {
  // Your implementation here
}

function promiseAllSettled(promises) {
  // Your implementation here (bonus)
}

function promiseRace(promises) {
  // Your implementation here (bonus)
}

function promiseAny(promises) {
  // Your implementation here (bonus)
}

// Helper to create delayed promise
const delay = (ms, value, shouldReject = false) => 
  new Promise((resolve, reject) => 
    setTimeout(() => shouldReject ? reject(value) : resolve(value), ms)
  );

// Test promiseAll
console.log('--- Testing promiseAll ---');

// Test 1: All resolve
promiseAll([
  delay(100, 'first'),
  delay(50, 'second'),
  delay(150, 'third')
]).then(results => {
  console.log('Test 1 - All resolve:', results);
  // Expected: ['first', 'second', 'third'] (order preserved)
});

// Test 2: Mixed promises and values
promiseAll([
  Promise.resolve(1),
  2,  // plain value
  Promise.resolve(3)
]).then(results => {
  console.log('Test 2 - Mixed:', results);
  // Expected: [1, 2, 3]
});

// Test 3: One rejects
promiseAll([
  delay(100, 'success'),
  delay(50, 'error!', true),
  delay(150, 'never reached')
]).then(
  results => console.log('Test 3 - Should not reach here'),
  error => console.log('Test 3 - Rejected with:', error)
);
// Expected: Rejected with: 'error!'

// Test 4: Empty array
promiseAll([]).then(results => {
  console.log('Test 4 - Empty:', results);
  // Expected: []
});

// Test promiseAllSettled (bonus)
console.log('\n--- Testing promiseAllSettled ---');
promiseAllSettled([
  delay(100, 'success'),
  delay(50, 'error!', true),
  delay(150, 'another success')
]).then(results => {
  console.log('AllSettled results:', results);
  // Expected: [
  //   { status: 'fulfilled', value: 'success' },
  //   { status: 'rejected', reason: 'error!' },
  //   { status: 'fulfilled', value: 'another success' }
  // ]
});

// Test promiseRace (bonus)
console.log('\n--- Testing promiseRace ---');
promiseRace([
  delay(100, 'slow'),
  delay(50, 'fast'),
  delay(150, 'slower')
]).then(result => {
  console.log('Race winner:', result);
  // Expected: 'fast'
});

// Test promiseAny (bonus)
console.log('\n--- Testing promiseAny ---');
promiseAny([
  delay(100, 'error1', true),
  delay(50, 'error2', true),
  delay(75, 'success!')
]).then(
  result => console.log('Any first success:', result),
  error => console.log('Any all failed:', error)
);
// Expected: 'success!'

/*
  Day 5 - Closures & Scope
  Exercise: Event Emitter (Pub/Sub Pattern)
  
  Create an `createEventEmitter` function that returns an event emitter object
  implementing the publish-subscribe pattern using closures.
  
  Methods required:
  - on(event, callback): subscribe to an event
  - off(event, callback): unsubscribe from an event
  - emit(event, ...args): trigger an event with optional data
  - once(event, callback): subscribe to an event, but only fire once
  
  Requirements:
  - Multiple callbacks can subscribe to the same event
  - Callbacks receive any arguments passed to emit
  - off() should only remove the specific callback passed
  - Internal subscriber list must be private
  
  Example:
    const emitter = createEventEmitter();
    
    emitter.on('message', (data) => console.log('Received:', data));
    emitter.emit('message', 'Hello!'); // Logs: "Received: Hello!"
    
    emitter.once('login', (user) => console.log('Welcome', user));
    emitter.emit('login', 'Alice'); // Logs: "Welcome Alice"
    emitter.emit('login', 'Bob');   // Nothing happens (once already fired)
*/

function createEventEmitter() {
  // Your implementation here
}

// Test cases
const emitter = createEventEmitter();

// Test on/emit
const handler1 = (msg) => console.log('Handler 1:', msg);
const handler2 = (msg) => console.log('Handler 2:', msg);

emitter.on('message', handler1);
emitter.on('message', handler2);

console.log('--- Emitting message ---');
emitter.emit('message', 'Hello World');
// Expected:
// Handler 1: Hello World
// Handler 2: Hello World

// Test off
emitter.off('message', handler1);
console.log('\n--- After removing handler1 ---');
emitter.emit('message', 'Second message');
// Expected:
// Handler 2: Second message

// Test once
console.log('\n--- Testing once ---');
emitter.once('login', (user) => console.log('Welcome,', user));
emitter.emit('login', 'Alice');  // Should log
emitter.emit('login', 'Bob');    // Should NOT log

// Test multiple arguments
console.log('\n--- Testing multiple arguments ---');
emitter.on('data', (a, b, c) => console.log('Data:', a, b, c));
emitter.emit('data', 1, 2, 3);
// Expected: Data: 1 2 3

// Test event isolation
const emitter2 = createEventEmitter();
emitter2.on('test', () => console.log('Emitter 2'));
console.log('\n--- Testing isolation ---');
emitter.emit('test');  // Should NOT trigger emitter2's handler
emitter2.emit('test'); // Should log "Emitter 2"

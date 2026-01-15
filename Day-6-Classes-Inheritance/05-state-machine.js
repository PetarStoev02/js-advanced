/*
  Day 6 - Classes & Inheritance
  Exercise: State Machine
  
  Implement a generic StateMachine class that manages state transitions.
  This pattern is useful for workflows, game states, UI states, etc.
  
  Requirements:
  1. StateMachine class:
     - Constructor takes initial state and transitions config
     - currentState: getter for current state
     - can(action): returns true if action is valid from current state
     - transition(action): performs transition if valid, throws if not
     - onEnter(state, callback): hook when entering a state
     - onLeave(state, callback): hook when leaving a state
     - history: array of past states
     
  2. Transitions config format:
     {
       'idle': { start: 'running' },
       'running': { pause: 'paused', stop: 'idle' },
       'paused': { resume: 'running', stop: 'idle' }
     }
  
  Example:
    const machine = new StateMachine('idle', transitions);
    machine.transition('start'); // Now in 'running'
    machine.can('pause');        // true
    machine.can('start');        // false (not valid from 'running')
*/

class StateMachine {
  // Your implementation here
}

// Traffic Light Example
console.log('--- Traffic Light ---');
const trafficLight = new StateMachine('red', {
  red: { next: 'green' },
  green: { next: 'yellow' },
  yellow: { next: 'red' }
});

trafficLight.onEnter('red', () => console.log('🔴 STOP!'));
trafficLight.onEnter('yellow', () => console.log('🟡 CAUTION!'));
trafficLight.onEnter('green', () => console.log('🟢 GO!'));

console.log('Current:', trafficLight.currentState); // red
trafficLight.transition('next'); // green
trafficLight.transition('next'); // yellow
trafficLight.transition('next'); // red
console.log('History:', trafficLight.history);

// Order Processing Example
console.log('\n--- Order Processing ---');
const orderMachine = new StateMachine('pending', {
  pending: { confirm: 'confirmed', cancel: 'cancelled' },
  confirmed: { ship: 'shipped', cancel: 'cancelled' },
  shipped: { deliver: 'delivered' },
  delivered: {},
  cancelled: {}
});

orderMachine.onLeave('pending', () => console.log('Order is no longer pending'));
orderMachine.onEnter('shipped', () => console.log('📦 Order has been shipped!'));
orderMachine.onEnter('delivered', () => console.log('✅ Order delivered!'));
orderMachine.onEnter('cancelled', () => console.log('❌ Order cancelled'));

console.log('Can confirm?', orderMachine.can('confirm')); // true
console.log('Can ship?', orderMachine.can('ship'));       // false

orderMachine.transition('confirm');
console.log('Current:', orderMachine.currentState); // confirmed

console.log('Can ship now?', orderMachine.can('ship')); // true
orderMachine.transition('ship');
orderMachine.transition('deliver');

console.log('Final state:', orderMachine.currentState); // delivered
console.log('Order history:', orderMachine.history);

// Test invalid transition
console.log('\n--- Invalid Transition Test ---');
try {
  orderMachine.transition('ship'); // Already delivered, can't ship
} catch (e) {
  console.log('Caught error:', e.message);
}

// Promise-based workflow
console.log('\n--- Promise Workflow ---');
const promiseMachine = new StateMachine('pending', {
  pending: { resolve: 'fulfilled', reject: 'rejected' },
  fulfilled: {},
  rejected: {}
});

console.log('Promise state:', promiseMachine.currentState);
promiseMachine.transition('resolve');
console.log('After resolve:', promiseMachine.currentState);
console.log('Can reject?', promiseMachine.can('reject')); // false

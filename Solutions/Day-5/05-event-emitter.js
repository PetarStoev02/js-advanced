/*
  Day 5 - Solution: Event Emitter
*/

function createEventEmitter() {
  const events = new Map();
  
  return {
    on(event, callback) {
      if (!events.has(event)) {
        events.set(event, []);
      }
      events.get(event).push(callback);
    },
    
    off(event, callback) {
      if (!events.has(event)) return;
      const callbacks = events.get(event);
      const index = callbacks.indexOf(callback);
      if (index > -1) {
        callbacks.splice(index, 1);
      }
    },
    
    emit(event, ...args) {
      if (!events.has(event)) return;
      events.get(event).forEach(callback => callback(...args));
    },
    
    once(event, callback) {
      const wrapper = (...args) => {
        this.off(event, wrapper);
        callback(...args);
      };
      this.on(event, wrapper);
    }
  };
}

// Test
const emitter = createEventEmitter();
emitter.on('message', (msg) => console.log('Received:', msg));
emitter.emit('message', 'Hello!');

emitter.once('login', (user) => console.log('Welcome', user));
emitter.emit('login', 'Alice');
emitter.emit('login', 'Bob'); // Nothing

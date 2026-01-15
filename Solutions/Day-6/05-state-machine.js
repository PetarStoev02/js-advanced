/*
  Day 6 - Solution: State Machine
*/

class StateMachine {
  constructor(initialState, transitions) {
    this._state = initialState;
    this._transitions = transitions;
    this._history = [initialState];
    this._enterHooks = new Map();
    this._leaveHooks = new Map();
  }
  
  get currentState() {
    return this._state;
  }
  
  get history() {
    return [...this._history];
  }
  
  can(action) {
    const stateTransitions = this._transitions[this._state];
    return stateTransitions && action in stateTransitions;
  }
  
  transition(action) {
    if (!this.can(action)) {
      throw new Error(`Cannot perform '${action}' from state '${this._state}'`);
    }
    
    const oldState = this._state;
    const newState = this._transitions[this._state][action];
    
    // Leave hooks
    if (this._leaveHooks.has(oldState)) {
      this._leaveHooks.get(oldState).forEach(cb => cb());
    }
    
    this._state = newState;
    this._history.push(newState);
    
    // Enter hooks
    if (this._enterHooks.has(newState)) {
      this._enterHooks.get(newState).forEach(cb => cb());
    }
    
    return this._state;
  }
  
  onEnter(state, callback) {
    if (!this._enterHooks.has(state)) {
      this._enterHooks.set(state, []);
    }
    this._enterHooks.get(state).push(callback);
  }
  
  onLeave(state, callback) {
    if (!this._leaveHooks.has(state)) {
      this._leaveHooks.set(state, []);
    }
    this._leaveHooks.get(state).push(callback);
  }
}

// Test
const light = new StateMachine('red', {
  red: { next: 'green' },
  green: { next: 'yellow' },
  yellow: { next: 'red' }
});

light.onEnter('green', () => console.log('GO!'));
light.transition('next'); // green, logs "GO!"
console.log(light.history); // ['red', 'green']

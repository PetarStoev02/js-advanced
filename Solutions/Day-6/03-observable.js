/*
  Day 6 - Solution: Observable
*/

class Observable {
  constructor(initialValue) {
    this._value = initialValue;
    this._subscribers = [];
  }
  
  get value() {
    return this._value;
  }
  
  set value(newValue) {
    this._value = newValue;
    this._notify();
  }
  
  subscribe(callback) {
    this._subscribers.push(callback);
    return () => {
      const index = this._subscribers.indexOf(callback);
      if (index > -1) this._subscribers.splice(index, 1);
    };
  }
  
  _notify() {
    this._subscribers.forEach(cb => cb(this._value));
  }
}

class ComputedObservable extends Observable {
  constructor(dependencies, computeFn) {
    super(undefined);
    this._dependencies = dependencies;
    this._computeFn = computeFn;
    
    this._value = this._compute();
    
    dependencies.forEach(dep => {
      dep.subscribe(() => {
        this._value = this._compute();
        this._notify();
      });
    });
  }
  
  _compute() {
    return this._computeFn(...this._dependencies.map(d => d.value));
  }
  
  set value(_) {
    throw new Error('Cannot set computed observable');
  }
}

// Test
const firstName = new Observable('John');
const lastName = new Observable('Doe');
const fullName = new ComputedObservable([firstName, lastName], (f, l) => `${f} ${l}`);

fullName.subscribe(val => console.log('Full name:', val));
console.log(fullName.value); // "John Doe"
firstName.value = 'Jane'; // Logs: "Full name: Jane Doe"

/*
  Day 6 - Solution: Validator Builder
*/

class Validator {
  constructor() {
    this._rules = [];
    this._type = null;
  }
  
  string() {
    this._type = 'string';
    return this;
  }
  
  number() {
    this._type = 'number';
    return this;
  }
  
  required() {
    this._rules.push({
      test: (v) => v !== null && v !== undefined && v !== '',
      message: 'This field is required'
    });
    return this;
  }
  
  min(n) {
    this._rules.push({
      test: (v) => this._type === 'string' ? v.length >= n : v >= n,
      message: this._type === 'string' ? `Must be at least ${n} characters` : `Must be at least ${n}`
    });
    return this;
  }
  
  max(n) {
    this._rules.push({
      test: (v) => this._type === 'string' ? v.length <= n : v <= n,
      message: this._type === 'string' ? `Must be at most ${n} characters` : `Must be at most ${n}`
    });
    return this;
  }
  
  email() {
    this._rules.push({
      test: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      message: 'Must be a valid email'
    });
    return this;
  }
  
  pattern(regex) {
    this._rules.push({
      test: (v) => regex.test(v),
      message: 'Does not match required pattern'
    });
    return this;
  }
  
  validate(value) {
    const errors = [];
    
    if (this._type === 'number' && typeof value !== 'number') {
      return { valid: false, errors: ['Must be a number'] };
    }
    
    for (const rule of this._rules) {
      if (!rule.test(value)) {
        errors.push(rule.message);
      }
    }
    
    return { valid: errors.length === 0, errors };
  }
}

// Test
const emailValidator = new Validator().string().required().email();
console.log(emailValidator.validate('test@example.com')); // { valid: true, errors: [] }
console.log(emailValidator.validate('invalid')); // { valid: false, errors: ['Must be a valid email'] }

/*
  Day 6 - Classes & Inheritance
  Exercise: Validator Builder (Fluent Interface)
  
  Create a Validator class with chainable validation methods.
  This pattern is common in form validation libraries.
  
  Requirements:
  1. Validator class:
     - string(): starts string validation chain
     - number(): starts number validation chain
     - required(): value must not be null/undefined/empty
     - min(n): minimum length (string) or value (number)
     - max(n): maximum length (string) or value (number)
     - email(): validates email format
     - pattern(regex): matches custom regex
     - validate(value): returns { valid: boolean, errors: string[] }
     
  2. All methods should be chainable
  3. Collect all validation errors, not just first one
  
  Example:
    const emailValidator = new Validator()
      .string()
      .required()
      .email();
    
    console.log(emailValidator.validate('test@example.com'));
    // { valid: true, errors: [] }
    
    console.log(emailValidator.validate('invalid'));
    // { valid: false, errors: ['Must be a valid email'] }
*/

class Validator {
  // Your implementation here
}

// Test cases
console.log('--- String Validation ---');
const usernameValidator = new Validator()
  .string()
  .required()
  .min(3)
  .max(20);

console.log(usernameValidator.validate('john'));
// { valid: true, errors: [] }

console.log(usernameValidator.validate('jo'));
// { valid: false, errors: ['Must be at least 3 characters'] }

console.log(usernameValidator.validate(''));
// { valid: false, errors: ['This field is required'] }

console.log(usernameValidator.validate('a'.repeat(25)));
// { valid: false, errors: ['Must be at most 20 characters'] }

console.log('\n--- Email Validation ---');
const emailValidator = new Validator()
  .string()
  .required()
  .email();

console.log(emailValidator.validate('test@example.com'));
// { valid: true, errors: [] }

console.log(emailValidator.validate('invalid-email'));
// { valid: false, errors: ['Must be a valid email'] }

console.log(emailValidator.validate(''));
// { valid: false, errors: ['This field is required'] }

console.log('\n--- Number Validation ---');
const ageValidator = new Validator()
  .number()
  .required()
  .min(0)
  .max(150);

console.log(ageValidator.validate(25));
// { valid: true, errors: [] }

console.log(ageValidator.validate(-5));
// { valid: false, errors: ['Must be at least 0'] }

console.log(ageValidator.validate(200));
// { valid: false, errors: ['Must be at most 150'] }

console.log(ageValidator.validate('not a number'));
// { valid: false, errors: ['Must be a number'] }

console.log('\n--- Custom Pattern ---');
const phoneValidator = new Validator()
  .string()
  .required()
  .pattern(/^\d{3}-\d{3}-\d{4}$/);

console.log(phoneValidator.validate('123-456-7890'));
// { valid: true, errors: [] }

console.log(phoneValidator.validate('1234567890'));
// { valid: false, errors: ['Does not match required pattern'] }

console.log('\n--- Multiple Errors ---');
const strictValidator = new Validator()
  .string()
  .required()
  .min(5)
  .max(10)
  .pattern(/^[a-z]+$/);

console.log(strictValidator.validate('AB'));
// Should show multiple errors: too short, wrong pattern

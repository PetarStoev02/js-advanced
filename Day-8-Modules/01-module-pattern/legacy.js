/*
  Day 8 - Modules
  Exercise: Module Pattern - Legacy Code to Convert
  
  This is the LEGACY code you need to refactor into ES modules.
  See README.md for instructions.
*/

// ===== UTILITY FUNCTIONS =====
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

// Private helper - should NOT be exported
function _sanitizeInput(str) {
  return str.trim().replace(/[<>]/g, '');
}

// ===== VALIDATORS =====
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidAge(age) {
  return typeof age === 'number' && age >= 0 && age <= 150;
}

function isValidUsername(username) {
  return typeof username === 'string' && 
         username.length >= 3 && 
         username.length <= 20 &&
         /^[a-zA-Z0-9_]+$/.test(username);
}

// ===== MAIN CLASS =====
class User {
  constructor(username, email, age) {
    if (!isValidUsername(username)) {
      throw new Error('Invalid username');
    }
    if (!isValidEmail(email)) {
      throw new Error('Invalid email');
    }
    if (!isValidAge(age)) {
      throw new Error('Invalid age');
    }
    
    this.id = generateId();
    this.username = _sanitizeInput(username);
    this.email = _sanitizeInput(email);
    this.age = age;
    this.createdAt = new Date();
  }
  
  getDisplayName() {
    return capitalize(this.username);
  }
  
  toJSON() {
    return {
      id: this.id,
      username: this.username,
      email: this.email,
      age: this.age,
      createdAt: formatDate(this.createdAt)
    };
  }
}

// ===== USAGE (for testing) =====
const user = new User('john_doe', 'john@example.com', 25);
console.log('User created:', user.toJSON());
console.log('Display name:', user.getDisplayName());

// Test validation
try {
  const badUser = new User('ab', 'invalid', -5);
} catch (e) {
  console.log('Validation error:', e.message);
}

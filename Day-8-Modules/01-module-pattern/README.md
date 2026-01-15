# Day 8 - Exercise 1: Module Pattern

## Task
Convert the legacy code in `legacy.js` to proper ES modules.

## Requirements
1. Split the monolithic code into separate modules
2. Use named exports for utility functions
3. Use default export for the main class
4. Ensure proper encapsulation (private helpers stay private)

## Files to create
- `utils.js` - Export utility functions
- `validators.js` - Export validation functions  
- `User.js` - Export User class as default
- `index.js` - Re-export everything as the public API

## Run
```bash
node --experimental-vm-modules index.js
```

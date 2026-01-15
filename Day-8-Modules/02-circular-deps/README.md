# Day 8 - Exercise 2: Circular Dependencies

## Task
The files in this exercise have circular dependency issues. Refactor them to eliminate the circular imports while maintaining functionality.

## Problem
- `User.js` imports from `Post.js`
- `Post.js` imports from `User.js`
- This creates a circular dependency that can cause issues

## Your Task
1. Identify the circular dependency
2. Refactor to break the cycle using one of these strategies:
   - Extract shared code to a third module
   - Use dependency injection
   - Lazy loading
   - Restructure the code

## Files
- `User.js` - User class that references Posts
- `Post.js` - Post class that references Users
- `index.js` - Entry point (should work after your fix)

## Run
```bash
node index.js
```

# Day 8 - Exercise 3: Dynamic Imports

## Task
Implement lazy loading of modules based on user actions.

## Scenario
You're building a dashboard with multiple heavy feature modules:
- Charts module (for data visualization)
- Reports module (for PDF generation)
- Analytics module (for data processing)

These modules are "heavy" and should only load when the user actually needs them.

## Your Task
1. Implement `loadFeature(name)` that dynamically imports the correct module
2. Cache loaded modules to avoid re-importing
3. Handle loading errors gracefully
4. Show loading state while module loads

## Files
- `app.js` - Main app with dynamic import logic (implement here)
- `features/charts.js` - Charts module
- `features/reports.js` - Reports module  
- `features/analytics.js` - Analytics module

## Run
```bash
node app.js
```

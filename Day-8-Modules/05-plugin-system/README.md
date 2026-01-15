# Day 8 - Exercise 5: Plugin System

## Task
Build an extensible application with a plugin architecture using dynamic module loading.

## Scenario
Create a text processor app that can be extended with plugins.
Each plugin adds new text transformation capabilities.

## Your Task
1. Implement the `PluginManager` class in `app.js`
2. Plugins are loaded dynamically from the `plugins/` folder
3. Each plugin exports: `name`, `description`, and `transform(text)` function
4. The app should work even if some plugins fail to load

## Plugin Interface
```javascript
// Each plugin must export:
export const name = 'plugin-name';
export const description = 'What this plugin does';
export function transform(text) {
  // Transform and return the text
  return transformedText;
}
```

## Files
- `app.js` - Main app with PluginManager (implement here)
- `plugins/uppercase.js` - Converts to uppercase
- `plugins/reverse.js` - Reverses text
- `plugins/leetspeak.js` - Converts to leetspeak

## Run
```bash
node app.js
```

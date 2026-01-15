/*
  Day 8 - Modules
  Exercise: Plugin System
  
  Implement a PluginManager that dynamically loads and manages plugins.
*/

class PluginManager {
  constructor() {
    this.plugins = new Map();
  }
  
  /**
   * Load a plugin by name
   * @param {string} pluginName - Name of plugin file (without .js)
   */
  async loadPlugin(pluginName) {
    // Your implementation here
    // 1. Dynamically import from ./plugins/${pluginName}.js
    // 2. Validate it has required exports (name, description, transform)
    // 3. Store in this.plugins Map
    // 4. Handle errors gracefully
  }
  
  /**
   * Load all available plugins
   * @param {string[]} pluginNames - Array of plugin names to load
   */
  async loadAllPlugins(pluginNames) {
    // Your implementation here
  }
  
  /**
   * Get list of loaded plugins
   */
  listPlugins() {
    // Your implementation here
  }
  
  /**
   * Apply a specific plugin's transform
   * @param {string} pluginName 
   * @param {string} text 
   */
  applyPlugin(pluginName, text) {
    // Your implementation here
  }
  
  /**
   * Apply all plugins in sequence
   * @param {string} text 
   */
  applyAllPlugins(text) {
    // Your implementation here
  }
}

// Text Processor App
class TextProcessor {
  constructor() {
    this.pluginManager = new PluginManager();
  }
  
  async initialize() {
    console.log('=== Text Processor App ===\n');
    console.log('Loading plugins...\n');
    
    // Try to load all plugins
    await this.pluginManager.loadAllPlugins([
      'uppercase',
      'reverse', 
      'leetspeak',
      'nonexistent'  // This should fail gracefully
    ]);
    
    // List loaded plugins
    console.log('\nLoaded plugins:');
    this.pluginManager.listPlugins().forEach(p => {
      console.log(`  - ${p.name}: ${p.description}`);
    });
  }
  
  process(text) {
    console.log(`\nOriginal: "${text}"\n`);
    
    // Apply each plugin individually
    console.log('Individual transforms:');
    for (const plugin of this.pluginManager.listPlugins()) {
      const result = this.pluginManager.applyPlugin(plugin.name, text);
      console.log(`  ${plugin.name}: "${result}"`);
    }
    
    // Apply all plugins in sequence
    console.log('\nAll plugins combined:');
    const combined = this.pluginManager.applyAllPlugins(text);
    console.log(`  Result: "${combined}"`);
  }
}

// Run the app
const app = new TextProcessor();
app.initialize().then(() => {
  app.process('Hello World');
});

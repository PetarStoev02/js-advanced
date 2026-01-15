/*
  Day 8 - Modules
  Exercise: Dynamic Imports
  
  Implement lazy loading of feature modules.
  Only load a module when the user requests that feature.
*/

// Cache for loaded modules
const moduleCache = new Map();

/**
 * Dynamically load a feature module
 * @param {string} featureName - 'charts', 'reports', or 'analytics'
 * @returns {Promise<object>} The loaded module
 */
async function loadFeature(featureName) {
  // Your implementation here
  // 1. Check cache first
  // 2. Show loading message
  // 3. Dynamically import the module
  // 4. Cache it
  // 5. Return the module
  // 6. Handle errors
}

/**
 * Simulate user clicking on different features
 */
async function simulateUserActions() {
  console.log('=== Dashboard App Started ===\n');
  console.log('No feature modules loaded yet.\n');
  
  // User clicks "Charts"
  console.log('--- User clicks "Charts" ---');
  try {
    const charts = await loadFeature('charts');
    charts.renderChart({ type: 'bar', data: [1, 2, 3, 4, 5] });
  } catch (e) {
    console.log('Failed to load charts:', e.message);
  }
  
  // User clicks "Reports"
  console.log('\n--- User clicks "Reports" ---');
  try {
    const reports = await loadFeature('reports');
    reports.generateReport({ title: 'Monthly Summary' });
  } catch (e) {
    console.log('Failed to load reports:', e.message);
  }
  
  // User clicks "Charts" again (should use cache)
  console.log('\n--- User clicks "Charts" again ---');
  try {
    const charts = await loadFeature('charts');
    charts.renderChart({ type: 'pie', data: [30, 70] });
  } catch (e) {
    console.log('Failed to load charts:', e.message);
  }
  
  // User clicks "Analytics"
  console.log('\n--- User clicks "Analytics" ---');
  try {
    const analytics = await loadFeature('analytics');
    analytics.analyze([10, 20, 30, 40, 50]);
  } catch (e) {
    console.log('Failed to load analytics:', e.message);
  }
  
  // Try to load non-existent feature
  console.log('\n--- User clicks "Unknown Feature" ---');
  try {
    await loadFeature('unknown');
  } catch (e) {
    console.log('Error handled:', e.message);
  }
  
  // Show cache status
  console.log('\n=== Module Cache Status ===');
  console.log('Cached modules:', [...moduleCache.keys()]);
}

// Run the simulation
simulateUserActions();

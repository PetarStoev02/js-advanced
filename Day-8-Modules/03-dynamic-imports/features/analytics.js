/*
  Day 8 - Modules
  Heavy Analytics Module (simulated)
*/

console.log('📈 Analytics module loaded!');

export function analyze(data) {
  const sum = data.reduce((a, b) => a + b, 0);
  const avg = sum / data.length;
  const min = Math.min(...data);
  const max = Math.max(...data);
  
  console.log(`  Analysis results: avg=${avg}, min=${min}, max=${max}`);
  return { sum, avg, min, max };
}

export function predictTrend(data) {
  // Simple trend detection
  const trend = data[data.length - 1] > data[0] ? 'up' : 'down';
  console.log(`  Trend prediction: ${trend}`);
  return trend;
}

export default {
  analyze,
  predictTrend
};

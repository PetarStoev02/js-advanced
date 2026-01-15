/*
  Day 8 - Modules
  Test file for Barrel Exports exercise
  
  After completing the barrel exports, this should work.
*/

// This clean import should work after you complete the exercise:
import { Button, IconButton, Input, Select, Modal } from './components/index.js';

// Test Button
console.log('--- Testing Components ---\n');

const btn = new Button('Click Me', () => console.log('Clicked!'));
console.log('Button HTML:', btn.render());
btn.click();

// Test IconButton
const iconBtn = new IconButton('🚀', 'Launch', () => console.log('Launched!'));
console.log('\nIconButton HTML:', iconBtn.render());
iconBtn.click();

// Test Input
const input = new Input('email', 'Enter email...');
console.log('\nInput HTML:', input.render());
input.setValue('test@example.com');

// Test Select
const select = new Select('country', ['USA', 'UK', 'Canada']);
console.log('\nSelect HTML:', select.render());
select.select('UK');

// Test Modal
const modal = new Modal('Welcome', 'Hello, World!');
console.log('\nModal HTML:', modal.render());
modal.open();
modal.close();

console.log('\n✅ All components imported successfully via barrel exports!');

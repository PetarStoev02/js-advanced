/*
  Day 8 - Modules
  Button Component
*/

export class Button {
  constructor(label, onClick) {
    this.label = label;
    this.onClick = onClick;
  }
  
  render() {
    return `<button>${this.label}</button>`;
  }
  
  click() {
    console.log(`Button "${this.label}" clicked`);
    this.onClick && this.onClick();
  }
}

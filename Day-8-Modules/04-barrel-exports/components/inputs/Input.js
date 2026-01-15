/*
  Day 8 - Modules
  Input Component
*/

export class Input {
  constructor(name, placeholder = '') {
    this.name = name;
    this.placeholder = placeholder;
    this.value = '';
  }
  
  render() {
    return `<input name="${this.name}" placeholder="${this.placeholder}" />`;
  }
  
  setValue(value) {
    this.value = value;
    console.log(`Input "${this.name}" set to: ${value}`);
  }
}

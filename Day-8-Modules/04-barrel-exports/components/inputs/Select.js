/*
  Day 8 - Modules
  Select Component
*/

export class Select {
  constructor(name, options = []) {
    this.name = name;
    this.options = options;
    this.selected = null;
  }
  
  render() {
    const optionsHtml = this.options
      .map(opt => `<option value="${opt}">${opt}</option>`)
      .join('');
    return `<select name="${this.name}">${optionsHtml}</select>`;
  }
  
  select(value) {
    if (this.options.includes(value)) {
      this.selected = value;
      console.log(`Select "${this.name}" changed to: ${value}`);
    }
  }
}

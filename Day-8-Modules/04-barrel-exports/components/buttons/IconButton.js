/*
  Day 8 - Modules
  IconButton Component
*/

import { Button } from './Button.js';

export class IconButton extends Button {
  constructor(icon, label, onClick) {
    super(label, onClick);
    this.icon = icon;
  }
  
  render() {
    return `<button>${this.icon} ${this.label}</button>`;
  }
}

/*
  Day 8 - Modules
  Modal Component
*/

import { _ModalBackdrop } from './_ModalBackdrop.js';

export class Modal {
  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.isOpen = false;
    this.backdrop = new _ModalBackdrop();
  }
  
  render() {
    return `
      ${this.backdrop.render()}
      <div class="modal">
        <h2>${this.title}</h2>
        <div>${this.content}</div>
      </div>
    `;
  }
  
  open() {
    this.isOpen = true;
    this.backdrop.show();
    console.log(`Modal "${this.title}" opened`);
  }
  
  close() {
    this.isOpen = false;
    this.backdrop.hide();
    console.log(`Modal "${this.title}" closed`);
  }
}

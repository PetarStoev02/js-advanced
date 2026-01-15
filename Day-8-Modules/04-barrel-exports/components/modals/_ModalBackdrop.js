/*
  Day 8 - Modules
  Modal Backdrop - PRIVATE COMPONENT
  
  This is an internal implementation detail.
  It should NOT be exported from the public API.
*/

export class _ModalBackdrop {
  constructor() {
    this.visible = false;
  }
  
  render() {
    return '<div class="modal-backdrop"></div>';
  }
  
  show() {
    this.visible = true;
  }
  
  hide() {
    this.visible = false;
  }
}

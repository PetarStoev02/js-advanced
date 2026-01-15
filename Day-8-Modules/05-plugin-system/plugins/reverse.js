/*
  Day 8 - Modules
  Reverse Plugin
*/

export const name = 'reverse';
export const description = 'Reverses the text';

export function transform(text) {
  return text.split('').reverse().join('');
}

/*
  Day 8 - Modules
  Uppercase Plugin
*/

export const name = 'uppercase';
export const description = 'Converts text to UPPERCASE';

export function transform(text) {
  return text.toUpperCase();
}

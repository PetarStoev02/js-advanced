/*
  Day 8 - Modules
  Leetspeak Plugin
*/

export const name = 'leetspeak';
export const description = 'Converts text to l33tsp34k';

const leetMap = {
  'a': '4', 'A': '4',
  'e': '3', 'E': '3',
  'i': '1', 'I': '1',
  'o': '0', 'O': '0',
  's': '5', 'S': '5',
  't': '7', 'T': '7'
};

export function transform(text) {
  return text.split('').map(char => leetMap[char] || char).join('');
}

function solve(arr) {
  arr.sort(compare);
  return arr.join("\n");

  function compare(curent, next) {
    if (curent.length === next.length) {
      return curent.localeCompare(next);
    }
    return curent.length - next.length;
  }
}
console.log(solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
));

function solve(arr) {
  arr.sort((a, b) => a - b);

  let result = (arr.slice(arr.length / 2));
  
  return result;
}
solve([4, 7, 2, 5,6,1,3]);

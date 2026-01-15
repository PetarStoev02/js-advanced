function solve(arr, indexStart, indexEnd) {
  if (Array.isArray(arr) == false) {
    return NaN;
  }

  if (indexStart < 0) {
    indexStart = 0;
  }

  if (indexEnd < arr.length - 1) {
    indexEnd = arr.length - 1;
  }

  return arr
    .slice(indexStart, indexEnd + 1)
    .map(Number)
    .reduce((acc, x) => acc + x, 0);
}
solve([10, 20, 30, 40, 50, 60], 3, 300);

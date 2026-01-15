function solve(arr) {
  const odd = arr.filter((x, i) => i % 2);
  const double = odd.map((x) => x * 2);
  double.reverse();

  return double.join(" ");
}

function solve(arr) {
  return arr
    .filter((x, i) => i % 2)
    .map((x) => x * 2)
    .reverse()
    .join(" ");
}
solve([3, 0, 10, 4, 7, 3]);

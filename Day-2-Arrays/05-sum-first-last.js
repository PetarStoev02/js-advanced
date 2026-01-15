function solve(num) {
  let first = num.shift();
  let last = num.pop();

  let result = Number(first)+ Number(last)

  console.log(result)
}
solve(["20", "30", "40"]);

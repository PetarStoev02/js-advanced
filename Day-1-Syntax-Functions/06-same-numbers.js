function solve(n) {
  let sum = 0;
  let newN = n;
  let flag = 0;
  while (newN) {
    sum += newN % 10;
    newN = Math.floor(newN / 10);
  }

  var first = n % 10;
  let stringN = n.toString();

  for (i = 0; i < stringN.length; i++) {
    if (n % 10 !== first) {
      console.log(false);
      flag += 1;
      break;
    }
    n = Math.floor(n / 10);
  }
  if (flag === 0) {
    console.log(true);
  }

  console.log(sum);
}
solve(2222222);

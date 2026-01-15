function solve(arr) {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr.join(" "));
}
solve(["20", "30", "40", "50", "60"]);

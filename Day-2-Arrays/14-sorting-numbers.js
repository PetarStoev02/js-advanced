function solve(arr) {
  let result = [];

  arr.sort((a, b) => a - b);

  arr.forEach(element => {
    let first = arr.shift();
    let last = arr.pop();

    result.push(first);
    result.push(last);

    if(arr.length<=2){
        result.push(arr[0]);
        result.push(arr[1]);
    }
      
  });
console.log(result);
  return result;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);

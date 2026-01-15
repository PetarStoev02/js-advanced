function solve(arr) {
  let newArray = [];
  let sum = 0;

  for (let add in arr) {
    sum++;
    if (arr[add] === "add") {
      newArray.push(sum);
    } else if (arr[add] === "remove") {
      newArray.pop();
    } 
  }

  if (newArray.length==0) {
    console.log("Empty");
  } else if (sum > 0) {
    for (let all in newArray) {
      console.log(newArray[all]);
    }
  }
}
solve(["remove", "remove", "remove"]);

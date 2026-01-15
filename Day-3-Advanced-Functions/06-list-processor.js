function solve(arr) {
  let newarr = [];
  for (let comand of arr) {
    let filter = comand.split(" ");

    if (filter[0] == "add") {
      newarr.push(filter[1]);
    } else if (filter[0] == "remove") {
      for (let i = 0; i < newarr.length; i++) {
        if (newarr[i] === filter[1]) {
          newarr.splice(i, 1);
        }
      }
    } else if (filter[0] == "print") {
      console.log(newarr.join(","));
    }
  }
}
solve(["add hello", "add again", "remove hello", "add again", "print"]);

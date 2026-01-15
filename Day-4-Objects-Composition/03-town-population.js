function solve(arr) {
  const city = {};

  for (let i = 0; i < arr.length; i++) {
    const curent = arr[i].split(" <-> ");
    const name = curent[0];
    let pop = Number(curent[1]);

    if (city[name] != undefined) {
        pop += city[name];
    } 
    city[name] = pop;
  }

  for (let nameOfCity in city) {
    console.log(`${nameOfCity} : ${city[nameOfCity]}`);
  }
}
console.log(
solve(["Istanbul <-> 100000",
"Honk Kong <-> 2100004",
"Jerusalem <-> 2352344",
"Mexico City <-> 23401925",
"Istanbul <-> 1000"])
);

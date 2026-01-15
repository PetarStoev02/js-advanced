function solve(arr,start,end) {
let startN=arr.indexOf(start);
let endN=arr.indexOf(end)+ 1;

return(arr.slice(startN,endN));


}
solve(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",

    "Sugar Cream Pie",
  ],

  "Key Lime Pie",

  "Lemon Meringue Pie"
);

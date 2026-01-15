function solve(str){
    let arr= str.split(/[\W]+/).filter(w => w.length > 0)
    .join(", ").toUpperCase();
    console.log(arr)
}
solve('Hi, how are you?')
function solution(input){


return function(ev){
    let result = input+Number(ev)
    return result
}
}

let add5 = solution(5);

console.log(add5(2));

console.log(add5(3));
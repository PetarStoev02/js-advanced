function solve(arr,rotation) {
   
    for(i=0;i<rotation;i++){
        arr.unshift(arr.pop())
    }

    console.log(arr.join(' '));

}
solve(['1', 
'2', 
'3', 
'4'], 
2
)
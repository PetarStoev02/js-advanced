function solve(num,par1,par2,par3,par4,par5){

    let result=0

    switch (par1){
        case "chop":
            result=num/2
            console.log(result)
        break;
        case "dice":
            result=Math.sqrt(num)
            console.log(result)
        break;
        case "spice":
            result=num+1
            console.log(result)
        break;
        case "bake":
            result=num*3
            console.log(result)
        break;
        case "fillet":
            result=num - (num * .20)
            console.log(result)
        break;
    }
    switch (par2){
        case "chop":
            result=result/2
            console.log(result)
        break;
        case "dice":
            result=Math.sqrt(result)
            console.log(result)
        break;
        case "spice":
            result=result+1
            console.log(result)
        break;
        case "bake":
            result=result*3
            console.log(result)
        break;
        case "fillet":
            result=result - (result * .20)
            console.log(result)
        break;
    }
    switch (par3){
        case "chop":
            result=result/2
            console.log(result)
        break;
        case "dice":
            result=Math.sqrt(result)
            console.log(result)
        break;
        case "spice":
            result=result+1
            console.log(result)
        break;
        case "bake":
            result=result*3
            console.log(result)
        break;
        case "fillet":
            result=result - (result * 0.20)
            console.log(result)
        break;
    }
    switch (par4){
        case "chop":
            result=result/2
            console.log(result)
        break;
        case "dice":
            result=Math.sqrt(result)
            console.log(result)
        break;
        case "spice":
            result=result+1
            console.log(result)
        break;
        case "bake":
            result=result*3
            console.log(result)
        break;
        case "fillet":
            result=result - (result *0.20)
            console.log(result)
        break;
    }
    switch (par5){
        case "chop":
            result=result/2
            console.log(result)
        break;
        case "dice":
            result=Math.sqrt(result)
            console.log(result)
        break;
        case "spice":
            result=result+1
            console.log(result)
        break;
        case "bake":
            result=result*3
            console.log(result)
        break;
        case "fillet":
            result=result - (result *0.20)
            console.log(result)
        break;
    }
}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
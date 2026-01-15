function createFormatter(separator, symbol, boleam, func) {

 return function(input){
     let value = Number(input)
     return func(separator, symbol, boleam,value)

 }

}


function currencyFormatter(separator, symbol, symbolFirst, value) {

    let result = Math.trunc(value) + separator;
    
    result += value.toFixed(2).substr(-2,2);
    
    if (symbolFirst) return symbol + ' ' + result;
    
    else return result + ' ' + symbol;
    
    }

let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);

console.log(dollarFormatter(5345)); // $ 5345,00

console.log(dollarFormatter(3.1429)); // $ 3,14

console.log(dollarFormatter(2.709)); // $ 2,71
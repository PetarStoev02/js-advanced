function solve(type,g,kg){

    let money=0
    let weight=g/1000
    let pricePerKg=kg
    let fruit=type

    money=(weight)*pricePerKg
    
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)

}
solve('orange', 2500, 1.80)
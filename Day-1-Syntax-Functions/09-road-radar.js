function solve(speed,area){
    let speedLimit=0
    let difference =0
    let status = ""

    if(area==="motorway"){
        speedLimit=130
         
        if(speedLimit>speed && speed > 0){
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        }else{
            difference=speed-speedLimit

            if(difference<=20){
                status="speeding"
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
            }else if(difference>20 && difference<=40){
                status="excessive speeding"
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
            }else if(difference>40){
                status="reckless driving"
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
            }
        }

    }else if(area==="interstate"){
        speedLimit=90

        if(speedLimit>speed && speed > 0){
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        }else{
            difference=speed-speedLimit

            if(difference<=20){
                status="speeding"
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
            }else if(difference>20 && difference<=40){
                status="excessive speeding"
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
            }else if(difference>40){
                status="reckless driving"
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
            }
        }

    }else if(area==="city"){
        speedLimit=50

        if(speedLimit>speed && speed > 0){
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        }else{
            difference=speed-speedLimit

            if(difference<=20){
                status="speeding"
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
            }else if(difference>20 && difference<=40){
                status="excessive speeding"
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
            }else if(difference>40){
                status="reckless driving"
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
            }
        }

    }else if(area==="residential"){
        speedLimit=20

        if(speedLimit>speed && speed > 0){
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        }else{
            difference=speed-speedLimit

            if(difference<=20){
                status="speeding"
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
            }else if(difference>20 && difference<=40){
                status="excessive speeding"
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
            }else if(difference>40){
                status="reckless driving"
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
            }
        }
    }
}
solve(40, 'city')
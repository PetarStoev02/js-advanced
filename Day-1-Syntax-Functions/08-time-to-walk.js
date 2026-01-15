function solve(s,m,km){

let distance=s*m

let speed= km/3.6

let time= distance/speed

let rest= Math.floor(distance/500)

let hours=Math.floor(time/3600)
let minutes=Math.floor(time/60)
let seconds=Math.round(time-(minutes*60))


console.log((hours < 10 ? "0" : "") + hours + ":" + (minutes + rest < 10 ? "0" : "")+ (minutes + rest) + ":"+ (seconds + rest < 10 ? "0" : "")+ seconds) ;
}
solve(4000,0.60,5)
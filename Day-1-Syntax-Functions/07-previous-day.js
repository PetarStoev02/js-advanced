function solve(y,m,d){

    let date = new Date(y, m-1, d );
    let oneDay = 24 * 60 * 60 * 1000;//86 400 000 milliseconds in one day
    let nextDate = new Date(date.getTime() - oneDay);
    console.log(nextDate.getFullYear() + "-" + (nextDate.getMonth() + 1) + "-" + nextDate.getDate());
}
 


solve(2016, 9, 30)
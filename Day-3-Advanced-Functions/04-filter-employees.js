function solve(data, criteria) {
  let arr = criteria.split("-");
  let corect = 0;

  let datas = JSON.parse(data);

  for (let data of datas) {
    let curent = Object.fromEntries(
      Object.entries(data).filter(([key]) => key.includes(arr[0]))
    );

    if (Object.values(curent) == arr[1]) {
      console.log(
        `${corect}. ${data.first_name} ${data.last_name} - ${data.email}`
      );
      corect++;
    }
  }
}
solve(
  `[{

    "id": "1",
    
    "first_name": "Ardine",
    
    "last_name": "Bassam",
    
    "email": "abassam0@cnn.com",
    
    "gender": "Female"
    
    }, {
    
    "id": "2",
    
    "first_name": "Kizzee",
    
    "last_name": "Jost",
    
    "email": "kjost1@forbes.com",
    
    "gender": "Female"
    
    },
    
    {
    
    "id": "3",
    
    "first_name": "Evanne",
    
    "last_name": "Maldin",
    
    "email": "emaldin2@hostgator.com",
    
    "gender": "Male"
    
    }]`,

  "gender-Female"
);

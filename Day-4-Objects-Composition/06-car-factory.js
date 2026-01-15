function solve(requirements) {
  let engine = {};
  let carriages = {};
  let wheels = [];

  let newObj={}

  newObj.model=requirements.model
  
  if (requirements.power <= 90) {
    engine.power = 90;
    engine.volume = 1800;

    newObj.engine = engine;
  } else if (requirements.power >90&& requirements.power<=120) {
    engine.power = 120;
    engine.volume = 2400;

    newObj.engine = engine;
  } else if (requirements.power>120&& requirements.power<=200) {
    engine.power = 200;
    engine.volume = 3500;

    newObj.engine = engine;
  }
  carriages.type = requirements.carriage;
  carriages.color = requirements.color;

  newObj.carriage = carriages;

  if (requirements.wheelsize % 2 === 0) {
    let corectSize = requirements.wheelsize - 1;
    for (let i = 0; i < 4; i++) {
      wheels.push(corectSize);
    }

    newObj.wheels = wheels;
  }else{
    for (let i = 0; i < 4; i++) {
      wheels.push(requirements.wheelsize);
    }
    newObj.wheels = wheels;
  }

 
  return newObj;
}
solve({
    model: 'Ferrari',
    power: 200,
    color: 'red',
    carriage: 'coupe',
    wheelsize: 21
});

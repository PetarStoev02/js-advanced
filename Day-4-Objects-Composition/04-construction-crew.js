function solve(worker) {
  if (worker.dizziness === true) {
    let requredAmount = Number(worker.weight) * 0.1 * Number(worker.experience);

    worker.levelOfHydrated += requredAmount;
    dizziness === false;
    return worker;
  } else {
    return worker;
  }
}
solve({
  weight: 80,

  experience: 1,

  levelOfHydrated: 0,

  dizziness: true,
});

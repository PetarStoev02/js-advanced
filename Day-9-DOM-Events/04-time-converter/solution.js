function attachEventsListeners() {
  let days = document.getElementById("days");
  let minutes = document.getElementById("minutes");
  let hours = document.getElementById("hours");
  let seconds = document.getElementById("seconds");

  let button1 = document.getElementById("daysBtn");
  let button2 = document.getElementById("hoursBtn");
  let button3 = document.getElementById("minutesBtn");
  let button4 = document.getElementById("secondsBtn");

  let rations = {
    days: 1,
    hours: 24,
    minutes: 1440,
    seconds: 86400,
  };

  button1.addEventListener("click", calc);
  button2.addEventListener("click", calc);
  button3.addEventListener("click", calc);
  button4.addEventListener("click", calc);

  function convert(value, unit) {
    let days = value / rations[unit];

    return {
      days: days,
      hours: days * rations.hours,
      minutes: days * rations.minutes,
      seconds: days * rations.seconds,
    };
  }
  function calc(ev) {
    let input = ev.target.parentElement.querySelector('input[type="text"]');

    let time = convert(Number(input.value), input.id);

    days.value = time.days;
    hours.value = time.hours;
    minutes.value = time.minutes;
    seconds.value = time.seconds;


  }
}

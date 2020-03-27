let seconds = document.querySelector('#seconds'),
    minutes = document.querySelector('#minutes'),
    hours = document.querySelector('#hours');

let secondsInDeg = (seconds) => {
  return 6 * seconds + 180;
}

let minutesInDeg = (minutes) => {
  return 6 * minutes + 180;
}

let hoursInDeg = (hours) => {
  return 30 * hours + 180;
}

let getSeconds = () => {
  return new Date().getSeconds();
}

let getMinutes = () => {
  return new Date().getMinutes();
}

let getHours = () => {
  return new Date().getHours();
}

let setTime = () => {
  seconds.style.transform = `rotate(${secondsInDeg(getSeconds())}deg)`;
  minutes.style.transform = `rotate(${minutesInDeg(getMinutes())}deg)`;
  hours.style.transform = `rotate(${hoursInDeg(getHours())}deg)`;
}

setTime();
setInterval(()=>{
  setTime();
}, 1000)

let today = new Date();
let day = today.getDay();
let hour = today.getHours();
let minutes = today.getMinutes() / 100;
let time = hour + minutes;
let weekday = new Array(7);
weekday[0] = "sunday";
weekday[1] = "monday";
weekday[2] = "tuesday";
weekday[3] = "wednesday";
weekday[4] = "thursday";
weekday[5] = "friday";
weekday[6] = "saturday";
let n = weekday[day];
setInterval(function() {
  document.getElementById("clock").innerHTML = new Date().toLocaleTimeString();
}, 1000);

function door() {
  if ((day = 0) || (time < 8.3 || time > 20.0)) {
    document.getElementById("store").innerHTML = "closed";
  } else {
    document.getElementById("store").innerHTML = "open";
  }
}
document.getElementById("now").innerHTML = "it's " + n + ", " + time;

door();

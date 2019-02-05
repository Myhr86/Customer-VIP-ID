var yourAge = document.getElementById("ageInput");

var youthLower = 601;
var youthUpper = 1000;
var oldEarlyLower = 0;
var oldEarlyUpper = 200;
var oldLateLower = 201;
var oldLateUpper = 600;

var getNumberYouth = Math.floor(Math.random() * (youthUpper - youthLower)) + youthLower;
var getNumberOldAndEarly = Math.floor(Math.random() * (oldEarlyUpper - oldEarlyLower)) + oldEarlyLower;
var getNumberOldAndLate = Math.floor(Math.random() * (oldLateUpper - oldLateLower)) + oldLateLower;

var d = new Date();
var n = d.getHours();

var regEarly = n;

function clock() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  document.getElementById("showTime").innerHTML = "Time: " + h +  ":" + m;
  var t = setTimeout(clock, 500);
}

clock();

function checkTime(i) {
  if(i <10) {i = "0" + i};
  return i;
}



function vipNumber() {
  var runnerAge = yourAge.value;
  if (runnerAge >= 18 && regEarly < 11) {
    getNumberOldAndEarly += 200;
    getNumberOldAndLate += 600;
    getNumberYouth += 1000;
  }
  if (runnerAge >= 18 && regEarly < 11) {
    document.getElementById("demo").innerHTML = (`Hurray! You get the Gold Member ID, with the number #${getNumberOldAndEarly}.`);
  }
  else if (runnerAge >= 18 && regEarly > 10) {
    document.getElementById("demo").innerHTML = (`Your Silver ID number is #${getNumberOldAndLate}. Congratulations!`);
  }
  else if (runnerAge < 18) {
    document.getElementById("demo").innerHTML = (`Yay! Your ID number is #${getNumberYouth}.`)
  }

  yourAge.addEventListener("input", vipNumber());
}

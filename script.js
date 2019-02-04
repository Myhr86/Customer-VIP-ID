var yourAge = document.getElementById("ageInput");

var getNumber = Math.floor(Math.random() * 1000);

var d = new Date();
var n = d.getHours();
var regEarly = n;



function raceNumber() {
  var runnerAge = yourAge.value;
  if (runnerAge >= 18 && regEarly < 11) {
    getNumber += 1000;
  }
  if (runnerAge >= 18 && regEarly < 11) {
    document.getElementById("demo").innerHTML = (`Hurray! You get the Gold Member ID, with the number #${getNumber}.`);
  }
  else if (runnerAge >= 18 && regEarly > 10) {
    document.getElementById("demo").innerHTML = (`Your Silver ID number is #${getNumber}. Congratulations!`);
  }
  else if (runnerAge < 18) {
    document.getElementById("demo").innerHTML = (`Yay! Your ID number is #${getNumber}.`)
  }

  yourAge.addEventListener("input", raceNumber());
}

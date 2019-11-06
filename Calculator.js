// Half-number

// get the id of the button
var halfButton = document.getElementById("half-button");

// add a function event listener for clicking
halfButton.addEventListener("click", halfNumber);

// make a function that halves the value
function halfNumber() {
  // bring the input value from the user and half it
  var inputNum = document.getElementById("half-input").value / 2;
  // return to user the alert
  alert("You input " + inputNum + "!");
}


// Fortune teller

var fButton = document.getElementById("fortune-button");

fButton.addEventListener("click", fortune);

var luck = ["good", "bad", "excellent", "horrible"];
var ranNum = Math.floor(Math.random() * luck.length);

function fortune() {
  var inputName = document.getElementById("fortune-input").value;
  alert(inputName + ", today will be a " + luck[ranNum] + " day!")
}


// Restyle the fortune text

fButton.addEventListener("click", restyle);

var a1 = ["teal", "pink", "red", "blue", "gray"];
var a2 = ["white", "black"];
var a3 = ["7vmin", "4vmin", "5vmin", "6vmin"];
var a4 = ["serif", "san-serif"];

var ran1 = Math.floor(Math.random() * a1.length);
var ran2 = Math.floor(Math.random() * a2.length);
var ran3 = Math.floor(Math.random() * a3.length);
var ran4 = Math.floor(Math.random() * a3.length);
var ran5 = Math.floor(Math.random() * a4.length);

function restyle() {
  document.getElementById("box").style.backgroundColor = a1[ran1];
  document.getElementById("l1").style.color = a2[ran2];
  document.getElementById("l2").style.color = a2[ran2];
  document.getElementById("l1").style.fontSize = a3[ran3];
  document.getElementById("l2").style.fontSize = a3[ran4];
  document.getElementById("l1").style.fontFamily = a4[ran5];
  document.getElementById("l2").style.fontFamily = a4[ran5];
}

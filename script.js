//name section

var fullName = "anonymous";

function setName() {
  var fullName = prompt("What is your full name?");
  document.querySelector("#fullName").textContent = fullName;
}

function printName() {
  document.querySelector("#nameInput").textContent = fullName;
}



//face section
var eyeBrows1 = document.querySelector("#eyebrows1");
var eyeBrows2 = document.querySelector("#eyebrows2");
var eyeLids1 = document.querySelector("#eyelids1");
var eyeLids2 = document.querySelector("#eyelids2");
var lips1 = document.querySelector("#lips1");
var lips2 = document.querySelector("#lips2");

//reference for functions below: https://www.youtube.com/watch?v=n3BbDbCHiX4

function changeEyebrowColor(){
  let color = document.getElementById('colorInputColor').value; 
  eyeBrows1.style.color = color;
  eyeBrows2.style.color = color;
}

function changeEyelids() {
  let background = document.getElementById('colorInputColor1').value; 
  eyeLids1.style.background = background;
  eyeLids2.style.background = background;
} 

function changeLips() {
  let background = document.getElementById('colorInputColor2').value;
  let lipBottom = document.getElementById('lips1').value;
  lips1.style.background = background;
}


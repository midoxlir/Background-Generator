// Selectors

let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let cssColor = document.querySelector("h3");
let body = document.getElementById("gradient");
let button = document.querySelector(".random-button");

// ____________Functions

// change the background color by user input

function setBackground() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  cssColor.textContent = body.style.background + ";";
}

// generate Random colors

function randomColors() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const colors = "rgb(" + r + ", " + g + ", " + b + ")";
  return colors;
}

// set the random colors for the button

function setRandomColors() {
  body.style.background =
    "linear-gradient(to right, " + randomColors() + ", " + randomColors() + ")";
  cssColor.textContent = body.style.background + ";";
}

//_____________Calls

// set the background color fixed
setBackground();
// colors by input
color1.addEventListener("input", setBackground);
color2.addEventListener("input", setBackground);
// Random colors by click
button.addEventListener("click", setRandomColors);

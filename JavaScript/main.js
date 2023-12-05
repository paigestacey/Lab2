
//external.js

//footer
function updateFooterDate() {
  var currentDate = new Date();

  var formattedDate = currentDate.toLocaleDateString();

  var currentDateElement = document.getElementById("currentDate");

  currentDateElement.textContent = formattedDate;
}

updateFooterDate();

//alert button
 function displayTextOnClick() {

  var displayElement = document.getElementById("displayText");

  displayElement.textContent = "Welcome to my portfolio Website! Feel free to take a look around. Here you can learn more about me! I hope you enjoy :)";
}

var btnalert = document.getElementById("btn-alert");

btnalert.addEventListener("click", displayTextOnClick);

//hover button

document.getElementById('hover').onmouseover = () => {
  document.getElementById('hover').innerText = 'Woahhh';
};

document.getElementById('hover').onmouseleave = () => {
  document.getElementById('hover').innerText = 'Hover Over Me';
};


//Incrementing button

var counterValue = 0;

function updateCounterDisplay() {
    var counterElement = document.getElementById("btn-counter");

    counterElement.textContent = "Number: " + counterValue;
}

function incrementCounter() {
    counterValue++;

    updateCounterDisplay();
}

var counterButton = document.getElementById("btn-counter");

counterButton.addEventListener("click", incrementCounter);



//if-else



//loops














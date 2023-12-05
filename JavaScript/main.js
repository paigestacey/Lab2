
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

var clickthis = document.getElementById("clickthis");

clickthis.addEventListener("click", displayTextOnClick);

//hover button



//Incrementing button



//if-else



//loops














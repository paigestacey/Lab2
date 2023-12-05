
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


//Incrementing button and else

var counterValue = 0;

function updatetxtcounterandStyle() {
    var txtcounter = document.getElementById("txt-counter");

    txtcounter.textContent = counterValue;

    var btncounter = document.getElementById("btn-counter");

    if (counterValue % 2 === 0) {
     //even 
      btncounter.style.backgroundColor = "black";
      btncounter.style.color = "white";
    } else {
      //odd
      btncounter.style.backgroundColor = "yellow";
      btncounter.style.color = "black";
    }
  }

function incrementCounter() {

    counterValue++;

    updatetxtcounterandStyle();
}

var btncounter = document.getElementById("btn-counter");

btncounter.addEventListener("click", incrementCounter);

updatetxtcounterandStyle();


//loops















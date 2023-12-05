
alert('Hello, World!');

var year = new Date().getFullYear();
var date = `&copy; PaigeStacey ${year}.`;

document.getElementsByTagName('footer')[0].innerHTML = date;


document.addEventListener("DOMContentLoaded", function () {
    const clickthis = document.getElementById('clickthis');

  Clickthis.addEventListener("clickthis", function () {
   alert('Hello!');
  });

});







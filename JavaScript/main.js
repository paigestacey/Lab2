
alert('Hello, World!');

var year = new Date().getFullYear();
var date = `&copy; PaigeStacey ${year}.`;

document.getElementsByTagName('footer')[0].innerHTML = date;

document.getElementById('clickthis').addEventListener('click', function() {
  alert("Welcome!");
 
 });








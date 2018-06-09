var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/heavy.jpg') {
      myImage.setAttribute ('src','images/250px-Sandvich.png');
    } else {
      myImage.setAttribute ('src','images/heavy.jpg');
    }
}
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'POOTIS ' + myName;
  }
var myButton = document.querySelector('button');
myButton.onclick = function() {
    setUserName();
  }
var myHeading = document.querySelector('h1');
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'POOTIS ' + storedName;
  }
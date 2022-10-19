console.log(document.getElementsByTagName("div"))
console.log(document.getElementsByClassName("buttons"))
var elements = document.getElementsByClassName('buttons');
var requiredElement = elements[0];
var elements2 = document.getElementsByTagName('h2');
var requiredElementh2 = elements2[1];
requiredElementh2.innerHTML="hola"
console.log(requiredElementh2)
console.log(elements[0])
console.log(document.querySelectorAll("div.buttons"))

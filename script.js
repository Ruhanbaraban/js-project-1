//1
const header = document.getElementById("header");
header.innerHTML = "Я все еще Руслан!";

//2
const header2 = document.getElementsByClassName("forEdit")[0];
header2.style.color = "red";
header2.style.backgroundColor = "green";

//3
const body = document.querySelector("body")
const newElem = document.createElement("p");
newElem.classList.add("createdPar");
newElem.innerHTML = "Я последний"
body.appendChild(newElem);

//4
const forDelete = document.getElementById("forDelete")
body.removeChild(forDelete);

//5
const link = document.getElementById("link");
link.setAttribute("href", "https://ru.wikipedia.org/wiki/Хабр");
console.log(link.getAttribute("href"))

//6
const newElem2 = document.createElement("div");
newElem2.classList.add("newElem2")
body.appendChild(newElem2);

//7
const toggleElem = document.getElementById("forToggle")
toggleElem.classList.toggle("active")
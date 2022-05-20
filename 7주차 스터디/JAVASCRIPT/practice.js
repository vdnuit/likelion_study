/*
document.getElementById("lion").style.color="red";
document.getElementById("tiger").style.color="red";
document.getElementById("bear").style.color="red";

const animal = document.getElementsByTagName("li");

document.getElementsByClassName("animal")[1].style.color="red";

document.querySelectorAll('.animal')[0].style.color = "red";
*/
document.querySelectorAll('.animal')[0].innerHTML = "dog";

const animals = document.getElementById("animals");

animals.innerHTML+="<li class = 'animal'>Cat</li>";

document.querySelectorAll(".box")[0].classList.add("Purple");

document.querySelectorAll(".box")[0].classList.remove("Purple");

document.querySelectorAll(".box")[0].classList.toggle("Yellow");

//function for hamburger menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

//function for date on footer
var current = new Date();
var day = [" Sunday", " Monday", "Tuesday", " Wednesday", " Thursday", "Friday", " Saturday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("date").innerHTML = day[current.getDay()] +
    ", " + current.getDate() + " " + month[current.getMonth()] + " " +
    current.getFullYear();

//function for Saturday pancake banner
let d = new Date();
let n = d.getDay();
// console.log(n);
if (n == 5) {
    document.querySelector(".satBanner").style.display = "block";
}


  
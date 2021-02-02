// function for hamburger menu//
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

//function for date on footer//
var current = new Date();
var day = [" Sunday", " Monday", "Tuesday", " Wednesday", " Thursday", "Friday", " Saturday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("date").innerHTML = day[current.getDay()] +
    ", " + current.getDate() + " " + month[current.getMonth()] + " " +
    current.getFullYear();

//function for Saturday pancake banner//
/*var d = new Date();
var n = d.getDay();
console.log(n);
if (n == 2) {
    document.getElementById("satBanner").innerHTML = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
}*/
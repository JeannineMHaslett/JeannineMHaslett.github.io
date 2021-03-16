

//function for hamburger menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

//function for date on footer
let current = new Date();
let day = [" Sunday", " Monday", "Tuesday", " Wednesday", " Thursday", "Friday", " Saturday"];
let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("date").innerHTML = day[current.getDay()] +
    ", " + current.getDate() + " " + month[current.getMonth()] + " " +
    current.getFullYear();


//function for Saturday pancake banner

if (current.getDay() == 5) {
    document.querySelector(".satBanner").style.display = "block";
}

//visitor counter

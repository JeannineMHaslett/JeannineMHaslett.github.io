function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

let current = new Date();
let day = [" Sunday", " Monday", "Tuesday", " Wednesday", " Thursday", "Friday", " Saturday"];
let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("date").innerHTML = day[current.getDay()] +
    ", " + current.getDate() + " " + month[current.getMonth()] + " " +
    current.getFullYear();


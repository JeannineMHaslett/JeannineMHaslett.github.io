function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide");
 }
 var current = new Date();
 var day = [" Sunday", " Monday", "Tuesday", " Wednesday", " Thursday", "Friday", " Saturday"];
 var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 
 document.getElementById("date").innerHTML = day[current.getDay()] +
     ", " + current.getDate() + " " + month[current.getMonth()] + " " +
     current.getFullYear();

    // getDay() days are from 0-6 //
    //var d = getDay();//
    // if d = 6{//
//document.getElementById("satBanner").innerHTML = d;//
// }
//else {
d = "hide";
//}//
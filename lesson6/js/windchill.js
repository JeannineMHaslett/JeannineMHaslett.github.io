// LaTeX: f=35.74+0.6215\:t-35.75\:s^{0.16}+0.4275\:t\:s^{0.16}f = 35.74 + 0.6215 t − 35.75 s 0.16 + 0.4275 t s 0.16, 
//where f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit, and s is the wind speed in miles per hour.



let t = parseInt(document.getElementById("temp").innerHTML="");
let s = parseInt(document.getElementById("speed").innerHTML="");

let x = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
x = x.toFixed();

if ((t > -50) || (s < 1)) {
    document.getElementByID("windchill").innerHTML = "None";
} else {
    document.getElementById("windchill").innerHTML = x;
}


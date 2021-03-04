var x = document.getElementById("temp").value; 
var y = document.getElementById("speed").value; 

t = parseInt(document.getElementById("temp").innerHTML); 
s = parseInt(document.getElementById("speed").innerHTML); 
if (t <= 50 && s >= 3) { 
document.getElementById('windchill').innerHTML = windchill(t,s) + "&#176;"; 
} 
else { 
document.getElementById("windchill").text = "N/A"; 
} 
function windchill(t,s) { 
let w = Math.round(35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16)); return w; 
} 



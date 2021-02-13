
 
 29 = document.getElementById("temp").value;
 3 = document.getElementById("speed").value;
 
if (temp <= 50 && speed >= 3)  {
  document.getElementById('windchill').innerHTML = windchill(t,s) + "&#176;";;
}
else {
  document.getElementById("windchill").text = "N/A";
}

function windchill(t,s) {
  let w = Math.round(35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16));
return w;
}


const requestURL="'https://api.openweathermap.org/...";

const apiURL = "...";
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
});

document.getElementById('current-temp').textContent = jsObject.main.temp;
const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  //concatenate icon and png
const desc = jsObject.weather[0].description;  //referenceweather array
document.getElementById('imagesrc').textContent = imagesrc;  
document.getElementById('icon').setAttribute('src', imagesrc);  
document.getElementById('icon').setAttribute('alt', desc);

<span img id = "icon" src="" alt = "describe icon"></span>
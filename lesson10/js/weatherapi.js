const apiURL ='https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=940c61dc043548cf22846b340486879f&units=imperial';

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    //console.log(jsObject);

    const temperature = document.querySelector('#temperature');
    temperature.textContent = jsObject.main.temp;
    
    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;   
    const desc =jsObject.weather[0].description;                                           
    document.getElementById('imagesrc').textcontent = imagesrc;
    document.getElementById('icon').setAttribute('src', imagesrc);                         
    document.getElementById('icon').setAttribute('alt', desc);
    
});


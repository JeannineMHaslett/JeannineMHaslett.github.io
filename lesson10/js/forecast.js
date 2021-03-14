let cityid = 5604473;
let appid = `940c61dc043548cf22846b340486879f`;
const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${5604473}&units=imperial&appid=940c61dc043548cf22846b340486879f`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        document.getElementById('currently').textContent = jsObject.list[0].weather.description;
        document.getElementById('high').textContent = jsObject.list[0].main.temp_max;
        document.getElementById('windspeed').textContent = jsObject.list[0].wind.speed;
        document.getElementById('windchill').innerHTML = windchill;
        document.getElementById('humidity').textContent = jsObject.list[0].main.humidity + "%";

        //calculate windchill
        let t = (jsObject.list[0].main.temp);
        let s = (jsObject.list[0].wind.speed);

        if (t <= 50 && s >= 3) {
            document.getElementById("windchill").innerHTML = windchill(t, s).toFixed(0);
        } else {
            document.getElementById("windchill").innerHTML = "N/A";
        }

        function windchill(t,s) {
            let w = Math.round(35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16)); return w; 
        };

        //forecast
        let day = 0; 
        const dayofweek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
        const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        //console.log(forecast);
        const imagesrc = 'https://openweathermap.org/img/wn/' + forecast[day].weather[0].icon + '@2x.png';
        document.getElementById(`day0${day+1}`).textContent = dayofweek[day].weather;
        document.getElementById(`forecast0${day+1}`).textContent = (main.temp);
        document.getElementById(`icon0${day+1}`).setAttribute('src', imagesrc);
        document.getElementById(`icon0${day+1}`).setAttribute('alt', icon);
        day++;
        });
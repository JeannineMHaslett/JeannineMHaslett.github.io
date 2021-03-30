//json source
const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${5604473}&units=imperial&appid=940c61dc043548cf22846b340486879f`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        document.getElementById('currently').textContent = jsObject.list[0].weather[0].main;
        document.getElementById('high').textContent = jsObject.list[0].main.temp_max;
        document.getElementById('windspeed').textContent = jsObject.list[0].wind.speed;
        document.getElementById('humidity').textContent = jsObject.list[0].main.humidity + "%";
        document.getElementById('windchill').innerHTML = windchill;
        //calculate windchill
        let t = (jsObject.list[0].main.temp);
        let s = (jsObject.list[0].wind.speed);

        if (t <= 50 && s >= 3) {
            document.getElementById("windchill").innerHTML = windchill(t, s).toFixed(0);
        } else {
            document.getElementById("windchill").innerHTML = "N/A";
        }

        function windchill(t, s) {
            let w = Math.round(35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16));
            return w;
        };
    });
//forecast
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${5604473}&units=imperial&appid=940c61dc043548cf22846b340486879f`;
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
            const forecastweek = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
            let day = 0;
            const dayofweek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

        forecastweek.forEach((x) => {
            let d = new Date(x.dt_txt);
            //console.log(d);
            document.getElementById(`dayofweek${day + 1}`).textContent = dayofweek[d.getDay()];
            
            const imagesrc = 'https://openweathermap.org/img/wn/' + x.weather[0].icon + '@2x.png';
            document.getElementById(`icon${day + 1}`).setAttribute('src', imagesrc);

            document.getElementById(`forecast${day + 1}`).innerHTML = (x.main.temp);
            day++;
        })    
        });
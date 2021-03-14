const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${5604473}&units=imperial&appid=940c61dc043548cf22846b340486879f`;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let temperature = Math.round(jsObject.main.temp);
    let windspeed = jsObject.wind.speed;
    document.getElementById("").textContent =
      jsObject.weather[0].description;
    document.getElementById("temperature").textContent = temperature;
    document.getElementById("windspeed").textContent = windspeed;
    document.getElementById("humidity").textContent =
      jsObject.main.humidity + "%";

    if (temperature <= 50 && windspeed >= 3) {
      let factor = windChill(temperature, windspeed);
      document.querySelector("#output").innerHTML = factor + "&#176;F";
    } else {
      document.querySelector("#output").innerHTML = "N/A";
    }

    function windChill(tempF, speed) {
      let t = tempF;
      let s = speed;
      let f = Math.round(
        35.74 +
          0.6215 * t -
          35.75 * Math.pow(s, 0.16) +
          0.4275 * t * Math.pow(s, 0.16)
      );
      return f;
    }
  });

    
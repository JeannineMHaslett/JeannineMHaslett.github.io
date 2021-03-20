//get weather api
let cityid = 5604473;
let appid = `940c61dc043548cf22846b340486879f`;
const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${5604473}&units=imperial&appid=940c61dc043548cf22846b340486879f`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    });
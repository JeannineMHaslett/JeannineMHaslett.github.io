let cityid = 5604473;
let appid = `940c61dc043548cf22846b340486879f`;
const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${5604473}&unitsimperial&appid=940c61dc043548cf22846b340486879f`;

fetch(apiURL)
.then((response) => response.json())
.then((jsobject) => {
    //console.log (jsobject);
let day = 0;
const dayofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

const fiveDays = jsobject.list.filter(x => x.dt_txt.includes('18:00:00'));
//console.log (fiveDays);

fiveDays.forEach(i => {
    let d = new Date(i.dt_txt);
    let t = main.temp;
    const imagesrc = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;
    const alt = weather[0].description;

document.getElementById(`dayofweek${day+1}`).textContent = dayofweek[d.getDay()];
document.getElementById(`forecast${day+1}`).textContent = i.main.temp;
document.getElementById(`imagesrc${day+1}`).setAttribute('src', imagesrc);
document.getElementById(`alt${day+1}`).setAttribute('alt', alt);
day++ 
});
});

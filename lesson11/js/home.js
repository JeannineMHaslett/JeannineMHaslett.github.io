//set JSON source
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

//fetch data
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        const towns = jsonObject['towns'];

        //create town input    
        const fishhaven = towns.filter(x => x.name === "Fish Haven");
        const preston = towns.filter(x => x.name === "Preston");
        const sodasprings = towns.filter(x => x.name === "Soda Springs");

        const sort = [];
        sort.push(...fishhaven, ...preston, ...sodasprings)
        console.log(sort);

        // let eachTown = towns.sort('sort');
        sort.forEach(town => {
            let card = document.createElement('div');
            let info = document.createElement('section');
            let name = document.createElement('h2');
            let motto = document.createElement('h3');
            let year = document.createElement('p');
            let pop = document.createElement('p');
            let rain = document.createElement('p');
            let photo = document.createElement('img');

            //use template literals
            name.textContent = `${town.name}`;
            motto.textContent = `${town.motto}`;
            year.textContent = `Year Founded: ${town.yearFounded}`;
            pop.textContent = `Population: ${town.currentPopulation}`;
            rain.textContent = `Annual Rainfall: ${town.averageRainfall}`;
            photo.src = `images/${town.photo}`;
            photo.alt = `${town.name}`;

            card.append(info);
            info.append(name);
            info.append(motto);
            info.append(year);
            info.append(pop);
            info.append(rain);
            card.append(photo);
            document.querySelector(".towns").appendChild(card);
        });
    })
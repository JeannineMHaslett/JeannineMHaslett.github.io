//set JSON source
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

//fetch data
fetch(requestURL)
.then(function (response) {
    return response.json();
})

.then(function (jsonObject){
    const towns = jsonObject['towns'];
    console.log(towns);
    //function sort(towns) {
       // if (towns.name == "Preston" || towns.name == "Fish Haven" || towns.name == "Soda Springs") {
       //   return true;
      //  }
     // };

    //select output location
    //const cards = document.querySelector('.cards');

    const fishHaven = towns.filter(x => x.name === "Fish Haven");
    const preston = towns.filter(x => x.name === "Preston");
    const sodasprings = towns.filter(x => x.name === "Soda Springs");

    const sort = [];
    sort.push(...fishHaven, ...preston, ...sodasprings)
    console.log(sort);

   // let eachTown = towns.sort('sort');
    sort.forEach(town => {
      let card = document.createElement('section');
      let name = document.createElement('h2');
      let motto = document.createElement('h3');
      let year = document.createElement('p'); 
      let pop = document.createElement('p');
      let rain = document.createElement('p');
      let photo = document.createElement('img'); 

      //use template literals
      name.textContent = `${town.name}`;
      motto.textContent = `${town.motto}`;
      year.textContent = `Year Founded: ${town.year}`;
      pop.textContent = `Population: ${town.pop}`;
      rain.textContent = `Annual Rainfall: ${town.rain}`;
      photo.src = `images/${town.photo}`;
      
      card.append(name);
      card.append(motto);
      card.append(year);
      card.append(pop);  
      card.append(rain);
      card.append(photo);  
      document.querySelector(".towns").appendChild(card);
    });
})

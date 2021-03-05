//set the JSON source URL
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

//use fetch to obtain a promise for
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
            //console.table(jsonObject); //temporary checking for a valid response and data parsing
            const prophets = jsonObject['prophets'];
            //select output location
            const cards = document.querySelector('.cards');

            prophets.forEach(prophet => {
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let pimg = document.createElement('img');
                let p = document.createElement('p');
                let p2 = document.createElement('p');

                //use template literals
                h2.textContent = `${prophet.name} ${prophet.lastname}`;
                pimg.setAttribute("src", prophet.imageurl);
                pimg.setAttribute('alt', `Portrait of ${prophet.name} who was born in ${prophet.birthplace} in the year 
                ${prophet.birthdate.substring(prophet.birthdate.length - 4)}!`)
                p.textContent = 'p', "Date of Birth: ${prophet.birthdate}";
                p2.textContent = 'p2',"Place of Birth: ${prophet.birthplace}";

                card.append(h2);
                card.append(p);
                card.append(p2);
                card.append(pimg);
                cards.append(card);
            });

            const utah = document.querySelector('.utah');
            const utahfilter = prophets.filter(x => x.birthplace == "Utah");

            //followed video for the Utah prophets

            utahfilter.forEach(utahprophet => {
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let pimg = document.createElement('img');

                //use template literals
                h2.textContent = `${utahprophet.name} ${utahprophet.lastname}`;
                pimg.setAttribute("src", utahprophet.imageurl);
                pimg.setAttribute('alt', `Portrait of ${utahprophet.name} who was born in ${utahprophet.birthplace} in the year 
                ${utahprophet.birthdate.substring(utahprophet.birthdate.length - 4)}!`)
               
                
                pimg.style.width = '200px';

                card.append(h2);
                card.append(pimg);
                utah.append(card);

            });
        });
const requestURL = 'https://JeannineMHaslett.github.io/belen/business.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
            const business = jsonObject['business'];
            const cards = document.querySelector('.cards');

            prophets.forEach(prophet => {
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let p = document.createElement('p');
                let p2 = document.createElement('p');
                let pimg = document.createElement('img');

                //use template literals
                h2.textContent = `${business.name}`;
                pimg.setAttribute("src", business.imageurl);
                pimg.setAttribute('alt', `Photo of ${business.name}`)
                p.textContent = `Address: ${business.address}`;
                p2.textContent = `Phone: ${business.phone}`;
                p3.textContent = `Website: ${business.website}`;

                pimg.style.width = '250px';

                card.append(h2);
                card.append(p);
                card.append(p2);
                card.append(p3)
                card.append(pimg);
                cards.append(card);
            })
        });

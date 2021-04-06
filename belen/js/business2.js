const requestURL = 'https://JeannineMHaslett.github.io/belen/business.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
            console.log(jsonObject);
            const business = jsonObject['business'];
            const cards2 = document.querySelector('.cards2');

            business.forEach(each_business => {
                let card = document.createElement('section');
                let pimg = document.createElement('img');
                let h2 = document.createElement('h2');
                let p = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
              

                h2.textContent = `${each_business.name}`;
                pimg.setAttribute("src", `${each_business.Imageurl}`);
                pimg.setAttribute('alt', `Photo of ${each_business.name}`)
                p.textContent = `Address: ${each_business.address}`;
                p2.textContent = `Phone: ${each_business.phone}`;
                p3.textContent = `website: ${each_business.website}`;

                pimg.style.width = '250px';

                cards2.append(card);
                card.append(pimg);
                card.append(h2);
                card.append(p);
                card.append(p2);
                card.append(p3)
            })
        });
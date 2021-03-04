//set the JSON source URL
const requestURL = 'byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

//use fetch to obtain a promise for
fetch(requestURL)
.then(function(response) {
    return response.json();
})
.then(function(jsonObject){
    console.table(jsonObject); //temporary checking for a valid response and data parsing
});

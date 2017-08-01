//very simple creation of a hash map

let myObj = {};

for (let i = 0; i < 10; i++) {
  myObj[i] = true;
}

function get(key) {
  return myObj[key];
}

let cityArr = ['tacoma', 'seattle', 'tampa'];

function filterCities(query) {
  let filteredCities = [];
  cityArr.forEach(function(city) {
    let truncatedCityName = city.slice(0, query.length);
    if (truncatedCityName === query) {
      filteredCities.push (city);
    }
  });
  return filteredCities;
}

console.log(filterCities('ta'));

//collection of N strings and Q queries.

//For each query, you are given a string, and you need to find out how many times this string occurs in the given collection of N strings

function processData(input) {
  let stringMap = {};
  let arrInput = parseData(input);
  let numStrings = arrInput.shift().join('');

  for (let i = 0; i < numStrings; i++) {
    let queryString = arrInput.shift().join('');

    if(stringMap[queryString]) { //if that string exists on the object already...
      stringMap[queryString] +=1;
    } else {
      stringMap[queryString] = 1;
    }

  }

  let numQueries = arrInput.shift().join('');

  for (let i = 0; i < numQueries; i++) {
    let queryString = arrInput.shift().join('');

    if(stringMap[queryString]) {
      console.log(stringMap[queryString]);
    } else {
      console.log('0');
    }
  }
}


function parseData(input) {
  let splitInput = input.split('\n');

  let stringArr = splitInput.map(function(ele) {
    return ele.split(' ');
  });
  return stringArr;
}

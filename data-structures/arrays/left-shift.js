//given an array A = [1,2,3,4,5], one left rotation would be: [2,3,4,5,1]

//challenge: print a single line of space separated integers that denote the value of the array afer d rotations

function processData(input) {
  let arrInput = parseData(input);
  let numRotations = parseInt(arrInput[0][1]);
  let usableArr = arrInput[1].map(function(ele) {
    return parseInt(ele);
  });

  while(numRotations > 0) {
    usableArr.push(usableArr.shift());
    numRotations -= 1;
  }
  console.log(usableArr.join(' '));
}

function parseData(input) {
  let splitInput = input.split('\n');

  let stringArr = splitInput.map(function(ele) {
    return ele.split(' ');
  });
  return stringArr;
}

/*

Given an array of integers, find and print the maximum number of integers such that the absolute difference between any two of of the chosen integers is <= 1

my process:

build an object with numbers 0-100
Use object values to track how many times an integer appears in the array
loop over the object to check the sum of the values of each pairs
highest sum is the size of the largest array that fits the properties

*/

function pickNum(array) {
  let integerTracker = {};
  let sumOfBiggestPair = 0;
  let pointer = 1;
  for (let i = 1; i < 100; i++) {
    integerTracker[i] = 0; //load the object
  }

  for(let i = 0; i < array.length; i++ ) {
    integerTracker[array[i]] += 1;
  }

  for (let i = 0; i < 100; i++) {
    if ((integerTracker[i] + integerTracker[pointer]) > sumOfBiggestPair) {
      sumOfBiggestPair = (integerTracker[i] + integerTracker[pointer]);
      pointer += 1;
    } else {
      pointer += 1;
    }
  }
  console.log(sumOfBiggestPair);
}

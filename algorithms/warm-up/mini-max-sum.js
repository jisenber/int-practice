/*
Input Format

A single line of five space-separated integers.

Constraints

Each integer is in the inclusive range .
Output Format

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than 32 bit integer.)

*/

function miniMaxSum(array) {
  let arrayOfArrays = [];
  let answer = {};
  answer.lowest = null;
  answer.highest = null;
  let arr1 = [array[0], array[1], array[2], array[3]];
  let arr2 = [array[0], array[1], array[2], array[4]];
  let arr3 = [array[0], array[2], array[3], array[4]];
  let arr4 = [array[0], array[1], array[3], array[4]];
  let arr5 = [array[1], array[2], array[3], array[4]];

  arrayOfArrays.push(arr1, arr2, arr3, arr4, arr5);

  arrayOfArrays.forEach(function(array) {
    let checkMe = array.reduce(function(a, b) {
      return a+b;
    });
    if (!answer.lowest) {
      answer.lowest = checkMe;
    }
    if (!answer.highest) {
      answer.highest = checkMe;
    }
    if (checkMe > answer.highest) {
      answer.highest = checkMe;
    }
    if (checkMe < answer.lowest)  {
      answer.lowest = checkMe;
    }
  });
  console.log(answer.lowest, answer.highest);
}

miniMaxSum([1,2,3,4,5]);

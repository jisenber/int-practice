/*

a flock of n birds is flying across the continent. Each bird has a type, designated by numbers 1,2,3,4,5.

given an array of n integers where each integer describes the type of bird in the flock, find and print the type of type of bird that is the most common

my solution:
use an object to index each type of bird. Use the obj to keep track of number of instances that a type of a bird appears in an array. then compare the values of each key in the obj and print out the key with the highest value

*/

function migratoryBirds(n, ar) {
  let types = {
    '1':0,
    '2':0,
    '3':0,
    '4':0,
    '5':0
  };
  for (let i = 0; i< ar.length; i++) {
    types[ar[i]] += 1;
  }
  let answer;
  let lastBiggest = 0;
  for (num in types) {
    if (types[num] > lastBiggest) {
      lastBiggest = types[num];
      answer = num;
    }
  }
  return answer;
}

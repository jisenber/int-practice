/*

You have two strings of length a+b.
 | Length of S1 - Length S2 | is always 0 or 1. In other words the strings are the same size, or one is one bigger than the other.
 it is not possible for strings of unequal length to be anagrams of each other


 Strategy:
  base case: if String length % 2 !== 0, return -1 (strings are uneven length)

  split them into their respective strings
  middle = string.length/2
  S1 = string.slice(0,middle)
  S2 = string.slice(middle)

  attach all elements of string 1 into a hashMap and the value of each char should be incremented as it is counted

  iterate over string 2 and decrement the values in the hash map as each character is counted

  iterate over the object and change all values to their absolute values

  iterate over object and sum all values up and return the final value

*/


function anagram(s) {
  var counter = 0;
  var stringObj = {};
  if(s.length % 2 !== 0) {
    return -1;
  } else {
    var middle = s.length/2;
    var S1 = s.slice(0, middle);
    var S2 = s.slice(middle);
  }
  for (var i = 0; i < S2.length; i++) {
    if(!stringObj[S2[i]]) {
      stringObj[S2[i]] = 1;
    } else {
      stringObj[S2[i]] += 1; //increment
    }
  }
  for (var j = 0; j < S1.length; j++) {
    if (stringObj[S1[j]]) {
      stringObj[S1[j]] -= 1; //decrement
    }
  }
  for (var key in stringObj) {
    counter += Math.abs(stringObj[key]);
  }
  return counter;
}
